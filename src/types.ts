type ImageJSON = {
  id: number;
  thumbnailURL: string;
  fullSizeURL: string;
  width: number;
  height: number;
  alt: string;

  // Optional properties
  description?: string;
  title?: string;
  date?: string;
  price?: number;
};
