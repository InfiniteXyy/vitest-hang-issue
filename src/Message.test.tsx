import { cleanup, render, screen } from "@testing-library/react";
import Message from "./Message";
// import { describe, it, expect, beforeEach } from "vitest";

beforeEach(cleanup);

describe(
  "test",
  () => {
    it("1", () => {
      const fakeSystemText = `<b>test</b> abc<script>alert("")</script>`;
      render(<Message text={fakeSystemText} />);
      const messageElement = screen.getByTestId("message");
      expect(messageElement).toBeVisible();
      expect(messageElement.innerHTML).toBe("<b>test</b> abc");
    });

    it("2", () => {
      const fakeSystemText = `<b>test</b> abc<script>alert("")</script>`;
      render(<Message text={fakeSystemText} />);
      const messageElement = screen.getByTestId("message");
      expect(messageElement).toBeVisible();
      expect(messageElement.innerHTML).toBe("<b>test</b> abc");
    });
  },
  { repeats: 500 }
);
