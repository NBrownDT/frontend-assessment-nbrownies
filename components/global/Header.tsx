import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const navLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/menu",
    label: "Shop",
  },
];

const SiteHeader: React.FC = () => {
  const router = useRouter();
  const isActive = (href: string): boolean => router.pathname === href;
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerUI}>
        <div className={styles.brand}>
          <Image
            src="/images/nbrownies-logo.png"
            width={100}
            height={100}
            className={styles.logomark}
            alt="N Brownies Logomark"
          />
          <h1 className={styles.brandType}>N Brownies</h1>
        </div>
        <div className="utils">
          <nav className={styles.siteNav}>
            <>
              {navLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.label}
                  className={
                    isActive(link.url)
                      ? `${styles.navLinkActive} ${styles.navLink}`
                      : styles.navLink
                  }
                >
                  {link.label}
                </Link>
              ))}
            </>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
