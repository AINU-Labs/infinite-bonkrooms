function outputResponse(agent: string, text: string) {
  console.log(`\n[${agent}]:\n\n${text}`);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { outputResponse, sleep };
