import { describe, expect, it } from "vitest";
import * as module from "@azamaulanaaa/ts-fairy/result";

describe("result", () => {
  describe("Ok", () => {
    it("defined", () => {
      expect(module).toHaveProperty("Ok");
    });
  });

  describe("Err", () => {
    it("defined", () => {
      expect(module).toHaveProperty("Err");
    });
  });
});
