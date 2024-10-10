import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./_index";

describe("Footer", () => {
  it("should match snapshot", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });

  it("should render correct content", () => {
    const footer = render(<Footer />);

    const license = footer.getByText("Released under MIT license");
    expect(license).toBeInTheDocument();

    const author = footer.getByTestId("author");
    expect(author).toBeInTheDocument();
  });
});
