import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/loginPage/loginPage.js';
import loginData from '../../../fixtures/loginPage/loginData.json';

test('Login Page functionality - Positive scenario', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto(loginData.loginUrl);
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

//   await expect(page).toHaveTitle(loginData.title);

  // You could also add other checks or actions after this
});
