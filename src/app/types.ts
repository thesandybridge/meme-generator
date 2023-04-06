export type ImageSize = {
  width: number;
  height: number;
}

export type UseCanvasOptions = {
  topText: string;
  bottomText: string;
  textColor: string;
  imageUrl: string;
  imageSize: ImageSize;
  imageRotation: number;
  imageMirror: boolean;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
export type fnVoid = () => void

export type Meme = {
    width: number,
    height: number,
    topText: string,
    bottomText: string,
    url: string,
    mirror: boolean,
    rotate: number,
    color: string,
}

export type Controls = {
    settings?: Meme,
    setUrl: SetState<string>,
    setTopTxt: SetState<string>,
    setBottomTxt: SetState<string>,
    setRotate: SetState<number>,
    setWidth: SetState<number>,
    setHeight: SetState<number>,
    setMirror: SetState<boolean>,
    setColor: SetState<string>,
    export: fnVoid,
}

export interface MemeGeneratorProps {
    topText: string;
    bottomText: string;
    textColor: string;
    imageSize: ImageSize;
    imageUrl: string;
    imageMirror: boolean;
    imageRotation: number;
}
