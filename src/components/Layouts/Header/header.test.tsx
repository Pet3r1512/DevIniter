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
});
