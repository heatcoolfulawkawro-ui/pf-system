# Profil Szefa

> WERSJA ROBOCZA (01.10.2026) — złożona z tego, co wiadomo z repozytoriów i przepisów.
> Uzupełni ją wywiad „Grill Me” (`GRILL-ME.md`). Pola „?” = do ustalenia.

## Kto

- Paweł (w przepisach też „Pablo”), skrót **PF**. Zwracać się: „Szefie”.
- Inżynier, branża HVAC / chłodnictwo. Nie programista.
- Firma **RA-STER**: Szef + 2 wspólników + 4 serwisantów. Rola Szefa: **mieszana** — zarząd,
  wyceny i oferty, a do tego teren/serwis. Wspólnicy: każdy ma swój obszar (kto co: ?).
- Struktura firm (wywiad 02.10.2026, blok B):
  - **SP CS sp. z o.o.** (nazwa robocza) — główna spółka OPERACYJNA, 3 wspólników.
    RA-STER to NIE jest SP CS (czym jest RA-STER względem spółek: ? — do wyjaśnienia).
  - **SP HNC sp. z o.o.** — spółka Szefa, PODWYKONAWCA SP CS. Każdy wspólnik ma swój podmiot:
    (1) narzędzie do fakturowania spółki głównej, (2) możliwość robienia zleceń, których
    spółka główna nie może się podjąć. Teksty ustaw: `I:\HNC FIRMA\20_USTAWY\`.

## RA-STER (wywiad 02.10.2026, blok A)

- Zakres: **kotłownie, klimatyzacja, chłodnictwo, pompy ciepła, wentylacja**.
- Klienci: firmy z umowami serwisowymi, firmy (zlecenia jednorazowe), instytucje / przetargi.
  Klienci prywatni — nie są typowi.
- Dane firmowe dziś: **KSeF** (faktury), **`BAZA_DANYCH_.xlsm`** (wyceny), **papier i głowa**.
- Złodzieje czasu: **oferty i wyceny**, **protokoły i F-gaz**, **rozliczenia**.
- Rzecz nr 1 do pozbycia się z tygodnia: **szukanie informacji** (gdzie to było, kto co robił,
  jaki model u klienta).
- Wyceny — Claude ma pomagać we wszystkim: treść oferty, kalkulacja i dobór, porównanie ofert
  dostawców, przetargi (analiza SWZ, wymagania, ryzyka, terminy).
- Rozliczenia — boli wszystko: godziny ludzi → wypłaty, koszt zlecenia vs faktura,
  fakturowanie (co zafakturowane, przeglądy z umów), koszty firmy.
- KSeF: Claude może czytać faktury **z plików eksportu** (wrzuca Szef), bez stałego dostępu.
- Z tego, co budujemy, mają korzystać też **wspólnicy**.

## Finanse (wywiad 02.10.2026, blok B)

- Księgowość: **biuro rachunkowe**.
- Claude jako „drugie oko”: koszt pracownika / RBH, decyzje podatkowe (zawsze skill
  `kontrola-podatkowa`), opłacalność zleceń i umów serwisowych, płynność.
- Przypominać: przeglądy z umów serwisowych, kontrole szczelności F-gaz, podatki i ZUS.
- **DOCELOWY MODEL DANYCH FINANSOWYCH: foldery z plikami źródłowymi** (np. eksporty z KSeF)
  → na tej bazie budujemy własne oprogramowanie (zestawienia, koszt zlecenia, płynność).
  Pliki źródłowe są nienaruszalne; programy je tylko czytają.
  - Zakres: dane **SP CS** (spółka główna). SP HNC i podmioty pozostałych 2 wspólników to
    podmioty podrzędne — nie w tej bazie.
  - Miejsce: **osobny folder na dysku `I:` dla SP CS** (PC Szefa). Claude w chmurze go NIE
    widzi — praca na tych danych przez Claude na PC. Struktura folderów: do zaprojektowania.

## Jak pracuje

- Telefon (iPhone, Safari i Chrome) do codziennego użytku w terenie; PC (Windows) do
  konfiguracji i dłuższej pracy.
- Claude: czaty claude.ai, aplikacja Claude na PC (zakładka Code, Claude in Chrome),
  sesje Claude Code w chmurze.
- Na PC: Node.js, clasp, gh (zalogowane). Dyski C, F, G, H, I = partycje JEDNEGO SSD.
- Podłączone usługi: GitHub, Gmail, Kalendarz, Dysk Google, Make, Linear, Canva,
  Wispr Flow, Claude Docs. Które są faktycznie używane: ?

## Preferencje

- Ciemny motyw, mobile-first, amber = akcja, zielony/czerwony = dobrze/źle,
  niebieski = wartości referencyjne. Duże strefy dotyku.
- Krótko i konkretnie; jedna rekomendacja zamiast listy opcji.
- Chce widzieć, która wersja jest załadowana (znacznik wersji + stempel czasu).
- Nie lubi: przebudowy całości, zmian, o które nie prosił, klikania za Claude.

## Cele i priorytety (najbliższy kwartał)

- ? (wywiad)

## Ludzie

- Wspólnicy (2, każdy ma swój obszar): ? · Serwisanci (4): ? (w karcie godzin: konto PS = Piotr S, testowe)
- Użytkownicy appek prywatnych: Szef, żona (Wydatki domowe), Zuzia (Gotówka PF).
