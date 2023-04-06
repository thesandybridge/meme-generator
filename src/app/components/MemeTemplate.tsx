import { forwardRef } from "react"

const MemeTemplate = forwardRef(function MemeTemplate(props: Meme, ref: any ) {

    const {
        scale,
        url,
        bottomText,
        topText,
        color,
        mirror,
        rotate,
    } = props

    return (
        <>
            <div className="meme" ref={ref} style={{ width: scale, height: scale}}>
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

export default MemeTemplate

