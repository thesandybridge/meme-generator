"use client"
import "./globals.css"
import { useState, useRef } from "react"
import Template from "./components/template";
import Settings from "./components/settings";

export default function MemeGenerator() {
    const [bottomTxt, setBottomTxt] = useState("")
    const [topTxt, setTopTxt] = useState("")
    const [url, setUrl] = useState("")
    const [width, setWidth] = useState(800)
    const [height, setHeight] = useState(800)
    const [mirror, setMirror] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [color, setColor] = useState("#ffffff")

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const exportMeme = (): void => {
        const canvas = canvasRef.current;
        if (canvas === null) return
        if (canvas) {
            const dataUrl = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.href = dataUrl;
            downloadLink.download = "meme.png";
            downloadLink.click();
        }
    }

    return (
        <div className="meme-interface">
            <div className="meme-settings">
                <h1 id="title">Meme Generator</h1>
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
                imageUrl={url}
                imageSize={{width: width, height: height}}
                imageMirror={mirror}
                imageRotation={rotate}
                textColor={color}
                topText={topTxt}
                bottomText={bottomTxt}
                />
            </div>

        </div>
    )
}

