import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "./lanscape-gallery.css"

const LandScapeGellery: React.FunctionComponent = () => {
  return (
    <Layout>
      <Seo title="Picture Collection of Lanscapes from different travels" />
      <div className="gallery-grid">
        <div className="gallery-pod--grey"></div>
        <div className="gallery-pod--grey"></div>
        <div className="gallery-pod--grey"></div>
        <div className="gallery-pod--grey"></div>
        <div className="gallery-pod--grey"></div>
        <div className="gallery-pod--grey"></div>
      </div>
    </Layout>
  )
}

export default LandScapeGellery;
