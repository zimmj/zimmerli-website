import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import GalleryGrid, { coloumnWidthFunction } from "../components/Gallery/gallery-grid";
import { graphql } from 'gatsby';
import GalleryPicture, { PictureFormat } from "../components/Gallery/gallery-picture";
import { useWindowWidth } from "@react-hook/window-size";
import SlideInModal from "../components/Slide-In-Modal/slide-in-modal";
import DetailPicture from "../components/Gallery/detail-picture";

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

  const pictures = data.allCloudinaryMedia.edges.map((node: any, index: number) => {
    const media: ICloudinaryMedia = node.node;
    const picture: PictureFormat = {
      id: media.publicId,
      url: media.secure_url,
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
        windowWidth={windowWidth}
        openModal={onOpenModal}
      />
    )
  });

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