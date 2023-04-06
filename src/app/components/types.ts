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
    setUrl: any,
    setTopTxt: any,
    setBottomTxt: any,
    setRotate: any,
    setWidth: any,
    setHeight: any,
    setMirror: any,
    setColor: any,
    export: any
}
