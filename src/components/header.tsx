import * as React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

interface NavigationTtem {
  title: string;
  url: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
  const navigationItems: NavigationTtem[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Gellery',
      url: '/gallery',
    },
  ];

  return (
    <header className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-neutral/80 rounded-box"
          >
            {navigationItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost nromal-case text-xl font-bold"
        >
          {siteTitle}
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle hidden">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item hidden"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
