import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Menu from "../../pages/menu";
import useSWR from "swr";

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

const mockProducts = [
  {
    // title: "Birthday Giftbox with Coffee",
    title: "Onboarding Giftbox with Strong Coffee",
    images: ["brownies-birthday-coffee.webp"],
    priceInPence: 15_99,
    newIn: false,
    nutrition: {
      kcal: 100,
      carbs: 10,
    },
    dietary: { ...sampleProductsDietary },
    reviewsSummary: { ...sampleProductsReviewSummary },
  },
  {
    title: "Birthday Mini Giftbox with Fizz",
    images: ["brownies-birthday-fizz-mini.webp"],
    priceInPence: 22_99,
    newIn: true,
    nutrition: {
      kcal: 150,
      carbs: 15,
    },
    dietary: { ...sampleProductsDietary },
    reviewsSummary: { count: 4, average: 1 },
  },
  {
    title: "Birthday Giftbox with Fizz",
    images: ["brownies-birthday-fizz.webp"],
    priceInPence: 27_99,
    newIn: true,
    nutrition: {
      kcal: 120,
      carbs: 13,
    },
    dietary: { ...sampleProductsDietary },
    reviewsSummary: { ...sampleProductsReviewSummary },
  },
  {
    title: "Birthday Giftbox (wheat-free)",
    images: ["brownies-birthday-wheat-free.webp"],
    priceInPence: 21_99,
    newIn: false,
    nutrition: {
      kcal: 200,
      carbs: 20,
    },
    dietary: { ...sampleProductsDietary, wheatFree: true },
    reviewsSummary: { ...sampleProductsReviewSummary },
  },
];

const mockUseSWR = useSWR as jest.Mock;

describe("Menu Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders the menu page correctly", () => {
    mockUseSWR.mockReturnValue({ data: { products: mockProducts } });
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
  it("renders the menu page correctly when data is still loading", () => {
    mockUseSWR.mockReturnValue({
      isLoading: true,
    });
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
