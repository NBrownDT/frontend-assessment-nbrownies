import React from "react";

import { formatPrice } from "@utils/formatPrice";

import styles from "./ProductCard.module.css";

type ProductCardProps = {
  images?: string[];
  priceInPence: number;
  reviews?: any; // TODO - don't use any
  title: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  priceInPence,
  reviews,
  title,
}) => {
  const priceString = formatPrice(priceInPence);
  // TODO: remove null check, some of the image arrays are undefined
  const heroImage = `/images/products/${images?.[0]}`;
  return (
    <article className={styles.Root}>
      <figure className={styles.figure}>
        <img
          src={heroImage}
          alt={title}
          width={240}
          height={240}
          className={styles.heroImage}
        />
      </figure>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <p className={styles.price}>{priceString}</p>
        {!!reviews && (
          <div className={styles.reviewsContainer}>
            <p className={styles.reviewsDetail}>
              <span className={styles.reviewsAverage}>★★★★☆</span>
              {/* <span className={styles.reviewsAverage}>{reviews.average}</span> */}
              <span className={styles.reviewsCount}>({reviews.count})</span>
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
