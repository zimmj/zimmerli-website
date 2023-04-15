import React, { useEffect, useMemo } from "react"

import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { coloumnWidthFunction } from "./gallery-grid";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'jzimmj'
    }
});


const GalleryPicture: React.FunctionComponent<GalleryPictureProps> = ({ picture, windowWidth, index, openModal }) => {
    const columnWidth = coloumnWidthFunction(windowWidth);
    const maxSpan = Math.floor(windowWidth / columnWidth);
    const span = Math.min(Math.floor(picture.width / picture.height), maxSpan);

    const imageTage = useMemo(() => calculatePictureTag(maxSpan, span), [maxSpan, span]);

    function calculatePictureTag(maxSpan: number, span: number): CloudinaryImage {
        console.log("calculatePictureTag")
        const pictureColumnWidth = picture.width / maxSpan;
        const amountOfGap = 5 * (span - 1);
        const cloudinaryImage = cld.image(picture.id);
        if (maxSpan == span) {
            return cloudinaryImage
                .resize(crop().width((pictureColumnWidth * span) + amountOfGap).height(pictureColumnWidth))
                .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
        } else {
            return cloudinaryImage
                .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
        }
    }

    //tailwind uses col-span-1 col-span-2 col-span-3 col-span-4 col-span -5
    return (
        <>
            <div key={index} className={`group not-prose col-span-${span} relative`}
                onClick={() => openModal(picture)}
            >
                <AdvancedImage cldImg={imageTage} alt={picture.alt} />
                <div className="hidden group-hover:block absolute top-0 bg-base-100/60 px-2">
                    {picture.caption}
                </div>
                <div className="hidden group-hover:sm:block absolute bottom-0 bg-base-100/60 w-full px-2">
                    {picture.alt}
                </div>
            </div>

        </>
    )

}

export interface GalleryPictureProps {
    picture: PictureFormat;
    windowWidth: number;
    index: number;
    openModal: (picture: PictureFormat) => void;
}

export interface PictureFormat {
    url: string;
    id: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
}

export default GalleryPicture;