import React from 'react';

import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload } from '@cloudinary/react';

const GalleryPicture: React.FunctionComponent<
  GalleryPictureProps
> = ({ picture, columnWidth, index, openModal }) => {
  //tailwind uses col-span-1 col-span-2 col-span-3 col-span-4 col-span -5
  return (
    <>
      <div
        key={index}
        className={`group not-prose col-span-${picture.span} relative`}
        style={{
          height: columnWidth,
        }}
        onClick={() => openModal(picture)}
      >
        <AdvancedImage
          cldImg={picture.pictureTag}
          alt={picture.alt}
          plugins={[
            lazyload({
              rootMargin: '10px 20px 10px 30px',
              threshold: 0.25,
            }),
          ]}
        />
        <div className="hidden group-hover:block absolute top-0 bg-base-100/60 px-2">
          {picture.caption}
        </div>
        <div className="hidden group-hover:sm:block absolute bottom-0 bg-base-100/60 w-full px-2">
          {picture.alt}
        </div>
      </div>
    </>
  );
};

export interface GalleryPictureProps {
  picture: PictureFormat;
  columnWidth: number;
  index: number;
  openModal: (picture: PictureFormat) => void;
}

export interface PictureFormat {
  pictureTag: CloudinaryImage;
  span: number;
  id: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export default GalleryPicture;
