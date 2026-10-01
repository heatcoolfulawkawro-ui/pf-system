# <NAZWA NARZĘDZIA> — pamięć projektu

<Jedno-dwa zdania: co to za narzędzie, kto go używa i na czym (telefon/PC).>
Z użytkownikiem rozmawiaj po polsku; to inżynier, nie programista — tłumacz
krótko pojęcia przy pierwszym użyciu i rób sam wszystko, co nie wymaga jego
logowania.

## Gdzie co leży

- **Frontend**: `index.html` (jeden plik: HTML + CSS + JS, bez frameworków,
  bez build stepu) → GitHub Pages: https://<user>.github.io/<repo>/
- **Backend**: `Kod.gs` + `appsscript.json` → Google Apps Script podpięty do
  Arkusza „<nazwa arkusza>" (zakładka `Data`, kolumny `key`, `value`).
- **Web App URL** (stała `GAS_URL` w `index.html`) — NIE MOŻE się zmienić.
- `.clasp.json` / `.claspignore` — konfiguracja clasp.

## Wdrażanie — wszystko przez `git push` na `main`

- **Frontend**: push → GitHub Pages publikuje samo (~1 min); appka sama się
  przeładowuje po wykryciu nowej wersji. Przy każdym wydaniu podbij `.vertag`
  i ustaw `.buildtag` na bieżący czas (`DD.MM.RRRR GG:MM`).
- **Backend**: push zmieniający `Kod.gs` / `appsscript.json` uruchamia
  `.github/workflows/deploy-gas.yml` (`clasp push -f` + `clasp deploy
  --deploymentId <istniejące>`, sekret `CLASPRC_JSON`).
- Po wdrożeniu backendu: `gh run watch`, w logu `Deployed … @N` pod tym samym
  ID, oraz `GET <GAS_URL>?key=__ping__` → HTTP 200 z pustą treścią.
- `appsscript.json` pochodzi z `clasp pull/clone` — nie edytuj z głowy.

## Zasady przy zmianach

- Przed widoczną zmianą UI pokaż makietę do akceptacji.
- Po każdej zmianie JS: kontrola składni (`scripts/check-js.js` ze skilla).
- Testuj na kopii odciętej od Arkusza (`scripts/serve-sandbox.js`), nigdy na
  prawdziwych danych.
- POST do Apps Script zawsze `Content-Type: text/plain;charset=utf-8`.
- Format danych: <klucze i kształt JSON-a>. Zmiana formatu = migracja; nowe
  pola tylko opcjonalne, stare dane mają liczyć się tak samo jak wcześniej.
- Przy wpisywaniu nie przebudowuj DOM-u (telefon gubi fokus).

## Funkcje (stan: <data>, <wersja>)

- <lista funkcji — aktualizuj przy każdym wydaniu>

## Otwarte tematy

- <co zaplanowane / nieustalone>
