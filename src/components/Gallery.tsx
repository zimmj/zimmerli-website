import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

export const Gallery: React.FunctionComponent = () => {

  const data = useStaticQuery(
    graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
            node {
                secure_url
                context {
                    custom {
                        alt
                        caption
                    }
                }
                resource_type
                height
                width
            }
        }
        }
    }`
  );

  const images: any[] = data.allCloudinaryMedia.edges;
  console.log(images)

  return (
    <div>
      {images.map((image, index) => (
        <figure className="wave" key={`${index}-image`}>
          <img
            src={image.node.secure_url}
            alt={image.node.context.custom.alt} >
          </img>
          <figcaption>{image.node.context.custom.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
