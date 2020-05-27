# Thanks

This tool was inspired by the idea from [puppeteer-debug](https://github.com/nswbmw/puppeteer-debug).

But it not good enough to me so I create this tool.

# Getting Started

## Installation

To use puppeteer-console in your project, run:

```shell
npm install --save-dev puppeteer-console
```

Also, You can copy `src/index.ts` to your project and import into your code.

# Usage

```ts
import puppeteer from "puppeteer";
import ppConsole from "puppeteer-console";

(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await ppConsole(page); // first console
  await page.goto("http://bing.com", { waitUntil: "networkidle2" });
  await page.type("#sb_form_q", "Puppeteer");
  await page.click("#sb_form_go");
  await ppConsole(page); // second console

  await browser.close();
})();
```

As you can see there are two "ppConsole" in code. After you "exit" first "ppConsole" it will stop at second "ppConsole".

## In console

You are able to paste code snippet to console when you stop at it. It can only execute one line. But as you know javascript is able to place all code in one line.

```
> page.goto("http://bing.com", { waitUntil: "networkidle2" })
> page.type("#sb_form_q", "Puppeteer")
> await page.click("#sb_form_go")
```

`await page.xxx()` and `page.xxx()` are no different in this console.

If you want store temporary data then you can assign the data to variable `temp`. Example as below:

```
> temp = 1
1
> 1 + temp
2
>
```

## Close puppeteer console

Use "Ctrl + C" or input "exit" to close present command line.
