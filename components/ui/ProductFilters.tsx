import React from "react";

import styles from "./ProductFilters.module.css";

// TODO: type this
type ProductFiltersProps = {
  activeFilters: string[],
  toggleHandler: (taxonomy: string, filter: string) => void;
};

const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeFilters,
  toggleHandler,
}) => {
  const filters = [
    {
      label: "New In",
      taxonomy: "topLevel",
      key: "newIn",
    },
    {
      label: "Gluten-Free",
      taxonomy: "dietary",
      key: "glutenFree",
    },
    {
      label: "Halal",
      taxonomy: "dietary",
      key: "halal",
    },
    {
      label: "Nut-Free",
      taxonomy: "dietary",
      key: "nutFree",
    },
    {
      label: "Vegan",
      taxonomy: "dietary",
      key: "vegan",
    },
    {
      label: "Wheat-Free",
      taxonomy: "dietary",
      key: "wheatFree",
    },
  ];
  return (
    <div className={styles.Root}>
      <div className={styles.filters}>
        {filters?.map((filter) => {
          return (
            <div className={styles.filter} key={filter.key}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={filter.key}
                name={filter.key}
                data-taxonomy={filter.taxonomy}
                checked={filters[filter.key]}
                onChange={() => toggleHandler(filter.taxonomy, filter.key)}
              />
              <label className={styles.label} htmlFor={filter.key}>
                {filter.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilters;
