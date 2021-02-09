import { Page, Browser } from "../interfaces";
import closeBrowser from "../helpers/closeBrowser";
import closePage from "../helpers/closePage";
import createBrowser from "../helpers/createBrowser";
import createPage from "../helpers/createPage";
import testAllBrowsers from "../../playwright/testAllBrowsers";

// TODO: consider testing page templates rather than pages themselves
testAllBrowsers((browserName) => {
  describe("Accessibility page", () => {
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

    it("loads", async () => {
      await page.goto("localhost:3000/accessibility");
      expect(await page.title()).toBe(
        "Webex for hard of hearing users and sign language interpreters"
      );
    });
  });
});
