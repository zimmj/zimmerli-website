import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index: React.FunctionComponent = () => {
  return (
    <div >
      <Layout>
        <div className="max-w-xl">
          <Seo title="home" description="This is the landing page of the website" />
          <h2>Welcome to my humble website</h2>
          <p>This webiste is in a slow build up phase. At the moment I try out Gatsby itself.
            I added Tailwind css to learn this new approach with classes for all css function.
            To increase the speed of programming. I am using daisy UI for some different basic components </p>
          <p>This webiste is freely hosted on <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">netlyfy</a>.
            The only thing you need to provide is the domain and they will create for you a certificate with let's encrypt.</p>
          <p>I am working at the moment as software engineer for <a href="https://www.prodyna.com" target="_blank" rel="noopener noreferrer">Prodyna.</a></p>
          <p>This webiste is a small play field to learn the technologies of Tailwind and Gatsby to enlarge my knowledge.
            As a developer I see myself as a trouble shooter and generalist. I can work best in small environments.
            In this environments I can impact different fields with my fast adaptation and borad knowledge of technologies
          </p>

          <h3>Future Stuff on the website</h3>
          <ul>
            <li>About me page</li>
            <li>Photo Galery of pictures from my travelings</li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Index;
