// Entry for make.fun's "Roast Your Own Agent": the whole entry is one line.
// The program prints it to stdout and writes the same line to entry.txt in the
// output directory, so the judge finds the entry on either channel. The line
// itself is the roast; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "My agent is so confident it once apologized for a mistake it hadn't made yet, then billed me for the apology in tokens.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
