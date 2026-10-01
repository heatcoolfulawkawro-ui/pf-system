# pf-system — wspólny mózg pracy z Claude

Jedno źródło prawdy dla KAŻDEJ pracy z Claude (czaty claude.ai, aplikacja na PC, sesje
Claude Code w chmurze): kim jest Szef, jak pracujemy, jakie są projekty, czego się
nauczyliśmy i gotowe przepisy (skille). Repo PRYWATNE.

| Plik | Co w nim jest | Kto aktualizuje |
|---|---|---|
| `PROFIL.md` | Szef, RA-STER, ludzie, cele, preferencje | po wywiadzie „Grill Me”, potem co kwartał |
| `ZASADY.md` | żelazne zasady pracy, definicja „zrobione”, granice autonomii | `/lekcja`, za zgodą Szefa |
| `MAPA.md` | wszystkie projekty: co to, gdzie leży, stan, otwarte tematy | przy każdym nowym projekcie / wydaniu |
| `LEKCJE.md` | dziennik poprawek Szefa → reguła → gdzie zapisana | `/lekcja` |
| `GRILL-ME.md` | bank pytań do wywiadu (etap 2) | — |
| `START-NA-PC.md` | jednorazowe polecenie dla Claude na PC (klon + przeniesienie wiedzy) | — |
| `wiedza/` | wyciągi z dawnych czatów (dziś na PC: `_wiedza-z-czatow`) | jednorazowe przeniesienie z PC |
| `skille/` | ORYGINAŁY przepisów; na claude.ai wgrywa się z nich paczki .zip | `/lekcja`, `tools/build-skills.sh` |

## Jak ta wiedza trafia do Claude

1. **Skille z claude.ai synchronizują się wszędzie** (czaty, PC, chmura) — sprawdzone
   01.10.2026: `ra-ster-mini-app` i `kontrola-podatkowa` są widoczne w sesji w chmurze.
   Dlatego najważniejszy jest skill `pf-system` (w `skille/pf-system/`): ma w środku
   streszczenie zasad + kopię PROFIL/ZASADY/MAPA/LEKCJE i mówi, skąd wziąć wersję świeższą.
2. **Sesja w chmurze** czyta świeżą wersję z tego repo (`add_repo` + `git clone`).
3. **PC**: klon repo w folderze projektów obok `karta-godzin`; `..\CLAUDE.md` wskazuje tutaj.
4. **Każdy projekt** ma w swoim `CLAUDE.md` jedną linijkę: „Wspólne zasady: skill `pf-system`”.
   W `CLAUDE.md` projektu zostaje tylko to, co dotyczy tego projektu.

## Aktualizacja skilli na claude.ai

`bash tools/build-skills.sh` → paczki w `dist/*.zip` → Szef wgrywa na claude.ai
(Ustawienia → Możliwości/Capabilities → Skills → Upload). Wgrać ponownie trzeba tylko te,
które się zmieniły — skrypt to wypisuje.
