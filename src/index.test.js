import { expect } from "chai";
import jsdom from "jsdom";
import file_system from "fs";

describe("test test", () => {
  it("should pass test", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should have h1 with Lists", (done) => {
    const index = file_system.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName("h1")['0'];
      expect(h1.innerHTML).to.equal("Lists");
      done();
      window.close();
    })
  });
});
