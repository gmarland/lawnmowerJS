import { 
    Group,
    Vector3,
    Mesh,
    Color,
    DoubleSide,
    TextureLoader
} from 'three';

import { Dimensions } from "../../geometry/Dimensions";
import { GeometryUtils } from '../../geometry/GeometryUtils';
import { MaterialUtils } from '../../geometry/MaterialUtils';
import { PlaneUtils } from '../../geometry/PlaneUtils';
import { MainScene } from '../../scene/MainScene';
import { SceneElementPlacement } from '../../scene/SceneElementPlacement';
import { SceneElement } from "../SceneElement";
import { LMLayout } from '../lm-layout/LMLayout';
import { LMVideoControlsConfig } from './LMVideoControlsConfig';

export class LMVideoControls implements SceneElement {
    private _parent: SceneElement;

    private _vrEnabled: boolean;

    private _id: string;

    private _position?: Vector3;

    private _mesh: Mesh;

    private _closeMesh: Mesh;

    private _playMesh: Mesh;
    private _pauseMesh: Mesh;
   
    private _backgroundColor: string;

    private _baseImagePath: string;
    
    private _initialWidth?: number = null; 
    private _initialHeight?: number = null;
    
    // Set through the API, typically through a parent div
    private _setWidth?: number = null;
    private _setHeight?: number = null;

    private _borderRadius: number = 10;
    
    private _padding: number = 10;

    private _x: number;
    
    private _y: number;
    
    private _z: number;

    private _content: Group = new Group();

    private _initialized: boolean = false;
    
    private _drawing: boolean = false;
    private _redraw: boolean = false;

    public onPlay?: Function = null;
    public onPause?: Function = null;
    public onClose?: Function = null;

    constructor(parent: SceneElement, id: string, config: LMVideoControlsConfig) {
        this._parent = parent;

        this._vrEnabled = config.vrEnabled;
        
        this._id = id;

        this._baseImagePath = config.baseImagePath;

        this._backgroundColor = config.backgroundColor;

        if (config.width) this._initialWidth = config.width;
        if (config.height) this._initialHeight = config.height;

        this._x = config.x;
        this._y = config.y;
        this._z = config.z;
        
        this._content.visible = false;
    }

    ////////// Getters
    
    public get id(): string {
        return this._id;
    }
    
    public get uuid(): string {
        return this._content.uuid;
    }
    
    public get position(): Vector3 {
        return this._position;
    }

    public get dynamicWidth(): boolean {
        return (this._initialWidth == null);
    }

    public get width(): number {
        if (this._setWidth !== null) return this._setWidth;
        else return this._initialWidth ? this._initialWidth : 0;
    }

    public get height(): number {
        if (this._setHeight !== null) return this._setHeight;
        else return this._initialHeight ? this._initialHeight : 0;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    public get x(): number {
        return this.x;
    }

    public get y(): number {
        return this.y;
    }

    public get z(): number {
        return this.z;
    }

    public get visible(): boolean {
        return (this._content == null) || this._content.visible;
    }

    ////////// Setters

    public set id(value: string) {
        this._id = value;
    }
    
    public set position(value: Vector3) {
        this._position = value;
    }

    public set width(value: number) {
        this._setWidth = value;
    }

    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

    public set height(value: number) {
        this._setHeight = value;
    }

    public set x(value: number) {
        this._x = value;
    }

    public set y(value: number) {
        this._y = value;
    }

    public set z(value: number) {
        this._z = value;
    }

    public set visible(value: boolean) {
        this._content.visible = value;
    }
    
    ////////// Public Methods

    // --- Data Methods

    public getPlacementLocation(): SceneElementPlacement {
        if (this._vrEnabled) return SceneElementPlacement.PlacedAtCamera;
        else return SceneElementPlacement.AttachedToCamera;
    }
    
    public getDimensions(): Dimensions {
        return {
            width: this.width,
            height: this._initialHeight
        }
    }
    
    public async getPosition(): Promise<Vector3> {
        return new Promise(async (resolve) => {
            if (!this._content) await this.getContent(); 
    
            resolve(new Vector3(this._x, this._y, this._z));
        });
    }

    public addChildElement(position: number, childElement: SceneElement): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    public removeChildElement(childElement: SceneElement): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }
    
    public getChildSceneElements(): SceneElement[] {
        return [];
    }

    public getIsChildElement(uuid: string): boolean {
        return uuid === this.uuid;
    }
    
    public isPartOfLayout(): boolean {
        if (this._parent) {
            if (this._parent instanceof LMLayout) return true;
            if (this._parent instanceof MainScene) return false;
            else return this._parent.isPartOfLayout();
        }
        else {
            return false;
        }
    }

    public isLayoutChild(layoutId: string): boolean {
        if (this._parent) {
            if ((this._parent instanceof LMLayout) && 
                ((this._parent as LMLayout).id == layoutId)) {
                    return true;
            }
            else if (this._parent instanceof MainScene) {
                return false
            }
            else {
                return this._parent.isLayoutChild(layoutId);
            }
        }
        else {
            return false;
        }
    }

    // --- Rendering Methods
    
    public getContent(): Promise<Group> {
        return new Promise(async (resolve) => {
            if (!this._initialized) await this.draw();

            resolve(this._content);
        });
    }

    public draw(): Promise<boolean> {
        this._initialized = true;
        
        return new Promise(async (resolve) => {
            if (!this._drawing) {
                this._drawing = true;
                this._redraw = false;
                
                const currentDimensions = GeometryUtils.getDimensions(this._content);

                await this.generateContent(this.width, this.height);
                    
                this._drawing = false;
                        
                if (this._redraw) {
                    await this.draw();
                    
                    const newDimensions = GeometryUtils.getDimensions(this._content);

                    resolve(((currentDimensions.width !== newDimensions.width) || (currentDimensions.height !== newDimensions.height)));
                }
                else {
                    const newDimensions = GeometryUtils.getDimensions(this._content);

                    resolve(((currentDimensions.width !== newDimensions.width) || (currentDimensions.height !== newDimensions.height)));
                }
            }
            else {
                this._redraw = true;

                resolve(false);
            }
        });
    }

    public async drawParent(): Promise<void> {
        const updatedDimensions = await this._parent.draw();
        if (updatedDimensions || (this._parent instanceof LMLayout)) await this._parent.drawParent();
    }

    public clicked(meshId: string): Promise<void> {
        return new Promise((resolve) => {
            if (this._playMesh && (meshId === this._playMesh.uuid)) {
                this._playMesh.visible = false;
                this._pauseMesh.visible = true;

                if (this.onPlay) this.onPlay();
            }
            
            if (this._pauseMesh && (meshId === this._pauseMesh.uuid)) {
                this._pauseMesh.visible = false;
                this._playMesh.visible = true;

                if (this.onPause) this.onPause();
            }
            
            if (this._closeMesh && (meshId === this._closeMesh.uuid)) {
                if (this.onClose) this.onClose();
            }

            resolve();
        });
    }

    public show(isPlaying: boolean): void {
        if (isPlaying) {
            this._playMesh.visible = false;
            this._pauseMesh.visible = true;
        }
        else {
            this._playMesh.visible = true;
            this._pauseMesh.visible = false;
        }

        this.visible = true;
    }

    public update(delta: number): void {
    }

    public enableLayout(layoutId: string): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    public disableLayouts(): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    public destroy(): Promise<void> {
        return new Promise((resolve) => {
            if (this._parent && this._parent.removeChildElement) this._parent.removeChildElement(this);

            if (this._content) {
                this._content.clear();
                this._content = null;
            }

            this.destroyMesh();
            
            resolve();
        });
    }

    ////////// Private Methods
    
    private async generateContent(width: number, height: number): Promise<void> {
        return new Promise((resolve) => {
            // Clean up existing layout

            this._content.clear();

            this.destroyMesh();

            // Build layout
        
            const geometry = PlaneUtils.getPlane(width, height, this._borderRadius);
    
            const material = MaterialUtils.getBasicMaterial({
                color: new Color(this._backgroundColor),
                side: DoubleSide
            });
            
            this._mesh = new Mesh(geometry, material);
            this._mesh.rotation.y = GeometryUtils.degToRad(180);
            this._mesh.rotation.z = GeometryUtils.degToRad(180);
            
            this._closeMesh = new Mesh(PlaneUtils.getSquaredPlane(height-(this._padding*2), height-(this._padding*2)), MaterialUtils.getBasicMaterial({
                map: new TextureLoader().load(this._baseImagePath + '/close.png'),
                transparent: true,
                side: DoubleSide
            }));

            this._playMesh = new Mesh(PlaneUtils.getSquaredPlane(height-(this._padding*2), height-(this._padding*2)), MaterialUtils.getBasicMaterial({
                map: new TextureLoader().load(this._baseImagePath + '/play.png'),
                transparent: true,
                side: DoubleSide
            }));

            this._pauseMesh = new Mesh(PlaneUtils.getSquaredPlane(height-(this._padding*2), height-(this._padding*2)), MaterialUtils.getBasicMaterial({
                map: new TextureLoader().load(this._baseImagePath + '/pause.png'),
                transparent: true,
                side: DoubleSide
            }));
            this._pauseMesh.visible = false;

            this._closeMesh.translateX(((this.width/2)*-1) + (this.height/2));
            this._closeMesh.translateZ(-0.2);

            this._playMesh.translateX((this.width/2) - (this.height/2));
            this._playMesh.translateZ(-0.2);

            this._pauseMesh.translateX((this.width/2) - (this.height/2));
            this._pauseMesh.translateZ(-0.2);

            this._mesh.add(this._closeMesh);
            this._mesh.add(this._playMesh);
            this._mesh.add(this._pauseMesh);

            this._content.add(this._mesh);

            resolve();
        });
    }

    private destroyMesh(): void {
        if (this._closeMesh) {
            this._closeMesh.geometry.dispose();
            this._closeMesh.material.dispose();
            this._closeMesh = null;
        }
        
        if (this._playMesh) {
            this._playMesh.geometry.dispose();
            this._playMesh.material.dispose();
            this._pauseMesh = null;
        }
        
        if (this._pauseMesh) {
            this._pauseMesh.geometry.dispose();
            this._pauseMesh.material.dispose();
            this._pauseMesh = null;
        }

        if (this._mesh) {
            this._mesh.geometry.dispose();
            this._mesh.material.dispose();
            this._mesh = null;
        }
    }
}