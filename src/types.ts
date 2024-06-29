type ImageJSON = {
  id: number;
  thumbnailURL: string;
  fullSizeURL: string;
  alt: string;

  // Optional properties
  description?: string;
  title?: string;
  date?: string;
  price?: number;
};
