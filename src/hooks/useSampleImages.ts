import { Dispatch, SetStateAction, useState } from "react";

interface UseSampleImagesState {
  sampleImageURLs: string[];
  selectedImageURL: string;
  setSelectedImageURL: Dispatch<SetStateAction<string>>;
}

export const useSampleImages = (): UseSampleImagesState => {
  const [selectedImageURL, setSelectedImageURL] = useState(SampleImageURLs[0]);

  return {
    sampleImageURLs: SampleImageURLs,
    selectedImageURL,
    setSelectedImageURL,
  };
};

const SampleImageURLs = [
  "/sample-images/landscape.jpg",
  "/sample-images/portrait.jpg",
];
