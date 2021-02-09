import testAllBrowsers from "../../playwright/testAllBrowsers";
import closeBrowser from "../helpers/closeBrowser";
import closePage from "../helpers/closePage";
import createBrowser from "../helpers/createBrowser";
import createPage from "../helpers/createPage";
import { Browser, Page } from "../interfaces";

testAllBrowsers((browserName) => {
  describe("header", () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
      browser = await createBrowser(browserName);
    });

    beforeEach(async () => {
      page = await createPage(browser);
    });

    afterAll(async () => {
      await closeBrowser(browser);
    });
    afterEach(async () => {
      await closePage(page);
    });

    // describe("links", () => {

    // });
  });
});
