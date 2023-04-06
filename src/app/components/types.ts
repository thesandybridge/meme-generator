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
