"use client"
import "../globals.css"
import * as htmlToImage from 'html-to-image';
import { useState, useRef } from "react"
import Template from "./template";
import Settings from "./settings";

export default function Interface() {
    const [bottomTxt, setBottomTxt] = useState("")
    const [topTxt, setTopTxt] = useState("")
    const [url, setUrl] = useState("https://picsum.photos/800")
    const [width, setWidth] = useState(800)
    const [height, setHeight] = useState(800)
    const [mirror, setMirror] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [color, setColor] = useState("#ffffff");

    const meme = useRef<HTMLDivElement>(null)

    const exportMeme = (): void => {
        if (meme.current === null) {
            return
        }

        htmlToImage.toPng(meme.current).then((url) => {
            const link = document.createElement('a')
            link.download = 'meme.png'
            link.href = url
            link.click()
        }).catch(err => console.log(err))
    }

    return (
        <div className="meme-interface">
            <div className="meme-settings">
                <h1>Meme Generator</h1>
                <Settings
                settings={{
                    url: url,
                    width: width,
                    height: height,
                    topText: topTxt,
                    bottomText: bottomTxt,
                    mirror: mirror,
                    rotate: rotate,
                    color: color
                }}
                setUrl={setUrl}
                setTopTxt={setTopTxt}
                setBottomTxt={setBottomTxt}
                setRotate={setRotate}
                setWidth={setWidth}
                setHeight={setHeight}
                setMirror={setMirror}
                setColor={setColor}
                export={exportMeme}
                />
            </div>
            <div className="workspace">
                <Template
                ref={meme}
                url={url}
                width={width}
                height={height}
                mirror={mirror}
                rotate={rotate}
                color={color}
                topText={topTxt}
                bottomText={bottomTxt}
                />
            </div>

        </div>
    )
}
