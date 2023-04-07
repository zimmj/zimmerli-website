import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string,
}

const Header = ({ siteTitle } : HeaderProps) => (
  <header className="mb-8">
    <div >
      <h1 className="underline">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
