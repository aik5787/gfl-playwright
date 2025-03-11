import { test, expect } from "@playwright/test";
import HomePage from "../../pages/homePage/homePage.js";
import verificationData from "../../fixtures/homePage/verificationData.json";

test.describe("Home Page functionality", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto("/");
  });

  test("TC:001 - Should verify the Home Page title and hero title", async ({ page }) => {
    await expect(page).toHaveTitle(verificationData.titleEng);
    await expect(page.locator("h1")).toHaveText(verificationData.heroTitleEng);
  });

  test("TC:002 - Should switch the language to French", async ({ page }) => {
    await homePage.toggleLanguageButton.click();
    await homePage.frenchLanguageLink.click();

    await expect(page).toHaveTitle(verificationData.titleFr);
    await expect(page.locator("h1")).toHaveText(verificationData.heroTitleFr);
  });
});
