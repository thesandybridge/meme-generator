import { useEffect, useRef } from "react";
import { UseCanvasOptions } from "../types";


export default function useCanvas(options: UseCanvasOptions): React.RefObject<HTMLCanvasElement> {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (!canvas || !ctx) return

        if (options.imageUrl) {
            const image = new Image()
            image.src = options.imageUrl
            const aspectRatio = image.width / image.height
            let canvasWidth = options.imageSize.width
            let canvasHeight = options.imageSize.height

            if (!canvasWidth && !canvasHeight) {
                canvasWidth = image.width
                canvasHeight = image.height
            } else if (!canvasWidth) {
                canvasWidth = aspectRatio * canvasWidth
            } else if (!canvasHeight) {
                canvasHeight = canvasWidth / aspectRatio
            }


            image.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.save()
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate((options.imageRotation * Math.PI) / 180);

                if (options.imageMirror) {
                  ctx.scale(-1, 1);
                }

                ctx.drawImage(
                    image,
                    -canvasWidth / 2,
                    -canvasHeight / 2,
                    canvasWidth,
                    canvasHeight
                )
                ctx.restore()

                ctx.fillStyle = options.textColor
                ctx.font = "50px Arial"
                ctx.textAlign = "center"
                ctx.strokeStyle = "black"
                ctx.lineWidth = 1
                ctx.fillText(options.topText, canvas.width / 2, 50)
                ctx.fillText(options.bottomText, canvas.width / 2, canvas.height - 10)
                ctx.strokeText(options.topText, canvas.width / 2, 50)
                ctx.strokeText(options.bottomText, canvas.width / 2, canvas.height - 10)

            }
        }



    }, [canvasRef, options])

    return canvasRef

}

