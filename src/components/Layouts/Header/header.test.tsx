import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./_index";

describe("Render Header", () => {
  it("Should render a skeleton", async () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render Header after loading", async () => {
    const { asFragment } = render(<Header />);

    await waitFor(() => screen.getByTestId("header"));

    expect(asFragment()).toMatchSnapshot();
  });
});
