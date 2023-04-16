import React, { useMemo } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import GalleryGrid, { coloumnWidthFunction } from "../components/Gallery/gallery-grid";
import { graphql } from 'gatsby';
import GalleryPicture, { PictureFormat } from "../components/Gallery/gallery-picture";
import { useWindowWidth } from "@react-hook/window-size";
import SlideInModal from "../components/Slide-In-Modal/slide-in-modal";
import DetailPicture from "../components/Gallery/detail-picture";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { crop, thumbnail } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'jzimmj'
  }
});


const LandScapeGellery: React.FunctionComponent = ({ data }) => {
  const windowWidth = useWindowWidth();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [picture, setPicture] = React.useState<PictureFormat | null>(null);

  function onOpenModal(picture: PictureFormat): void {
    setPicture(picture);
    setIsOpen(true);
  }

  function onCloseModal(): void {
    setPicture(null);
    setIsOpen(false);
  }

  const columnWidth = coloumnWidthFunction(windowWidth);
  const maxSpan = Math.floor(windowWidth / columnWidth);


  function calculatePicture(maxSpan: number, width: number, span: number, id: string): CloudinaryImage {
    const pictureColumnWidth = width / maxSpan;
    const amountOfGap = 5 * (span - 1);
    const cloudinaryImage = cld.image(id);
    if (maxSpan == span) {
      return cloudinaryImage
        .resize(crop().width((pictureColumnWidth * span) + amountOfGap).height(pictureColumnWidth))
        .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
    } else {
      return cloudinaryImage
        .resize(thumbnail().width((columnWidth * span) + amountOfGap).height(columnWidth));
    }
  }

  function calculatePictures(): React.ReactNode {
    const pictures: React.ReactNode = data.allCloudinaryMedia.edges.map((node: any, index: number) => {
      const media: ICloudinaryMedia = node.node;
      const span = Math.min(Math.floor(media.originalWidth/ media.originalHeight), maxSpan);
      const pictureTag = calculatePicture(
        maxSpan, media.originalWidth, span , media.publicId);
      const picture: PictureFormat = {
        id: media.publicId,
        pictureTag: pictureTag,
        span: span,
        width: media.originalWidth,
        height: media.originalHeight,
        alt: media.cloudinaryData.context.custom.alt,
        caption: media.cloudinaryData.context.custom.caption
      };
      return (
        <GalleryPicture
          key={index}
          index={index}
          picture={picture}
          columnWidth={columnWidth}
          openModal={onOpenModal}
        />
      )
    });
    return pictures;
  }

  const pictures: React.ReactNode = useMemo(() => calculatePictures(), [columnWidth, maxSpan]);
  
  return (
    <Layout>
      <Seo title="Picture Collection of Lanscapes from different travels" />
      <GalleryGrid windowWidth={windowWidth}>
        {pictures}
      </GalleryGrid>
      <SlideInModal isOpen={modalIsOpen} onClose={onCloseModal}>
        <DetailPicture picture={picture}></DetailPicture>
      </SlideInModal>
    </Layout>
  )
}

export default LandScapeGellery;

export const query = graphql`
  query  {
    allCloudinaryMedia {
      edges {
        node {
          originalHeight
          originalWidth
          secure_url
          publicId
          cloudinaryData {
            context {
              custom {
                alt
                caption
              }
            }
          }
        }
      }
    }
  }
`;

interface ICloudinaryMedia {
  originalHeight: number;
  originalWidth: number;
  secure_url: string;
  publicId: string;
  cloudinaryData: {
    context: {
      custom: {
        alt: string;
        caption: string;
      }
    }
  }
};