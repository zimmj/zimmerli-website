/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import ReactModal from "react-modal"

interface LayoutProps {
  children: React.ReactNode
}
ReactModal.setAppElement('#___gatsby')

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || 'Title'

  return (
    <div className="w-full h-screen prose max-w-none" style={{
      display: "grid",
      gridTemplateRows: "min-content 1fr min-content"
    }}>
      <Header siteTitle={siteTitle} />
      <main className="mx-auto w-full">{children}</main>

      <footer className="m-auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout;
