import {Controls} from "./types"
import { HexColorPicker } from "react-colorful";
import { faRotateRight, faRotateLeft, faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Settings(props: Controls) {

    const handleRotate = (r: number, clockwise: boolean): void => {

        if (!clockwise) {
            props.setRotate(r - 90)
            props.setWidth(props.settings?.height)
            props.setHeight(props.settings?.width)
        } else {
            props.setRotate(r + 90)
            props.setWidth(props.settings?.height)
            props.setHeight(props.settings?.width)
        }
    }

    return (
        <>
            <input type="text" name="image_url" value={props.settings?.url} placeholder="Image URL" onChange={e => props.setUrl(e.target.value)}/>
            <input type="text" name="text_top" value={props.settings?.topText} placeholder="Top Text" onChange={e => props.setTopTxt(e.target.value)}/>
            <input type="text" name="text_bottom" value={props.settings?.bottomText} placeholder="Bottom Text" onChange={e => props.setBottomTxt(e.target.value)}/>
            <input type="number" name="width" value={props.settings?.width} placeholder={props.settings?.width.toString()} onChange={e => props.setWidth(parseInt(e.target.value))}/>
            <input type="number" name="height" value={props.settings?.height} placeholder={props.settings?.height.toString()} onChange={e => props.setHeight(parseInt(e.target.value))}/>
            <div className="image-controls">
                <button title="Mirror" onClick={_ => props.setMirror(!props.settings?.mirror)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faArrowsLeftRight}></FontAwesomeIcon>
                </button>
                <button title="Rotate Clockwise" onClick={_ => handleRotate(props.settings!.rotate, true)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateRight}></FontAwesomeIcon>
                </button>
                <button title="Rotate Counter-clockwise" onClick={_ => handleRotate(props.settings!.rotate, false)}>
                    <FontAwesomeIcon style={{fontSize:"25px"}} icon={faRotateLeft}></FontAwesomeIcon>
                </button>
            </div>
            <HexColorPicker color={props.settings?.color} onChange={props.setColor} />
            {props.settings?.url && (<button className="download-btn" onClick={props.export}>Download Meme</button>)}
        </>
    )
}
