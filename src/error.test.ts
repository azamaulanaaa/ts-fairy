import { describe, expect, it } from "vitest";
import * as module from "./error";

describe("error", () => {
  describe("createErrorClass", () => {
    it("defined", () => {
      expect(module).toHaveProperty("createErrorClass");
    });

    it("instance of Error", () => {
      const Error1 = module.createErrorClass("", "");
      const error1 = new Error1();

      expect(error1).instanceof(Error);
    });

    it("pass error name", () => {
      const Error1 = module.createErrorClass("some-name", "");
      const error1 = new Error1();

      expect(error1.name).toEqual("some-name");
    });

    it("pass message string as is", () => {
      const Error1 = module.createErrorClass("", "some-message");
      const error1 = new Error1();

      expect(error1.message).toEqual("some-message");
    });

    it("pass cuase", () => {
      const cause = new Error("some cause");
      const Error1 = module.createErrorClass("", "");
      const error1 = new Error1(cause);

      expect(error1.cause).toEqual(cause);
    });

    it("pass message as funciton with return string", () => {
      const Error1 = module.createErrorClass(
        "",
        (msg: string, _cause?: Error) => msg + "suffix",
      );
      const error1 = new Error1("some-message");

      expect(error1.message).toEqual("some-message" + "suffix");
    });
  });
});
