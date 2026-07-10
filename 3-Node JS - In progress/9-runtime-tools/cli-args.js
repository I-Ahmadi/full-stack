/*
  CLI Arguments
  -------------
  Run this file:

    node cli-args.js --name Aisha --mode dev

  process.argv contains command-line arguments.
*/

const args = process.argv.slice(2);

function getArg(name, fallback) {
  const index = args.indexOf(`--${name}`);

  if (index === -1) return fallback;

  return args[index + 1] || true;
}

const name = getArg("name", "student");
const mode = getArg("mode", "development");

console.log("Raw args:", args);
console.log("Name:", name);
console.log("Mode:", mode);

/*
  For real CLI apps, packages like commander or yargs provide more features.
  But process.argv is enough to understand the basics.
*/
