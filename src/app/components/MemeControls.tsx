import { HexColorPicker } from "react-colorful";
import { faRotateRight, faRotateLeft, faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, SetStateAction } from "react";

export default function MemeControls(props: Controls) {

    const {
        settings,
        setUrl,
        setTopTxt,
        setBottomTxt,
        setRotate,
        setScale,
        setMirror,
        setColor,
    } = props

    /**
     * Rotate image 90 degrees clockwise or Counter-clockwise.
     *
     * @param {number} deg
     * @param {boolean} clockwise
     */
    const handleRotate = (deg: number, clockwise: boolean): void => {
        setRotate(clockwise ? deg + 90 : deg - 90)
    }

    /**
     * Checks for an empty string. If string is not empty attempt to parseInt
     *
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns {SetStateAction<number>} a number to be used with useState
     */
    const handleSize = (event: ChangeEvent<HTMLInputElement>): SetStateAction<number> => {
        let n = parseInt(event.target.value)
        return isNaN(n) ? 200 : n
    }

    return (
        <>
            <label htmlFor="image_url">Image URL</label>
            <input type="text" name="image_url" value={settings?.url} placeholder="Image URL" onChange={e => setUrl(e.target.value)}/>
            <label htmlFor="text_top">Top Text</label>
            <input type="text" name="text_top" value={settings?.topText} placeholder="Top Text" onChange={e => setTopTxt(e.target.value)}/>
            <label htmlFor="text_bottom">Bottom Text</label>
            <input type="text" name="text_bottom" value={settings?.bottomText} placeholder="Bottom Text" onChange={e => setBottomTxt(e.target.value)}/>

            <label htmlFor="scale">Scale</label>
            <input
            type="range"
            min="200"
            max="1000"
            name="scale"
            value={settings?.scale}
            placeholder={settings?.scale ? settings?.scale.toString() : ""}
            onChange={e => setScale(handleSize(e))}/>


            <div className="image-controls">
                <button title="Mirror" onClick={_ => setMirror(!settings?.mirror)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faArrowsLeftRight}></FontAwesomeIcon>
                </button>
                <button title="Rotate Clockwise" onClick={_ => handleRotate(settings!.rotate, true)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateRight}></FontAwesomeIcon>
                </button>
                <button title="Rotate Counter-clockwise" onClick={_ => handleRotate(settings!.rotate, false)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateLeft}></FontAwesomeIcon>
                </button>
            </div>

            <HexColorPicker color={settings?.color} onChange={setColor} />
            {settings?.url && (<button className="download-btn" onClick={props.export}>Download Meme</button>)}
        </>
    )
}
