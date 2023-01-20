/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ISceneElement } from "./classes/components/ISceneElement";
import { LM360Video } from "./classes/components/lm-360video/LM360Video";
import { LMAsset } from "./classes/components/lm-asset/LMAsset";
import { LMButton } from "./classes/components/lm-button/LMButton";
import { LMDiv } from "./classes/components/lm-div/LMDiv";
import { LMImage } from "./classes/components/lm-image/LMImage";
import { LMLayout } from "./classes/components/lm-layout/LMLayout";
import { LMModal } from "./classes/components/lm-modal/LMModal";
import { LMText } from "./classes/components/lm-text/LMText";
import { LMVideo } from "./classes/components/lm-video/LMVideo";
export namespace Components {
    interface Lm360video {
        "close": () => Promise<void>;
        "destroy": () => Promise<void>;
        "id": string;
        "parent": ISceneElement;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "position": string;
        "reset": () => Promise<void>;
        "sceneElement": LM360Video;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "src": string;
        "videoHeightSegments": number;
        "videoRadius": number;
        "videoWidthSegments": number;
        "vrEnabled": boolean;
    }
    interface LmAsset {
        "activeAnimation": string;
        "destroy": () => Promise<void>;
        "getAnimationNames": () => Promise<Array<string>>;
        "id": string;
        "parent": ISceneElement;
        "position": string;
        "radius": number;
        "sceneElement": LMAsset;
        "sequenceNo": number;
        "src": string;
        "visible": boolean;
        "vrEnabled": boolean;
        "xRotation": number;
        "xRotationSpeed": number;
        "yRotation": number;
        "yRotationSpeed": number;
        "zRotation": number;
        "zRotationSpeed": number;
    }
    interface LmButton {
        "backgroundColor": string;
        "borderRadius": number;
        "destroy": () => Promise<void>;
        "fontColor": string;
        "fontFamily": string;
        "fontSize": number;
        "height"?: number;
        "id": string;
        "offset": number;
        "padding"?: number;
        "parent": ISceneElement;
        "position": string;
        "sceneElement": LMButton;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "text": string;
        "textAlignment": string;
        "textDecoration": string;
        "visible": boolean;
        "vrEnabled": boolean;
        "width"?: number;
    }
    interface LmDiv {
        "append": (element: any) => Promise<void>;
        "backgroundColor": string;
        "borderRadius": number;
        "destroy": () => Promise<void>;
        "height"?: number;
        "horizontalAlign": string;
        "id": string;
        "itemHorizontalAlign": string;
        "itemVerticalAlign": string;
        "layout": string;
        "margin"?: number;
        "offset": number;
        "opacity"?: number;
        "padding"?: number;
        "parent": ISceneElement;
        "position": string;
        "prepend": (element: any) => Promise<void>;
        "removeElement": (element: any) => Promise<void>;
        "sceneElement": LMDiv;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "verticalAlign": string;
        "vrEnabled": boolean;
        "width": number;
        "xRotation": number;
        "yRotation": number;
        "zRotation": number;
    }
    interface LmDocument {
        "closeModal": () => Promise<void>;
        "controllerGuides": boolean;
        "defaultPlacementLocation": number;
        "id": string;
        "setLayout": (layoutId: string) => Promise<void>;
        "shadowsEnabled": boolean;
        "showModal": (id: string) => Promise<void>;
        "title": string;
        "titlecardBackground"?: string;
        "titlecardBackgroundImage"?: string;
        "titlecardFontColor": string;
        "titlecardFontFamily": string;
        "titlecardFontSize": string;
        "vrEnabled": boolean;
    }
    interface LmImage {
        "borderRadius": number;
        "destroy": () => Promise<void>;
        "height": number;
        "id": string;
        "modal": boolean;
        "offset": number;
        "parent": ISceneElement;
        "position": string;
        "sceneElement": LMImage;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "src": string;
        "visible": boolean;
        "vrEnabled": boolean;
        "width": number;
    }
    interface LmLayout {
        "destroy": () => Promise<void>;
        "id": string;
        "parent": ISceneElement;
        "position": string;
        "sceneElement": LMLayout;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "vrEnabled": boolean;
    }
    interface LmModal {
        "backgroundColor": string;
        "borderColor": string;
        "borderRadius": number;
        "borderWidth": number;
        "closeButtonWidth": number;
        "destroy": () => Promise<void>;
        "getUUID": () => Promise<string>;
        "height"?: number;
        "hide": () => Promise<void>;
        "id": string;
        "offset": number;
        "padding": number;
        "parent": ISceneElement;
        "position": string;
        "sceneElement": LMModal;
        "shadowsEnabled": boolean;
        "show": () => Promise<void>;
        "vrEnabled": boolean;
        "width": number;
    }
    interface LmText {
        "backgroundColor": string;
        "borderRadius": number;
        "destroy": () => Promise<void>;
        "fontColor": string;
        "fontFamily": string;
        "fontSize": number;
        "height"?: number;
        "id": string;
        "offset": number;
        "padding"?: number;
        "parent": ISceneElement;
        "position": string;
        "sceneElement": LMText;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "text": string;
        "textAlignment": string;
        "textDecoration": string;
        "visible": boolean;
        "vrEnabled": boolean;
        "width"?: number;
    }
    interface LmVideo {
        "destroy": () => Promise<void>;
        "height": number;
        "id": string;
        "offset": number;
        "parent": ISceneElement;
        "pause": () => Promise<void>;
        "placeholder": number;
        "play": () => Promise<void>;
        "playback": string;
        "position": string;
        "reset": () => Promise<void>;
        "sceneElement": LMVideo;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "src": string;
        "visible": boolean;
        "vrEnabled": boolean;
        "width": number;
    }
    interface LmVideoControls {
        "backgroundColor": string;
        "getVisible": () => Promise<boolean>;
        "height": number;
        "hide": () => Promise<void>;
        "id": string;
        "onClose": Function;
        "onPause": Function;
        "onPlay": Function;
        "parent": ISceneElement;
        "position": string;
        "sequenceNo": number;
        "shadowsEnabled": boolean;
        "show": (isPlaying: boolean) => Promise<void>;
        "vrEnabled": boolean;
        "width": number;
        "x": number;
        "y": number;
        "z": number;
    }
}
export interface Lm360videoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLm360videoElement;
}
export interface LmAssetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmAssetElement;
}
export interface LmButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmButtonElement;
}
export interface LmImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmImageElement;
}
export interface LmModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmModalElement;
}
export interface LmTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmTextElement;
}
export interface LmVideoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmVideoElement;
}
export interface LmVideoControlsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLmVideoControlsElement;
}
declare global {
    interface HTMLLm360videoElement extends Components.Lm360video, HTMLStencilElement {
    }
    var HTMLLm360videoElement: {
        prototype: HTMLLm360videoElement;
        new (): HTMLLm360videoElement;
    };
    interface HTMLLmAssetElement extends Components.LmAsset, HTMLStencilElement {
    }
    var HTMLLmAssetElement: {
        prototype: HTMLLmAssetElement;
        new (): HTMLLmAssetElement;
    };
    interface HTMLLmButtonElement extends Components.LmButton, HTMLStencilElement {
    }
    var HTMLLmButtonElement: {
        prototype: HTMLLmButtonElement;
        new (): HTMLLmButtonElement;
    };
    interface HTMLLmDivElement extends Components.LmDiv, HTMLStencilElement {
    }
    var HTMLLmDivElement: {
        prototype: HTMLLmDivElement;
        new (): HTMLLmDivElement;
    };
    interface HTMLLmDocumentElement extends Components.LmDocument, HTMLStencilElement {
    }
    var HTMLLmDocumentElement: {
        prototype: HTMLLmDocumentElement;
        new (): HTMLLmDocumentElement;
    };
    interface HTMLLmImageElement extends Components.LmImage, HTMLStencilElement {
    }
    var HTMLLmImageElement: {
        prototype: HTMLLmImageElement;
        new (): HTMLLmImageElement;
    };
    interface HTMLLmLayoutElement extends Components.LmLayout, HTMLStencilElement {
    }
    var HTMLLmLayoutElement: {
        prototype: HTMLLmLayoutElement;
        new (): HTMLLmLayoutElement;
    };
    interface HTMLLmModalElement extends Components.LmModal, HTMLStencilElement {
    }
    var HTMLLmModalElement: {
        prototype: HTMLLmModalElement;
        new (): HTMLLmModalElement;
    };
    interface HTMLLmTextElement extends Components.LmText, HTMLStencilElement {
    }
    var HTMLLmTextElement: {
        prototype: HTMLLmTextElement;
        new (): HTMLLmTextElement;
    };
    interface HTMLLmVideoElement extends Components.LmVideo, HTMLStencilElement {
    }
    var HTMLLmVideoElement: {
        prototype: HTMLLmVideoElement;
        new (): HTMLLmVideoElement;
    };
    interface HTMLLmVideoControlsElement extends Components.LmVideoControls, HTMLStencilElement {
    }
    var HTMLLmVideoControlsElement: {
        prototype: HTMLLmVideoControlsElement;
        new (): HTMLLmVideoControlsElement;
    };
    interface HTMLElementTagNameMap {
        "lm-360video": HTMLLm360videoElement;
        "lm-asset": HTMLLmAssetElement;
        "lm-button": HTMLLmButtonElement;
        "lm-div": HTMLLmDivElement;
        "lm-document": HTMLLmDocumentElement;
        "lm-image": HTMLLmImageElement;
        "lm-layout": HTMLLmLayoutElement;
        "lm-modal": HTMLLmModalElement;
        "lm-text": HTMLLmTextElement;
        "lm-video": HTMLLmVideoElement;
        "lm-video-controls": HTMLLmVideoControlsElement;
    }
}
declare namespace LocalJSX {
    interface Lm360video {
        "id"?: string;
        "onAddElementToRoot"?: (event: Lm360videoCustomEvent<ISceneElement>) => void;
        "onClick"?: (event: Lm360videoCustomEvent<any>) => void;
        "onHideCurrentLayout"?: (event: Lm360videoCustomEvent<any>) => void;
        "onShowCurrentLayout"?: (event: Lm360videoCustomEvent<any>) => void;
        "onViewCurrentLayout"?: (event: Lm360videoCustomEvent<any>) => void;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LM360Video;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "src"?: string;
        "videoHeightSegments"?: number;
        "videoRadius"?: number;
        "videoWidthSegments"?: number;
        "vrEnabled"?: boolean;
    }
    interface LmAsset {
        "activeAnimation"?: string;
        "id"?: string;
        "onClick"?: (event: LmAssetCustomEvent<any>) => void;
        "parent"?: ISceneElement;
        "position"?: string;
        "radius"?: number;
        "sceneElement"?: LMAsset;
        "sequenceNo"?: number;
        "src"?: string;
        "visible"?: boolean;
        "vrEnabled"?: boolean;
        "xRotation"?: number;
        "xRotationSpeed"?: number;
        "yRotation"?: number;
        "yRotationSpeed"?: number;
        "zRotation"?: number;
        "zRotationSpeed"?: number;
    }
    interface LmButton {
        "backgroundColor"?: string;
        "borderRadius"?: number;
        "fontColor"?: string;
        "fontFamily"?: string;
        "fontSize"?: number;
        "height"?: number;
        "id"?: string;
        "offset"?: number;
        "onClick"?: (event: LmButtonCustomEvent<any>) => void;
        "padding"?: number;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMButton;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "text"?: string;
        "textAlignment"?: string;
        "textDecoration"?: string;
        "visible"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
    }
    interface LmDiv {
        "backgroundColor"?: string;
        "borderRadius"?: number;
        "height"?: number;
        "horizontalAlign"?: string;
        "id"?: string;
        "itemHorizontalAlign"?: string;
        "itemVerticalAlign"?: string;
        "layout"?: string;
        "margin"?: number;
        "offset"?: number;
        "opacity"?: number;
        "padding"?: number;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMDiv;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "verticalAlign"?: string;
        "vrEnabled"?: boolean;
        "width"?: number;
        "xRotation"?: number;
        "yRotation"?: number;
        "zRotation"?: number;
    }
    interface LmDocument {
        "controllerGuides"?: boolean;
        "defaultPlacementLocation"?: number;
        "id"?: string;
        "shadowsEnabled"?: boolean;
        "title"?: string;
        "titlecardBackground"?: string;
        "titlecardBackgroundImage"?: string;
        "titlecardFontColor"?: string;
        "titlecardFontFamily"?: string;
        "titlecardFontSize"?: string;
        "vrEnabled"?: boolean;
    }
    interface LmImage {
        "borderRadius"?: number;
        "height"?: number;
        "id"?: string;
        "modal"?: boolean;
        "offset"?: number;
        "onClick"?: (event: LmImageCustomEvent<any>) => void;
        "onShowModalDialog"?: (event: LmImageCustomEvent<string>) => void;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMImage;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "src"?: string;
        "visible"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
    }
    interface LmLayout {
        "id"?: string;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMLayout;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "vrEnabled"?: boolean;
    }
    interface LmModal {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "borderRadius"?: number;
        "borderWidth"?: number;
        "closeButtonWidth"?: number;
        "height"?: number;
        "id"?: string;
        "offset"?: number;
        "onAddElementToRoot"?: (event: LmModalCustomEvent<ISceneElement>) => void;
        "onClick"?: (event: LmModalCustomEvent<any>) => void;
        "onHidden"?: (event: LmModalCustomEvent<any>) => void;
        "onShown"?: (event: LmModalCustomEvent<any>) => void;
        "padding"?: number;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMModal;
        "shadowsEnabled"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
    }
    interface LmText {
        "backgroundColor"?: string;
        "borderRadius"?: number;
        "fontColor"?: string;
        "fontFamily"?: string;
        "fontSize"?: number;
        "height"?: number;
        "id"?: string;
        "offset"?: number;
        "onClick"?: (event: LmTextCustomEvent<any>) => void;
        "padding"?: number;
        "parent"?: ISceneElement;
        "position"?: string;
        "sceneElement"?: LMText;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "text"?: string;
        "textAlignment"?: string;
        "textDecoration"?: string;
        "visible"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
    }
    interface LmVideo {
        "height"?: number;
        "id"?: string;
        "offset"?: number;
        "onClick"?: (event: LmVideoCustomEvent<any>) => void;
        "onShowModalDialog"?: (event: LmVideoCustomEvent<string>) => void;
        "parent"?: ISceneElement;
        "placeholder"?: number;
        "playback"?: string;
        "position"?: string;
        "sceneElement"?: LMVideo;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "src"?: string;
        "visible"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
    }
    interface LmVideoControls {
        "backgroundColor"?: string;
        "height"?: number;
        "id"?: string;
        "onAddElementToRoot"?: (event: LmVideoControlsCustomEvent<ISceneElement>) => void;
        "onClose"?: Function;
        "onPause"?: Function;
        "onPlay"?: Function;
        "onUpdateRootElementPosition"?: (event: LmVideoControlsCustomEvent<ISceneElement>) => void;
        "parent"?: ISceneElement;
        "position"?: string;
        "sequenceNo"?: number;
        "shadowsEnabled"?: boolean;
        "vrEnabled"?: boolean;
        "width"?: number;
        "x"?: number;
        "y"?: number;
        "z"?: number;
    }
    interface IntrinsicElements {
        "lm-360video": Lm360video;
        "lm-asset": LmAsset;
        "lm-button": LmButton;
        "lm-div": LmDiv;
        "lm-document": LmDocument;
        "lm-image": LmImage;
        "lm-layout": LmLayout;
        "lm-modal": LmModal;
        "lm-text": LmText;
        "lm-video": LmVideo;
        "lm-video-controls": LmVideoControls;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lm-360video": LocalJSX.Lm360video & JSXBase.HTMLAttributes<HTMLLm360videoElement>;
            "lm-asset": LocalJSX.LmAsset & JSXBase.HTMLAttributes<HTMLLmAssetElement>;
            "lm-button": LocalJSX.LmButton & JSXBase.HTMLAttributes<HTMLLmButtonElement>;
            "lm-div": LocalJSX.LmDiv & JSXBase.HTMLAttributes<HTMLLmDivElement>;
            "lm-document": LocalJSX.LmDocument & JSXBase.HTMLAttributes<HTMLLmDocumentElement>;
            "lm-image": LocalJSX.LmImage & JSXBase.HTMLAttributes<HTMLLmImageElement>;
            "lm-layout": LocalJSX.LmLayout & JSXBase.HTMLAttributes<HTMLLmLayoutElement>;
            "lm-modal": LocalJSX.LmModal & JSXBase.HTMLAttributes<HTMLLmModalElement>;
            "lm-text": LocalJSX.LmText & JSXBase.HTMLAttributes<HTMLLmTextElement>;
            "lm-video": LocalJSX.LmVideo & JSXBase.HTMLAttributes<HTMLLmVideoElement>;
            "lm-video-controls": LocalJSX.LmVideoControls & JSXBase.HTMLAttributes<HTMLLmVideoControlsElement>;
        }
    }
}
