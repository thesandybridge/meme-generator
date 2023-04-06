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

            let drawWidth: number, drawHeight: number

            if (aspectRatio > 1) {
                drawWidth = canvas.width
                drawHeight = canvas.height
            }  else {
                drawWidth = canvas.height * aspectRatio
                drawHeight = canvas.height
            }

            const loadImage = () => {
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
                        -drawWidth / 2,
                        -drawHeight / 2,
                        drawWidth,
                        drawHeight
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

            loadImage()
        }



    }, [canvasRef, options])

    return canvasRef

}

