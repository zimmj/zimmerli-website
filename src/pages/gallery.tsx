import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import GalleryGrid from "../components/Gallery/gallery-grid";
import { graphql } from 'gatsby';
import GalleryPicture, { PictureFormat } from "../components/Gallery/gallery-picture";
import { useWindowWidth } from "@react-hook/window-size";

const LandScapeGellery: React.FunctionComponent = ({ data }) => {
  const windowWidth = useWindowWidth();

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
      <GalleryPicture key={index} index={index} picture={picture} windowWidth={windowWidth}></GalleryPicture>
    )
  });

  return (
    <Layout>
      <Seo title="Picture Collection of Lanscapes from different travels" />
      <GalleryGrid windowWidth={windowWidth}>
        {pictures}
      </GalleryGrid>
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