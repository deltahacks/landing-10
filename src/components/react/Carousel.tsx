import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery, { type ReactImageGalleryItem } from "react-image-gallery";

export const Carousel = (props: { images: ReactImageGalleryItem[] }) => {
  return (
    <ImageGallery
      items={props.images}
      showThumbnails={false}
      showFullscreenButton={false}
      autoPlay={true}
      slideInterval={5000}
      lazyLoad={true}
    />
  );
};
