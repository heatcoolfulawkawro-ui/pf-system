// Serwer testowy: podaje KOPIĘ appki z GAS_URL podmienionym na lokalną atrapę,
// żeby testowe klikanie nigdy nie zapisało nic do prawdziwego Arkusza.
// Użycie: node serve-sandbox.js sciezka/do/index.html [port]
// Potem otwórz http://localhost:<port>/ (wbudowana przeglądarka, widok mobile).
const http = require('http'), fs = require('fs');
const file = process.argv[2], port = Number(process.argv[3] || 4173);
if (!file) { console.error('Podaj plik .html'); process.exit(2); }

http.createServer((req, res) => {
  if (req.url.startsWith('/nogas')) {           // atrapa backendu: pusto = "brak klucza"
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(req.method === 'POST' ? '{"ok":true}' : '');
  }
  let html = fs.readFileSync(file, 'utf8');      // czytane przy każdym żądaniu = zawsze świeże
  const n = (html.match(/const GAS_URL = '[^']*';/g) || []).length;
  if (n !== 1) { res.writeHead(500); return res.end(`Oczekiwano dokładnie jednej stałej GAS_URL, jest ${n}`); }
  html = html.replace(/const GAS_URL = '[^']*';/, "const GAS_URL = '/nogas';");
  // no-store: bez tego przeglądarka potrafi podać starą kopię i test sprawdza nie ten kod
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(html);
}).listen(port, () => console.log(`sandbox: http://localhost:${port}/  (GAS_URL -> /nogas)`));
