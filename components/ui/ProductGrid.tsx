import React from "react";

import ProductCard from "@components/ui/ProductCard";

import styles from "./ProductGrid.module.css";

type ProductGridProps = {
  products: any;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.Root}>
      {products?.map((product) => {
        const { title, priceInPence } = product;
        return (
          <ProductCard
            key={product.id}
            images={product.images}
            priceInPence={priceInPence}
            reviews={product.reviewsSummary}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
