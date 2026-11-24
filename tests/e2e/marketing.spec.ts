import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const MARKETING_ROUTES = [
  {
    path: "/",
    heading: "Sell, run and certify paid cohorts in one place.",
  },
  { path: "/pricing", heading: "Pricing" },
  { path: "/testimonials", heading: "Testimonials" },
  { path: "/about", heading: "About Kohorts" },
  { path: "/faq", heading: "Frequently asked questions" },
] as const;

test.describe("Scaffold marketing pages", () => {
  for (const route of MARKETING_ROUTES) {
    test(`${route.path} loads with no horizontal scroll, keyboard reach, and zero axe violations`, async ({
      page,
    }) => {
      await page.goto(route.path);

      await expect(
        page.getByRole("heading", { level: 1, name: route.heading })
      ).toBeVisible();

      const hasHorizontalScroll = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
      );
      expect(hasHorizontalScroll).toBe(false);

      const axeResults = await new AxeBuilder({ page }).analyze();
      expect(axeResults.violations).toEqual([]);
    });
  }

  test("header links navigate from homepage to each marketing page", async ({
    page,
  }) => {
    for (const item of [
      { label: "Pricing", path: "/pricing" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "About", path: "/about" },
      { label: "FAQ", path: "/faq" },
    ]) {
      await page.goto("/");
      const menuButton = page.getByRole("button", { name: "Menu" });
      if (await menuButton.isVisible()) {
        await menuButton.focus();
        await page.keyboard.press("Enter");
      }
      const link = page.getByRole("link", { name: item.label });
      await link.focus();
      await expect(link).toBeFocused();
      await link.click();
      await expect(page).toHaveURL(item.path);
    }
  });
});
