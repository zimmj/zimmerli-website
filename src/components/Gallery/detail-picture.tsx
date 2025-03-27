import { AdvancedImage, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import React from 'react';
import { PictureFormat } from './gallery-picture';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'jzimmj',
  },
});

export interface GalleryPictureProps {
  picture: PictureFormat | null;
}

const DetailPicture: React.FunctionComponent<GalleryPictureProps> = ({
  picture,
}) => {
  if (picture == null) return <div></div>;

  const imageTag = cld.image(picture.id);

  return (
    <div className="prose max-w-none flex flex-col h-full">
      <div className="p-5">
        <div className="flex flex-row">
          <h2 className="mt-0 mb-1">{picture.caption}</h2>
          <div className="mx-1">
            <div
              className="tooltip tooltip-bottom mobile:tooltip-open"
              data-tip={`${picture.height} x ${picture.width}`}
            >
              <div className="border border-current rounded-full p-0 w-4 h-4 text-xs font-bold block">
                i
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2">{picture.alt}</div>
      </div>

      <div className="overflow-auto flex-auto h-20">
        <AdvancedImage
          className="max-w-none m-0 h-full m-auto py-1 shadow-lg shadow-cyan-500/50"
          cldImg={imageTag}
          alt={picture.alt}
          plugins={[placeholder()]}
        />
      </div>
    </div>
  );
};

export default DetailPicture;
