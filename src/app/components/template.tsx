import useCanvas from "../hooks/useCanvas";
import { MemeGeneratorProps } from "../types";

const MemeGenerator: React.FC<MemeGeneratorProps> = ({
    topText,
    bottomText,
    textColor,
    imageSize,
    imageUrl,
    imageMirror,
    imageRotation,
}) => {

    const canvasRef = useCanvas({
    topText,
    bottomText,
    textColor,
    imageUrl,
    imageRotation,
    imageMirror,
    imageSize
    });


    return (
      <>
        <canvas
          ref={canvasRef}
          width={imageSize.width}
          height={imageSize.height}
          style={{ border: "1px solid black" }}
        />
      </>
    );
};

export default MemeGenerator;

