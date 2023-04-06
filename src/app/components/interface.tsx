"use client"
import "../globals.css"
import * as htmlToImage from 'html-to-image';
import { useState, useRef } from "react"
import { HexColorPicker } from "react-colorful";
import { faRotateRight, faRotateLeft, faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    const handleRotate = (r: number, clockwise: boolean): void => {
        if (!clockwise) {
            setRotate(r - 90)
            setWidth(height)
            setHeight(width)
        } else {
            setRotate(r + 90)
            setWidth(height)
            setHeight(width)
        }
    }

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
                <input type="text" name="image_url" value={url} placeholder="Image URL" onChange={e => setUrl(e.target.value)}/>
                <input type="text" name="text_top" value={topTxt} placeholder="Top Text" onChange={e => setTopTxt(e.target.value)}/>
                <input type="text" name="text_bottom" value={bottomTxt} placeholder="Bottom Text" onChange={e => setBottomTxt(e.target.value)}/>
                <input type="number" name="width" value={width} placeholder={width.toString()} onChange={e => setWidth(parseInt(e.target.value))}/>
                <input type="number" name="height" value={height} placeholder={height.toString()} onChange={e => setHeight(parseInt(e.target.value))}/>
                <div className="image-controls">
                    <button title="Mirror" onClick={_ => setMirror(!mirror)}>
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faArrowsLeftRight}></FontAwesomeIcon>
                    </button>
                    <button title="Rotate Clockwise" onClick={_ => handleRotate(rotate, true)}>
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateRight}></FontAwesomeIcon>
                    </button>
                    <button title="Rotate Counter-clockwise" onClick={_ => handleRotate(rotate, false)}>
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateLeft}></FontAwesomeIcon>
                    </button>
                </div>
                <HexColorPicker color={color} onChange={setColor} />
                {url && (<button className="download-btn" onClick={exportMeme}>Download Meme</button>)}
            </div>
            <div className="workspace">
                <div className="meme" ref={meme} style={{ width: width, height: height}}>
                    <img
                        src={url}
                        className="meme-image"
                        style={{
                            transform: `scaleX(${mirror ? -1 : 1}) rotate(${rotate}deg)`,
                        }}
                    />
                    <div className="meme-text" style={{color: color}}>
                        {topTxt&& (<h2 className="text-top">{topTxt}</h2>)}
                        {bottomTxt && (<h2 className="text-bottom">{bottomTxt}</h2>)}
                    </div>
                </div>
            </div>

        </div>
    )
}
