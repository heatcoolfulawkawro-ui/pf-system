// Kontrola składni JS osadzonego w jednoplikowej appce HTML.
// Użycie: node check-js.js sciezka/do/index.html
const fs = require('fs'), os = require('os'), path = require('path');
const { execFileSync } = require('child_process');
const file = process.argv[2];
if (!file) { console.error('Podaj plik .html'); process.exit(2); }
const html = fs.readFileSync(file, 'utf8');
const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!blocks.length) { console.error('Brak bloków <script> w pliku'); process.exit(2); }
let bad = 0;
blocks.forEach((code, i) => {
  const tmp = path.join(os.tmpdir(), `check-js-${process.pid}-${i}.js`);
  fs.writeFileSync(tmp, code);
  try { execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' }); console.log(`OK   blok ${i + 1}/${blocks.length}`); }
  catch (e) { bad++; console.log(`BŁĄD blok ${i + 1}/${blocks.length}\n${String(e.stderr || e.message)}`); }
  finally { fs.unlinkSync(tmp); }
});
process.exit(bad ? 1 : 0);
