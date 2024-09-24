import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useSWR from "swr";

import { fetcher } from "@utils/fetcher";

import DefaultLayout from "@components/layouts/Default";
import ProductFilters from "@components/ui/ProductFilters";
import ProductGrid from "@components/ui/ProductGrid";
import TextBanner from "@components/ui/TextBanner";
import SortSelector from "@components/ui/SortSelector";

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR("/api/products", fetcher, {
    refreshInterval: 10_000,
  });

  const [products, setProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (taxonomy: string, filterKey: string) => {
    // is filter in active filters?
    const isFilterActive: boolean = activeFilters.includes(
      `${taxonomy}:${filterKey}`
    );
    // if filter is active, remove it
    if (isFilterActive) {
      setActiveFilters(
        activeFilters.filter(
          (activeFilter) => activeFilter !== `${taxonomy}:${filterKey}`
        )
      );
    } else {
      setActiveFilters([...activeFilters, `${taxonomy}:${filterKey}`]);
    }
  };

  const sortChangeHandler = (): void => {
    console.log('sort...');
  };

  useEffect(() => {
    setProducts(data?.products);
  }, [data]);

  return (
    <DefaultLayout>
      <>
        <TextBanner title="For all occasions.">
          <p>
            We&apos;re <strong>absolutely nuts</strong> about our brownies,
            and we&apos;re sure that you will be! If you&apos;re shopping for a gift, our
            bundles <strong>100% guarantee</strong> brownie&nbsp;points!
          </p>
        </TextBanner>
        {isLoading ? (
          <p>Loading Brownies&hellip;</p>
        ) : (
          <>
            <ProductFilters
              activeFilters={activeFilters}
              toggleHandler={toggleFilter}
            />
            <ProductGrid products={products} />
            <SortSelector changeHandler={sortChangeHandler} />
          </>
        )}
      </>
    </DefaultLayout>
  );
};

export default Home;
