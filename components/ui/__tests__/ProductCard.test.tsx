import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";

const sampleProductsDietary = {
  vegan: false,
  wheatFree: false,
  halal: false,
  nutFree: false,
  glutenFree: false,
};

const sampleProductsReviewSummary = {
  count: 42,
  average: 4.2,
};

const mockProduct = {
  // title: "Birthday Giftbox with Coffee",
  title: "Onboarding Giftbox with Strong Coffee",
  images: ["brownies-birthday-coffee.webp"],
  priceInPence: true,
  newIn: false,
  nutrition: {
    kcal: 100,
    carbs: 10,
  },
  dietary: { ...sampleProductsDietary },
  reviewsSummary: { ...sampleProductsReviewSummary },
};

describe("ProductCard tests", () => {
  it("renders the ProductCard correctly", () => {
    const { container } = render(
      <ProductCard
        images={mockProduct.images}
        priceInPence={mockProduct.priceInPence}
        reviews={mockProduct.reviewsSummary}
        title={mockProduct.title}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
