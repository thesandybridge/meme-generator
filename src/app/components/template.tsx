import { forwardRef } from "react"
import {Meme} from "./types"


const Template = forwardRef(function Template(props: Meme, ref: any ) {

    const {
        width,
        height,
        url,
        bottomText,
        topText,
        color,
        mirror,
        rotate,
    } = props

    return (
        <>
            <div className="meme" ref={ref} style={{ width: width, height: height}}>
                <img
                    alt="meme"
                    src={url}
                    className="meme-image"
                    style={{
                        transform: `scaleX(${mirror ? -1 : 1}) rotate(${rotate}deg)`,
                    }}
                />
                <div className="meme-text" style={{color: color}}>
                    {topText && (<h2 className="text-top">{topText}</h2>)}
                    {bottomText && (<h2 className="text-bottom">{bottomText}</h2>)}
                </div>
            </div>
        </>
    )
})

export default Template

