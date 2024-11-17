import { render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./_index";

describe("Render Header", () => {
  it("Should match snapshot", async () => {
    const tree = render(<Header />);
    await waitFor(() => {
      expect(tree).toMatchSnapshot();
    });
  });

  // it("Should contain correct Header content",async () => {
  //   const tree = render(<Header />);

  //   waitFor(() => {
  //     expect(logo).toBeInTheDocument();
  //   })

  //   const logo = tree.getByTestId("Logo");
  //   expect(logo).toBeInTheDocument();

  //   const navbar = tree.getByTestId("navbar");
  //   expect(navbar).toBeInTheDocument();

  //   const theme_togger = tree.getByTestId("theme-togger");
  //   expect(theme_togger).toBeInTheDocument();

  //   const verticalLine = tree.getByTestId("vt");
  //   expect(verticalLine).toBeInTheDocument();

  //   const github = tree.getByTestId("github-logo");
  //   expect(github).toBeInTheDocument();
  // });
});
