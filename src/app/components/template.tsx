import { forwardRef } from "react"
import {Meme} from "./types"


const Template = forwardRef(function Template(props: Meme, ref: any ) {
    return (
        <>
            <div className="meme" ref={ref} style={{ width: props.width, height: props.height}}>
                <img
                    alt="meme"
                    src={props.url}
                    className="meme-image"
                    style={{
                        transform: `scaleX(${props.mirror ? -1 : 1}) rotate(${props.rotate}deg)`,
                    }}
                />
                <div className="meme-text" style={{color: props.color}}>
                    {props.topText && (<h2 className="text-top">{props.topText}</h2>)}
                    {props.bottomText && (<h2 className="text-bottom">{props.bottomText}</h2>)}
                </div>
            </div>
        </>
    )
})

export default Template

