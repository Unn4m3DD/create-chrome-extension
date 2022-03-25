#! /usr/bin/env node
function main() {
  if (process.argv.length < 3) {
    console.log("usage: npx create-chrome-extension [extension_name]")
    return
  }
}

if (require.main === module) {
  main();
}