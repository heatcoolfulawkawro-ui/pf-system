---
name: ra-ster-mini-app
description: Buduje i rozwija lekkie, jednoplikowe mini-aplikacje webowe (HTML/CSS/JS) dla firmy RA-STER — kalkulatory wycen, karty godzin, narzędzia dla serwisantów i inne "wizytówki" — z bazą danych w Google Sheets (Apps Script), hostingiem na GitHub Pages i automatycznym wdrażaniem przez git push. Użyj tego skilla zawsze gdy Pablo mówi o nowej mini-aplikacji, kalkulatorze, narzędziu firmowym, "wizytówce", trackerze, projekcie HTML, albo chce zmienić istniejące narzędzie tego typu (np. kartę godzin) — nawet jeśli nie użyje słowa "aplikacja" wprost. Skill zawiera sprawdzony wzorzec architektury, gotowe szablony plików (szkielet appki, backend, workflow, pamięć projektu, skrypty testowe) i listę pułapek wypracowaną w bólu — stosuj go od pierwszego kroku, nie zaczynaj od zera.
---

# RA-STER mini-app (v3)

Wzorzec do budowy prostych narzędzi webowych dla firmy RA-STER (HVAC/chłodnictwo,
Pablo + 2 wspólników + 4 serwisantów). Cel: każda kolejna "wizytówka" powstaje
szybciej, bez powtarzania błędów z karty godzin — a Pablo klika tylko tam, gdzie
fizycznie potrzebny jest jego login.

## Co jest w tym skillu

- `assets/index.template.html` — działający szkielet appki: paleta, nagłówek z
  wersją i stemplem publikacji, auto-przeładowanie nowej wersji, autosave
  (localStorage + Arkusz), światełko połączenia, ukryty test zapisu.
- `assets/Kod.gs`, `assets/appsscript.example.json` — backend klucz-wartość
  (dokładnie ten, który działa w karcie godzin) i przykład manifestu.
- `assets/deploy-gas.yml`, `assets/claspignore.txt` — auto-deploy backendu.
- `assets/CLAUDE.template.md` — szablon pamięci projektu do repo.
- `scripts/check-js.js` — kontrola składni JS w pliku HTML.
- `scripts/serve-sandbox.js` — serwer testowy z odciętym backendem.
- `references/gas-clasp-autodeploy.md` — pełny przepis i 7 pułapek clasp +
  GitHub Actions. Przeczytaj przed konfiguracją auto-deployu.

Kopiuj te pliki do nowego repo i dostosowuj — nie pisz ich od nowa.

## Kiedy używać

Gdy Pablo prosi o nową mini-aplikację (albo zmianę istniejącej) używaną przez
niego lub zespół w terenie, na telefonie i/lub komputerze, z danymi które muszą
przetrwać zamknięcie przeglądarki i (zwykle) być widoczne z wielu urządzeń.

Nie używać do: dużych aplikacji z logowaniem wielu użytkowników, prawdziwej
bazy z relacjami, albo czegoś co i tak trafi do właściwego systemu wycen
(`BAZA_DANYCH_.xlsm`) — to osobny, większy temat.

## Architektura (sprawdzona, nie eksperymentuj bez potrzeby)

1. **Frontend**: jeden plik `index.html` — HTML + CSS + JS, bez frameworków,
   bez build stepu. Mobile-first (iPhone w terenie).
2. **Backend/baza**: Google Apps Script (`doGet`/`doPost`) zapisujący do zakładki
   `Data` w Arkuszu Google jako magazyn klucz-wartość (`key`, `value` z JSON-em).
   Nie Firebase/Supabase — nadmiarowe dla tej skali, wymagają kont i kluczy.
3. **Hosting**: GitHub Pages (`https://<user>.github.io/<repo>/`).
4. **Wdrażanie**: wszystko przez `git push` na `main` — frontend publikuje się
   sam (Pages), backend przez GitHub Actions + clasp pod TEN SAM adres `/exec`.
5. **Pamięć projektu**: `CLAUDE.md` w repo — każda sesja (PC i telefon) czyta go
   na starcie. Aktualizuj go przy każdym wydaniu (funkcje, format danych,
   otwarte tematy). To zastępuje pliki „stan projektu" noszone między czatami.

### Dlaczego nie inne opcje (nie odkrywaj tego ponownie)

- **Claude Publish/artifacty** — NIE do niczego, co trzyma dane: piaskownica,
  localStorage nie przeżywa zamknięcia karty, `window.storage` wpada w pętlę
  logowania przy dostępie „Anyone with the link".
- **Plik `.html` zapisany lokalnie na iPhonie** — NIE DZIAŁA, iOS Safari nie
  otwiera lokalnych plików HTML z Plików/Maila.
- **jsbin i podobne bez konta** — podgląd wygasa; dobre tylko do chwilowego testu.
- **Czat claude.ai na telefonie jako miejsce pracy nad kodem** — prowadzi do
  dwóch wersji: czat edytuje plik w swojej piaskownicy i nic nie trafia na
  GitHuba, dopóki ktoś ręcznie nie wklei. Pracuj w Claude Code na repo.

## Gdzie pracować: Claude Code na repo

- **PC (aplikacja Claude, zakładka Code)** — główne miejsce. Na komputerze
  Pabla są zainstalowane i zalogowane: Node.js, `clasp` (Google) i `gh`
  (GitHub). Sprawdź to na starcie (`node -v`, `clasp --version`,
  `gh auth status`); jeśli czegoś brak — zapytaj o zgodę i zainstaluj przez
  `winget` (OpenJS.NodeJS.LTS, GitHub.cli) + `npm i -g @google/clasp`.
  Nowa sesja narzędzi może nie mieć ich w PATH — dopisz
  `C:\Program Files\nodejs`, `%APPDATA%\npm`, `C:\Program Files\GitHub CLI`.
- **Telefon** — sesję z PC widać na telefonie tylko po włączeniu Remote Control
  dla tej sesji (komputer musi być włączony). Alternatywnie sesja chmurowa
  Claude Code na tym samym repo — dobra do zmian frontendu; logowania clasp/gh
  są tylko na PC, ale do zwykłych zmian nie są potrzebne (wdraża GitHub Actions).
- **Przeglądarka Pabla** — rozszerzenie „Claude in Chrome" jest podłączone:
  używaj go do rzeczy wymagających jego zalogowanej sesji (np. identyfikator
  skryptu z edytora Apps Script), zamiast kazać mu szukać i wklejać.
  Przejmowanie komputera (computer-use) NIE klika w przeglądarkach.
- Ścieżki z „ł" (`C:\Users\Paweł`): skrócona forma `PAWE~1` psuje
  `Set-Location` — używaj `$env:USERPROFILE` / `$env:LOCALAPPDATA`.
  PowerShell 5.1 nie ma przekierowania `<` — do `gh secret set X < plik` użyj Bash.
- Git na PC nie ma zapisanych poświadczeń do pushowania. Push rób jednorazowym
  helperem, bez zmiany globalnej konfiguracji:
  `git -c credential.helper= -c credential.helper='!gh auth git-credential' push origin main`

## Start nowego projektu — kto co robi

Cel: Pablo podaje nazwę i opis narzędzia; resztę robisz Ty. Kolejność:

1. **Ustal zakres i pokaż makietę** (patrz „Komunikacja"). Dopiero po akceptacji koduj.
2. **Frontend**: skopiuj `assets/index.template.html` → `index.html`, zmień
   nazwy, klucz danych (`KEY`), klucz wersji w skrypcie auto-reload, zbuduj UI.
3. **Repo + Pages**: `gh repo create <nazwa> --public --source . --push`, potem
   włącz Pages z gałęzi `main`, folder `/` (spróbuj
   `gh api -X POST repos/<owner>/<repo>/pages -f "source[branch]=main" -f "source[path]=/"`;
   jeśli API odmówi — poprowadź Pabla: Settings → Pages → Source: `main`, `/ (root)`).
   Ta ścieżka przez `gh api` nie była jeszcze sprawdzona w praktyce — zweryfikuj
   wynik (`gh api repos/<owner>/<repo>/pages`), nie zakładaj sukcesu.
4. **Arkusz + backend**. Sprawdzona droga: Pablo zakłada Arkusz → Rozszerzenia →
   Apps Script → wkleja `assets/Kod.gs` → Wdróż → Nowe wdrożenie → „Aplikacja
   internetowa", „Wykonaj jako: Ja", „Kto ma dostęp: Każdy" → autoryzacja (ekran
   „Google hasn't verified this app" jest normalny: Advanced → Go to… → Zezwól).
   Do sprawdzenia przy najbliższej okazji (nietestowane): `clasp create --type
   sheets --title "<nazwa>"` tworzy Arkusz z podpiętym skryptem bez klikania;
   pierwsza autoryzacja uprawnień i tak wymaga jednego kliknięcia Pabla.
5. **Sprawdź `/exec`** zanim wpiszesz go do appki: `GET ...?key=__ping__` →
   HTTP 200 i pusta treść to SUKCES (nieznany klucz), nie błąd.
6. **Auto-deploy backendu** — od razu, w ramach pierwszego wdrożenia. Przeczytaj
   `references/gas-clasp-autodeploy.md`. W skrócie, na PC Pabla:
   - `scriptId` weź z adresu edytora (przez Claude in Chrome); `clasp list` NIE
     pokazuje skryptów podpiętych do Arkusza.
   - `clasp clone <scriptId>` do katalogu tymczasowego → przenieś pliki do repo;
     nazwa pliku lokalnego MUSI odpowiadać nazwie na serwerze (np. `Kod.gs`);
     `appsscript.json` tylko z klonu, nigdy z głowy.
   - Skopiuj `assets/deploy-gas.yml` i `assets/claspignore.txt` (→ `.claspignore`),
     wpisz `deploymentId` z adresu `/exec` do workflow (jest jawny, nie sekret).
   - Sekret: `gh secret set CLASPRC_JSON --repo <owner>/<repo> < ~/.clasprc.json`
     (w Bash; nigdy nie wyświetlaj ani nie kopiuj treści tego pliku — to pełny
     token do konta Google).
   - Przed pierwszym pushem pokaż Pablowi diff. Zweryfikuj, że pliki z klonu są
     bajt w bajt równe edytorowi i że `clasp status` śledzi tylko backend
     (`index.html` nie może trafić do Apps Script).
   - Po pushu: `gh run watch`, w logu `Deployed <to samo ID> @N`, ping `/exec`.
   - Logowanie lokalne (`clasp login`, `gh auth login --web --clipboard` + sam
     otwórz `https://github.com/login/device` przez `Start-Process`) jest dużo
     prostsze dla Pabla niż Google Cloud Shell — Cloud Shell tylko awaryjnie.
     Uprzedź, że GitHub może dosłać mailem drugi kod (weryfikacja urządzenia) —
     wpisuje go tylko Pablo, tylko na stronie GitHuba, nigdy na czacie.
7. **`CLAUDE.md`** z `assets/CLAUDE.template.md` — wypełnij i wypchnij.
8. **Test end-to-end**, potem telefon: link w Safari → „Dodaj do ekranu początkowego".

## Wzorzec backendu

Kod w `assets/Kod.gs` (`doGet` po `key`, `doPost` z `{key, value}`, zakładka
`Data` tworzona automatycznie). Zmienia się zwykle tylko logika po stronie
frontendu.

**Krytyczna pułapka POST z fetch():** Apps Script zawsze przekierowuje z `/exec`
(302), a przeglądarka zamienia wtedy POST na GET. Wysyłaj POST z
`Content-Type: text/plain;charset=utf-8` (nie `application/json`) — to omija też
preflight CORS. Apps Script i tak czyta treść z `e.postData.contents`.

Frontend zawsze trzyma `localStorage` jako natychmiastowy bufor + `fetch` do
Arkusza w tle; appka ma działać offline.

## Wydania: wersja, stempel, auto-odświeżanie

- Skrypt na górze `index.html` (w szablonie) sprawdza `last-modified` przez HEAD
  z pominięciem cache i sam przeładowuje stronę — bez tego skrót na ekranie
  głównym iPhone'a potrafi tygodniami pokazywać starą wersję.
- Przy tytule: `.vertag` (np. v1.2) i `.buildtag` (`DD.MM.RRRR GG:MM`). Przy
  KAŻDYM wydaniu podbij wersję i ustaw stempel na bieżący czas — Pablo po tym
  poznaje, że telefon ma nową wersję. Po publikacji sprawdź, że żywa strona jest
  bajt w bajt równa `git show HEAD:index.html`.

## Bezpieczne zmienianie i testowanie

- **Nigdy nie testuj na prawdziwym Arkuszu.** Każde kliknięcie w appce zapisuje
  dane. Uruchom `node scripts/serve-sandbox.js index.html` (podmienia `GAS_URL`
  na atrapę, wysyła `Cache-Control: no-store`) i testuj we wbudowanej
  przeglądarce w widoku mobile (375×812). Dane testowe wstrzykuj przez JS,
  wyniki liczbowe porównuj z ręcznym wyliczeniem co do minuty.
- Serwer testowy bez `no-store` = przeglądarka poda starą kopię i sprawdzisz nie
  ten kod (objaw: „funkcja nie istnieje", choć jest w pliku).
- Po każdej zmianie: `node scripts/check-js.js index.html`.
- Pliki w repo mają na Windows końce linii CRLF — wielolinijkowe edycje rób
  skryptem Node z dopasowaniem „dokładnie jedno wystąpienie" po normalizacji do
  LF (i zapisem z powrotem w CRLF), a nie na ślepo.
- Zmiany rób na gałęzi, scalaj `--ff-only` do `main`, wypychaj, czekaj na
  `pages-build-deployment`, weryfikuj żywą stronę.
- Nie twierdź, że funkcja „jest już w kodzie" po zgrubnym wyszukaniu słowa —
  sprawdzaj konkretne identyfikatory (słowo „dojazd" było typem luki, a nie
  kategorią bloku, i wyszła z tego fałszywa odpowiedź).

## Dane: format, migracje, walidacja

- Jeden klucz = jeden JSON (np. per miesiąc: `nazwa_v3_{rok}_{miesiąc}`).
- Zmiana formatu = migracja. Nowe pola dodawaj jako opcjonalne; dane zapisane
  wcześniej mają liczyć się DOKŁADNIE tak samo jak przed zmianą (przykład:
  przełącznik „Praca w nocy" — stare dni, które korzystały z automatycznego
  przejścia przez północ, dostają flagę przy wczytaniu, więc sumy się nie zmieniły).
- Stan czysto ekranowy (co zwinięte/rozwinięte) trzymaj w pamięci, nie w danych.
- **Nie interpretuj po cichu błędnych danych.** Karta godzin traktowała godzinę
  wcześniejszą od poprzedniej jako „następny dzień" — jedna literówka doliczała
  ~20 h. Reguła: podejrzana wartość = czerwona ramka + komunikat co jest nie tak
  + NIE wliczaj jej do sum; wyjątek (np. nocka) tylko jawnym przełącznikiem.
- Wypełniaj z automatu to, co wynika z poprzedniego wpisu (start nowego
  przedziału = koniec poprzedniego) — mniej pisania, mniej gaf.
- Limity „na sztywno" (np. max 4 pozycje) wynoś do stałej i dawaj zapas.
- Eksport do Excela: gdy szablon ma za mało kolumn, dokładaj nowe ZA istniejącymi
  (stary układ i import starych plików mają dalej działać); nigdy nie ucinaj
  danych po cichu — suma w Excelu musi zgadzać się z appką.

## Styl frontendu (spójność między narzędziami)

Ciemny motyw, mobile-first, duże strefy dotyku. Paleta:

```css
:root{
  --bg:#12181d; --panel:#1b232a; --panel2:#212b33; --line:#2c3841;
  --ink:#e8edf1; --ink-dim:#8fa0ab; --amber:#e8a33d; --green:#4caf7d;
  --red:#d9695f; --blue:#5b9bd5; --radius:10px;
}
```

- Amber = akcent/CTA. Zielony/czerwony = zawsze semantycznie (dobrze/źle,
  nadgodziny/niedobór, błąd). Niebieski = wartości referencyjne/normy.
- Listy dzienne/pozycje jako rozwijane karty. **Wypełnione pozycje zwijaj w
  jednolinijkowe paski** (kategoria, kluczowe wartości, początek komentarza,
  ikona ✎); dotknięcie rozwija pełną edycję. Pozycja w trakcie wpisywania nigdy
  nie zwija się sama. Między pozycjami dawaj „＋ wstaw" — kolejność da się
  poprawić bez kasowania.
- Panele podsumowań kompaktowe; szczegóły na osobnej pełnoekranowej stronie z
  „‹ Wróć", liczby z udziałem % i cienkim paskiem.
- Pola `input` min. 16 px czcionki (iOS nie zoomuje przy fokusie).
- Przy wpisywaniu NIE przebudowuj DOM-u (telefon gubi fokus) — odświeżaj tylko
  wyliczane etykiety.
- Na iOS niezawodne są tylko prawdziwe natywne elementy: `<input type="file">`
  i realne dotknięcie `<a href>`. Programowe `.click()` na ukrytym linku i
  `location.href = dataURI` zawodzą — eksport pliku rób dwuetapowo (pierwsze
  dotknięcie buduje plik i podmienia `href`, drugie to prawdziwe kliknięcie).
- Mały znacznik „zapisano" w rogu przy autosave + światełko połączenia z Arkuszem.
- Dyskretny przycisk „test zapisu" (jest w szablonie) — 10 sekund diagnozy
  zamiast zgadywania, czy problem jest w Apps Script, w sieci, czy gdzie indziej.

## Polskie realia (czas pracy, urlopy)

Święta licz programowo: stałe daty + Wielkanoc algorytmem Meeusa/Jonesa/Butchera
(Poniedziałek Wielkanocny = +1, Boże Ciało = +60). Nie wpisuj dat na sztywno dla
jednego roku. W RA-STER pracuje się też w soboty, niedziele i święta — średnie i
liczniki dni muszą to uwzględniać (dzień z wpisem to dzień pracy, niezależnie od
kalendarza).

## Przenoszenie kodu ze starego czatu claude.ai

Jeśli nowsza wersja appki istnieje tylko w czacie na telefonie: czat edytował
plik przyrostowo (`str_replace`), a opublikowane artefakty pokazują stare wersje.
Przez Claude in Chrome pobierz z danych rozmowy listę edycji (old/new), przenieś
ją na dysk przez schowek (listener na kliknięcie + prawdziwe kliknięcie →
`Get-Clipboard`), odtwórz na commicie, na którym czat bazował (każda edycja musi
trafić dokładnie w jedno miejsce) i scal gitem z `main`. Nie odtwarzaj zmian „na
oko", gdy istnieje przetestowany oryginał.

## Komunikacja z Pablo

- Po polsku, zwracaj się „Szefie". Inżynier, nie programista — tłumacz pojęcia
  przy pierwszym użyciu, krok po kroku.
- **Minimalizuj jego klikanie.** Rób sam wszystko, co nie wymaga jego loginu;
  jemu zostaw tylko „Zezwól"/„Authorize" i kody weryfikacyjne. Nie wysyłaj go po
  identyfikatory do interfejsów, jeśli możesz je zdobyć sam. Rekomenduj jedną
  ścieżkę zamiast dawać wybór techniczny, którego nie ma jak ocenić.
- Przed widoczną zmianą UI POKAŻ klikalną makietę (`visualize:show_widget`) i
  opisz zasady działania; przy zmianach w liczeniu zadaj 1–2 konkretne pytania z
  rekomendacją. Pablo odpowiada szybko i często dorzuca kolejne wymagania w
  trakcie — uwzględniaj je w tym samym wydaniu i potwierdź, że je zauważyłeś.
- Przed pierwszym pushem do nowego miejsca pokaż diff. Po wdrożeniu napisz, co
  sprawdziłeś i czego NIE sprawdziłeś (np. „na iPhonie nie testowałem").
- Pomyłkę przyznaj wprost i od razu napraw.
- Sekrety (`~/.clasprc.json`, tokeny, kody logowania) nigdy na czat.
- Woli PC do konfiguracji, telefon do codziennego użytku.
