"use client"
import "./globals.css"
import { toPng } from 'html-to-image';
import { useState, useRef } from "react"
import MemeTemplate from "./components/MemeTemplate";
import MemeControls from "./components/MemeControls";

export default function MemeGenerator() {
    const [bottomTxt, setBottomTxt] = useState("")
    const [topTxt, setTopTxt] = useState("")
    const [url, setUrl] = useState("")
    const [scale, setScale] = useState(800)
    const [mirror, setMirror] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [color, setColor] = useState("#ffffff")
    const [bars, setBars] = useState(false)

    const meme = useRef<HTMLDivElement>(null)

    const exportMeme = (): void => {
        if (meme.current === null) return

        toPng(meme.current).then((url) => {
            const link = document.createElement('a')
            link.download = 'meme.png'
            link.href = url
            link.click()
        }).catch(err => console.error(err))
    }

    return (
        <div className="meme-interface">
            <div className="meme-settings">
                <h1 id="title">Meme Generator</h1>
                <MemeControls
                settings={{
                    url: url,
                    scale: scale,
                    topText: topTxt,
                    bottomText: bottomTxt,
                    mirror: mirror,
                    rotate: rotate,
                    color: color,
                    bars: bars,
                }}
                setUrl={setUrl}
                setTopTxt={setTopTxt}
                setBottomTxt={setBottomTxt}
                setRotate={setRotate}
                setScale={setScale}
                setMirror={setMirror}
                setColor={setColor}
                setBars={setBars}
                export={exportMeme}
                />
            </div>
            <div className="workspace">
                {url && (
                    <MemeTemplate
                    ref={meme}
                    url={url}
                    scale={scale}
                    mirror={mirror}
                    rotate={rotate}
                    color={color}
                    topText={topTxt}
                    bottomText={bottomTxt}
                    bars={bars}
                    />
                )}
            </div>

        </div>
    )
}

