class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('[name="Email Address"]');
    this.passwordInput = page.locator('[name="Password"]');
    this.signInButton = page.locator("#next");
    this.myProfileLink = page.locator('[id="tour-profile-nav"]');
    this.emailError = page.locator('.error.itemLevel >> p:text("Please enter your Email Address")');
    this.passwordError = page.locator('.error.itemLevel >> p:text("Please enter your password")');
    this.accountError = page.locator('.error.pageLevel >> p:text("We can\'t seem to find your account")');
    this.invalidPassword = page.locator('.error.pageLevel >> p:text("Your password is incorrect")');
  }

  async login(userEmail, userPassword) {
    await this.emailInput.fill(userEmail);
    await this.passwordInput.fill(userPassword);
    await this.signInButton.click();
  }
}

export default LoginPage;
