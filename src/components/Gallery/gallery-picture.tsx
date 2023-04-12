import React from "react"

import { Cloudinary } from "@cloudinary/url-gen";
import { fill, scale, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { coloumnWidthFunction } from "./gallery-grid";
import { AdvancedImage } from "@cloudinary/react";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { limitFit } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'jzimmj'
    }
});

const GalleryPicture: React.FunctionComponent<GalleryPictureProps> = ({ picture, windowWidth, index }) => {

    const columnWidth = coloumnWidthFunction(windowWidth);
    const maxSpan = Math.floor(windowWidth / columnWidth);
    const pictureColumnWidth = picture.width / maxSpan;

    const span = Math.min(Math.floor(picture.width / picture.height), maxSpan);
    const amountOfGap = 5 * (span - 1);

    const cloudinaryImage = cld.image(picture.id);
    var imageTage;
    if (maxSpan == span) {
        imageTage = cloudinaryImage
            .resize(crop().width((pictureColumnWidth * span) + amountOfGap).height(pictureColumnWidth))
            .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
    } else {
        imageTage = cloudinaryImage
            .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
    }

    //tailwind uses col-span-1 col-span-2 col-span-3 col-span-4 col-span -5
    return (<div key={index} className={`group not-prose col-span-${span} relative`} >
        <AdvancedImage cldImg={imageTage} alt={picture.alt} />
        <div className="hidden group-hover:block absolute top-0 bg-base-100/60 px-2">
            {picture.caption}
        </div>
        <div className="hidden group-hover:block absolute bottom-0 bg-base-100/60 w-full px-2">
            {picture.alt}
        </div>
    </div>)

}

export interface GalleryPictureProps {
    picture: PictureFormat;
    windowWidth: number;
    index: number;
};

export interface PictureFormat {
    url: string;
    id: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
}

export default GalleryPicture;