import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string,
}

const Header = ({ siteTitle } : HeaderProps) => (
  <header className="pt-4 flex justify-center w-full bg-primary">
      <h1 className="underline ">
        <Link
        className="text-neutral font-extrabold"
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

export default Header
