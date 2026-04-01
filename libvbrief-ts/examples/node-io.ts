import { VBriefDocument, dumpFile, loadFile, quickTodo } from "../src/node.js";

const inputUrl = new URL("../../examples/minimal-plan.vbrief.json", import.meta.url);
const outputUrl = new URL("./release-prep.vbrief.json", import.meta.url);

const existing = VBriefDocument.fromDict(await loadFile(inputUrl, { strict: true }), { strict: true });

const generated = quickTodo("Release prep", [
  "Run task ts:test",
  "Review generated API docs",
  "Validate shared fixtures",
]);

await dumpFile(generated, outputUrl);

console.log(existing.plan.title);
console.log(`Wrote ${outputUrl.pathname}`);
