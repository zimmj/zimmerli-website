import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import SimpleAccordion from "../components/Arcordion/simple-accordion"

const Index: React.FunctionComponent = () => {
  return (
    <div >
      <Layout>
        <div className="max-w-xl width-12 mx-auto">
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

          <SimpleAccordion accordions={[{
            title: "What is my prefered tech stack?",
            content:
              <p>
                I don't know why, but people always like to know what is once prefered tech stack.
                Even when multiple tech stack are really good.
                In the end for me following points are important:
                <ul>
                  <li>Front-End need to be disjunkct with the back-end</li>
                  <li>Clear Interfaces beetween logical group</li>
                  <li>Is the used tech mature</li>
                </ul>
                In the end, the most "modern" tech provide this.
                Some tryies to solve more things, others thry to be the best in one thing.
                It's more important to be able to deliver a good product in time.
              </p>
          },
          {
            title: "What do I love about software development?",
            content: <>
              <p>
                One of the aspects I love about software development is the ability to create something that is used and appreciated by others.
                It's an incredible feeling to witness people utilizing and benefiting from the software I've developed.
              </p>

              <p>
                Another aspect of a fullstack developer is to see how the different parts of the software interact with each other.
                As I started to create the backend, whith the front-end in mind.
                It's a great feeling to see, that I can use my backend as I thought it would be used.
                Just that it comes together like this is amazing.
              </p>
            </>
          }]} />

          <h3>Future Stuff on the website</h3>
          <ul>
            <li>About me page</li>
            <li>Photo Galery of pictures from my travelings 
              <Link to="gallery">First step</Link>
              </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Index;
