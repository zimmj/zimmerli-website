import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Index: React.FunctionComponent = () => {
  return (
    <div >
    <Layout>
      <div>
      <Seo title="home" description="This is the landing page of the website" />
      <h1>Welcome to my playground</h1>
      <p>On this website I try out some different stuff and in the end show of some of my skills</p>
      <p>The question is, who I am and what can I do.</p>
      <p>This site is always work in progress, as I am as well.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      </div>
    </Layout>
    </div>
  )
}

export default Index;
