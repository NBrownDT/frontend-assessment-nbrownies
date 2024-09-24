import React from "react";

import styles from "./TextBanner.module.css";

type TextBannerProps = {
  title?: string;
};

const TextBanner: React.FC<React.PropsWithChildren<TextBannerProps>> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.Root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TextBanner;
