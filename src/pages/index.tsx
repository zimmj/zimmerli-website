import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby';
import SimpleAccordion from '../components/Accordion/simple-accordion';
import { MicroservicesModulithSection } from '../content/expertise/microservices-modulith';

const Index: React.FunctionComponent = () => {
  return (
    <div>
      <Layout>
        <div className="max-w-xl width-12 mx-auto">
          <Seo
            title="home"
            description="This is the landing page of the website"
          />
          <h2>Welcome to my humble website</h2>
          <p>
            This is my small pet website. I will work on it from time
            to time and to try out some html and JS stuff.{' '}
          </p>
          <p>
            This website is freely hosted on{' '}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              netlyfy
            </a>
            . The only thing you need to provide is the domain and
            they will create for you a certificate with let's encrypt.
          </p>
          <p>
            I am working as a freelancer and therefore use the most of
            my time to travel and work for some different customers.
          </p>

          <p>
            To see some of my other private project, see my{' '}
            <a href="https://github.com/zimmj">github account</a>
          </p>

          <p>
            One of my hobbies is to participate in hackathons, as they
            bring people together and make me learn new stuff.
          </p>
        </div>

        {/* Expertise Section - Wider Container */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="divider my-8"></div>

          <h2 className="text-3xl font-bold mb-6">My Expertise</h2>

          <MicroservicesModulithSection />

          <div className="divider my-8"></div>
        </div>

        {/* Back to Narrow Container */}
        <div className="max-w-xl width-12 mx-auto">
          <h4>Accordion with multiple open</h4>
          <SimpleAccordion
            multiOpen={true}
            accordions={[
              {
                title: 'What is my preferred tech stack?',
                content: (
                  <div>
                    I don't know why, but people always like to know
                    what is once preferred tech stack. Even when
                    multiple tech stack are really good. In the end
                    for me following points are important:
                    <ul>
                      <li>
                        Front-End need to be disjunct with the
                        back-end
                      </li>
                      <li>Clear Interfaces between logical group</li>
                      <li>Is the used tech mature</li>
                    </ul>
                    In the end, the most "modern" tech provide this.
                    Some tries to solve more things, others try to be
                    the best in one thing. It's more important to be
                    able to deliver a good product in time.
                  </div>
                ),
              },
              {
                title: 'What do I love about software development?',
                content: (
                  <>
                    <p>
                      One of the aspects I love about software
                      development is the ability to create something
                      that is used and appreciated by others. It's an
                      incredible feeling to witness people utilizing
                      and benefiting from the software I've developed.
                    </p>

                    <p>
                      Another aspect of a fullstack developer is to
                      see how the different parts of the software
                      interact with each other. As I started to create
                      the backend, with the front-end in mind. It's a
                      great feeling to see, that I can use my backend
                      as I thought it would be used. Just that it
                      comes together like this is amazing.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <h4>Accordion where only one can be opened</h4>
          <SimpleAccordion
            accordions={[
              {
                title: 'How did I get into software development?',
                content: (
                  <div>
                    <p>
                      When I was doing my apprenticeship as a chemical
                      worker, production of pharmaceuticals. I was
                      learning about state machine ans simple logical
                      gates. With them, we needed to create simple
                      programs to control lights or watering systems.
                    </p>

                    <p>
                      This showed me, that I love to solve problems,
                      and doing it with software is a simple way. From
                      there I started to learn more about software
                      development, and was learning java in my free
                      time.
                    </p>
                  </div>
                ),
              },
              {
                title:
                  'What is my bachelor of Life-Science-Technologies?',
                content: (
                  <>
                    <p>
                      It's a merger of Natur, Engineering, Medicine
                      and Environmental science.
                    </p>
                    <p>
                      In my studies I learned different aspect of the
                      above mentioned topics. Many of them have
                      nothing to do with software development. But
                      they taught me different ways to approach
                      problems. As many of the topics have logical
                      challenges.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
