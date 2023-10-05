import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const Carousel = () => {
  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      autoPlay={true}
      slideInterval={5000}
    />
  );
};
