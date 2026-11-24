import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Scaffold marketing homepage", () => {
  test("homepage loads with no horizontal scroll, keyboard reach, and zero axe violations", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Sell, run and certify paid cohorts in one place.",
      })
    ).toBeVisible();

    const hasHorizontalScroll = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth
    );
    expect(hasHorizontalScroll).toBe(false);

    const menuButton = page.getByRole("button", { name: "Menu" });
    if (await menuButton.isVisible()) {
      await expect(menuButton).toHaveAttribute("aria-expanded", "false");
      await menuButton.focus();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute(
        "aria-expanded",
        "true"
      );
    }

    for (const label of ["Pricing", "Testimonials", "About", "FAQ"]) {
      const link = page.getByRole("link", { name: label });
      await expect(link).toBeVisible();
      await link.focus();
      await expect(link).toBeFocused();
    }

    const axeResults = await new AxeBuilder({ page }).analyze();
    expect(axeResults.violations).toEqual([]);
  });
});
