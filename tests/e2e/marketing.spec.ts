import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const VIEWS = [
  { label: "Pricing", heading: "Pricing", title: "Pricing | Kohorts" },
  {
    label: "Testimonials",
    heading: "Testimonials",
    title: "Testimonials | Kohorts",
  },
  { label: "About", heading: "About Kohorts", title: "About | Kohorts" },
  {
    label: "FAQ",
    heading: "Frequently asked questions",
    title: "FAQ | Kohorts",
  },
] as const;

test.describe("Scaffold single-page marketing site", () => {
  test("home shows the hero with no horizontal scroll and zero axe violations", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(
      "Kohorts — Sell, run and certify paid cohorts in one place"
    );
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

    const axeResults = await new AxeBuilder({ page }).analyze();
    expect(axeResults.violations).toEqual([]);
  });

  test("nav items switch views in place without changing the URL", async ({
    page,
  }) => {
    for (const item of VIEWS) {
      await page.goto("/");
      const menuButton = page.getByRole("button", { name: "Menu" });
      if (await menuButton.isVisible()) {
        await menuButton.focus();
        await page.keyboard.press("Enter");
      }

      const navButton = page.getByRole("button", { name: item.label });
      await navButton.focus();
      await navButton.click();

      await expect(
        page.getByRole("heading", { level: 1, name: item.heading })
      ).toBeVisible();
      await expect(page).toHaveTitle(item.title);
      await expect(page).toHaveURL(/\/$/);

      const axeResults = await new AxeBuilder({ page }).analyze();
      expect(axeResults.violations).toEqual([]);
    }
  });

  test("active nav item is marked with aria-current", async ({ page }) => {
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: "Menu" });
    if (await menuButton.isVisible()) {
      await menuButton.focus();
      await page.keyboard.press("Enter");
    }

    const pricingButton = page.getByRole("button", {
      name: "Pricing",
      includeHidden: true,
    });
    await pricingButton.click();

    await expect(pricingButton).toHaveAttribute("aria-current", "true");
    await expect(
      page.getByRole("button", { name: "About", includeHidden: true })
    ).not.toHaveAttribute("aria-current", "true");
  });
});

test.describe("Scaffold SEO and head metadata", () => {
  test("homepage renders a brand title, favicon and Open Graph tags", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(
      "Kohorts — Sell, run and certify paid cohorts in one place"
    );

    await expect(page.locator('link[rel="icon"]')).toHaveCount(1);
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      /\/icon/
    );

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Kohorts/
    );
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute("content", /Sell, run and certify/);
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      "content",
      "Kohorts"
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "website"
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/
    );

    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image"
    );

    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Sell, run and certify/
    );
  });

  test("/llms.txt serves the LLM-readable site file", async ({ request }) => {
    const response = await request.get("/llms.txt");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/plain");
    const body = await response.text();
    expect(body).toContain("# Kohorts");
    expect(body).toContain("## Sections");
    expect(body).toContain("[Pricing]");
  });
});
