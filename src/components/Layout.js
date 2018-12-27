import React from 'react';
import { Link } from 'gatsby';

export default function Layout(props) {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={'/'}>{title}</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={'/'}>{title}</Link>
      </h3>
    );
  }

  return (
    <div>
      {header}
      {children}
    </div>
  );
}
