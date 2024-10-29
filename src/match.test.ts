import { describe, expect, it } from "vitest";
import * as module from "./match";

describe("match", () => {
  describe("match", () => {
    it("defined", () => {
      expect(module).toHaveProperty("match");
    });

    it("with default match default", () => {
      const result = module.match("wow", [
        [(x) => x.length == 0, (_x) => "length 0"],
        ["default", () => "default"],
      ]);

      expect(result).toEqual("default");
    });

    it("with default match non default", () => {
      const result = module.match("wow", [
        [(x) => x.length == 3, (_x) => "length 0"],
        ["default", () => "default"],
      ]);

      expect(result).toEqual("length 0");
    });

    it("without default", () => {
      const result = module.match("wowwow", [
        [(x) => x.length == 3, (_x) => "length 0"],
        [(x) => x.includes("wow"), (_x) => "wow"],
      ]);

      expect(result).toEqual("wow");
    });

    it("throw error if not match anything", () => {
      let error: Error;

      try {
        const result = module.match("wow", []);
      } catch (e) {
        error = e;
      }

      expect(error).toBeDefined();
    });
  });
});
