import Img1 from "/public/assets/images/gallery/Alaa.png";
import Img2 from "/public/assets/images/gallery/Alaa_2.jpg";
import Img3 from "/public/assets/images/gallery/Alaa_3.jpg";
import Img4 from "/public/assets/images/gallery/Alaa_4.jpg";
import Img5 from "/public/assets/images/gallery/Alaa_4.jpg";
import Img6 from "/public/assets/images/gallery/Alaa_5.jpg";
import Img7 from "/public/assets/images/gallery/Alaa_6.jpg";
import Img8 from "/public/assets/images/gallery/Alaa_7.jpg";
import Img9 from "/public/assets/images/gallery/Alaa_8.jpg";
import Img10 from "/public/assets/images/gallery/Alaa_9.jpg";

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
  {
    id: 5,
    img: Img6,
  },
  {
    id: 6,
    img: Img7,
  },
  {
    id: 7,
    img: Img8,
  },
  {
    id: 8,
    img: Img9,
  },
  {
    id: 9,
    img: Img10,
  },
];

// TypeScript interface for type safety
export interface GalleryImage {
  id: number;
  img: string; // or string if using URL paths
}
