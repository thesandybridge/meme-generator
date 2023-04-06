declare type SetState<T> = React.Dispatch<React.SetStateAction<T>>
declare type fnVoid = () => void

declare type Meme = {
    scale: number,
    topText: string,
    bottomText: string,
    url: string,
    mirror: boolean,
    rotate: number,
    color: string,
    bars: boolean,
}

declare type Controls = {
    settings?: Meme,
    setUrl: SetState<string>,
    setTopTxt: SetState<string>,
    setBottomTxt: SetState<string>,
    setRotate: SetState<number>,
    setScale: SetState<number>,
    setMirror: SetState<boolean>,
    setColor: SetState<string>,
    setBars: SetState<boolean>,
    export: fnVoid,
}
