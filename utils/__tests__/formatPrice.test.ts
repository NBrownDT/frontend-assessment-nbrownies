import { formatPrice } from "@utils/formatPrice";

describe("formatPrice function", () => {
  it("returns in pounds and pence format when pence greater than 100 is passed in", () => {
    const formattedPrice = formatPrice(123);
    expect(formattedPrice).toStrictEqual(`£1.23`);
  });
  it("returns in pounds and pence format when pence less than 100 is passed in", () => {
    const formattedPrice = formatPrice(89);
    expect(formattedPrice).toStrictEqual(`£0.89`);
  });
  it("returns in pounds and pence format when pence is 100", () => {
    const formattedPrice = formatPrice(100);
    expect(formattedPrice).toStrictEqual(`£1.00`);
  });
});
