import React from "react";

import styles from "./SortSelector.module.css";

interface SelectOption {
  optionKey: string;
  optionLabel: string;
}

interface SortSelectorProps {
  changeHandler;
}

const SortSelector: React.FC<SortSelectorProps> = ({
  changeHandler
}) => {
  const options = [
    {
      optionKey: 'popular',
      optionLabel: 'Popularity'
    },
    {
      optionKey: 'price-high',
      optionLabel: 'Price (Highest First)'
    },
    {
      optionKey: 'price-low',
      optionLabel: 'Price (Lowest First)'
    },
    {
      optionKey: 'carbs-high',
      optionLabel: 'Carbs (Highest First)'
    },
    {
      optionKey: 'carbs-low',
      optionLabel: 'Carbs (Lowest First)'
    }
  ]
  return (
    <select className={styles.Root} onChange={changeHandler}>
      {options.map(option => (
        <option key={option.optionKey} value={option.optionKey}>{option.optionLabel}</option>
      ))}
    </select>
  );
};

export default SortSelector;
