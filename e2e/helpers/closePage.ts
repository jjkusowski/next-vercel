import { Page } from "playwright";

export default async function closePage(page: Page): Promise<undefined> {
  page.close();

  return undefined;
}
