import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/loginPage/loginPage.js";
import loginData from "../../../fixtures/loginPage/loginData.json";

test.describe("Login Page functionality - Negative scenarios", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(loginData.loginUrl);
  });

  test("TC:004 - Should not Login with empty fields", async () => {
    await loginPage.signInButton.click();

    await expect(loginPage.emailError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
  });

  test("TC:005 - Should not Login with invalid email", async () => {
    await loginPage.login(loginData.invalidEmail, process.env.USER_PASSWORD);

    await expect(loginPage.accountError).toBeVisible();
  });

  test("TC:006 - Should not Login with invalid password", async () => {
    await loginPage.login(process.env.USER_EMAIL, loginData.invalidPassword);

    await expect(loginPage.invalidPassword).toBeVisible();
  });

  test("TC:007 - Should not Login with invalid credentials", async () => {
    await loginPage.login(loginData.invalidEmail, loginData.invalidPassword);

    await expect(loginPage.accountError).toBeVisible();
  });
});
