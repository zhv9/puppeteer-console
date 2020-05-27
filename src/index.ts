import readline from "readline";
import { Page } from "puppeteer";

let temp: any;

export default async function ppConsole(page: Page) {
  return await new Promise((resolve, reject) => {
    const prompt = "> ";
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt,
    });
    rl.prompt();
    rl.on("line", async (line: string) => {
      if (line === "exit") {
        rl.close();
        return resolve();
      }
      await onLineInput(page, line);
      rl.prompt();
    });
    rl.on("close", () => {
      rl.close();
      console.log("");
      resolve();
    });
  });
}

async function onLineInput(page: Page, line: string) {
  try {
    const executeLine = `(async () => {return ${line}})()`;
    const result = eval(executeLine) || "";
    const output = result.constructor.name === "Promise" ? await result : result;
    console.log(output);
  } catch (error) {
    console.log(error);
  }
}
