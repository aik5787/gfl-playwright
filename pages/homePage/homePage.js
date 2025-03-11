class HomePage {
  constructor(page) {
    this.page = page;
    this.toggleLanguageButton = page.locator('[data-id="select-language"]');
    this.frenchLanguageLink = page.locator("#bs-select-1-1");
  }
}

export default HomePage;
