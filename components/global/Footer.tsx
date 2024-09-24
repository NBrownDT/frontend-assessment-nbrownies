import React from "react";

import styles from "./Footer.module.css";

const SiteFooter: React.FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <p>N Brownies is an entirely ficticious entitty, used in this context by <a href="https://www.nbrown.co.uk/">N Brown Plc</a> for technical assesments.</p>
    </footer>
  );
};

export default SiteFooter;
