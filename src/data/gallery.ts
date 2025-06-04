import Img1 from "/public/assets/images/gallery/Alaa.png";
import Img2 from "/public//assets/images/gallery/Alaa_2.jpg";
import Img3 from "/public//assets/images/gallery/Alaa_3.jpg";
import Img4 from "/public//assets/images/gallery/Alaa_4.jpg";
import Img5 from "/public//assets/images/gallery/Alaa_5.jpg";

export const galleryImages = [
  {
    id: 0,
    img: Img1,
  },
  {
    id: 1,
    img: Img2,
  },
  {
    id: 2,
    img: Img3,
  },
  {
    id: 3,
    img: Img4,
  },
  {
    id: 4,
    img: Img5,
  },
];

// TypeScript interface for type safety
export interface GalleryImage {
  id: number;
  img: string; // or string if using URL paths
}