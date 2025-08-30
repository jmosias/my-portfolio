import { Component } from "solid-js";

interface WorkGalleryProps {
  images: string[];
  alts: string[];
}

const WorkGallery: Component<WorkGalleryProps> = (props) => {
  const { images, alts } = props;
  return (
    <div class="border-primary-transparent overflow-hidden rounded-md border lg:rounded-lg">
      <img
        src={images[0]}
        alt={alts[0]}
        class="h-auto w-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default WorkGallery;
