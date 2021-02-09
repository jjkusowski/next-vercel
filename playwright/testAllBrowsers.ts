import { BrowserTest, SupportedBrowsers } from "./interfaces";

export default function testAllBrowsers(test: BrowserTest): void {
  Object.values(SupportedBrowsers).forEach((browserKey) => {
    test(browserKey);
  });
}
