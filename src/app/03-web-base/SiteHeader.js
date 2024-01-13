"use client";
import React from "react";
import Link from "next/link";

import { getNavLinks } from "@/helpers/web-base-helpers";

function SiteHeader() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [navLinks, setNavLinks] = React.useState([]);

  React.useEffect(() => {
    async function runEffect() {
      let data = await getNavLinks();
      data = data.slice(0, 4);
      setNavLinks([...data]);
      setIsLoading(false);
    }
    runEffect();
  }, []);

  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        {isLoading ? (
          <ol className="header-nav-links"></ol>
        ) : (
          <ol className="header-nav-links">
            {navLinks.map(({ slug, label, href, type }) => (
              <li key={slug}>
                <Link
                  href={href}
                  className={`header-nav-link ${type}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </nav>
    </header>
  );
}

export default SiteHeader;
