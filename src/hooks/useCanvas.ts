import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface UseCanvasArgs {
  imageURL: string;
}

interface UseCanvasState {
  setCanvasRef: Dispatch<SetStateAction<HTMLCanvasElement | null>>;
}

export const useCanvasRef = (args: UseCanvasArgs): UseCanvasState => {
  const { imageURL } = args;
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef == null) return;
    getImage(imageURL).then((image) => {
      const context = canvasRef.getContext("2d");
      if (context == null) throw new Error("Failed to get context");
      const { naturalWidth, naturalHeight } = image;
      canvasRef.width = naturalWidth;
      canvasRef.height = naturalHeight;
      context.drawImage(image, 0, 0);
    });
  }, [imageURL, canvasRef]);

  return {
    setCanvasRef,
  };
};

export const getImage = (imageUrl: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => resolve(image);
    image.onerror = reject;
  });
