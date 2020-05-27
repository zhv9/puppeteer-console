import puppeteer, { LaunchOptions } from "puppeteer";
import ppConsole from "../src/index";

const config: LaunchOptions = {
  headless: false,
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "",
};

(async function () {
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();
  await ppConsole(page);
  await page.goto("http://bing.com", { waitUntil: "networkidle2" });
  await page.type("#sb_form_q", "Puppeteer");
  await page.click("#sb_form_go");
  await ppConsole(page);

  await browser.close();
})();
