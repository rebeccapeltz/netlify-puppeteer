require("dotenv").config(); // Load environment variables
const puppeteer = require("puppeteer-core"); // Import Puppeteer-core

async function takeScreenshot() {
  // Connect to an external Chrome instance
  const browserUrl = "http://127.0.0.1:9222";

  const browser = await puppeteer.connect({ browserURL: browserUrl });
//   const browser = await puppeteer.connect({
//     browserWSEndpoint: process.env.CHROME_WS_ENDPOINT,
//   });

  // Open a new page
  const page = await browser.newPage();
  await page.goto("https://www.fashionnova.com"); // Navigate to the website
  await page.screenshot({ path: "fashionova.png" }); // Take a screenshot
  await browser.close(); // Close the browser
}

takeScreenshot();
