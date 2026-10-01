# Lekcje — dziennik poprawek

Format: data · co poszło źle · reguła · gdzie zapisana. Nowe wpisy NA GÓRZE (`/lekcja`).
Wpisy startowe zebrane 01.10.2026 z plików projektów i przepisów.

| Data | Co poszło źle | Reguła | Gdzie |
|---|---|---|---|
| 01.10.2026 | Eksport → import karty godzin zawyżał sumę (luka czytana jako dojazd) | Eksport i import muszą liczyć tak samo jak Excel; test „w obie strony” | karta-godzin `CLAUDE.md` |
| 21.09.2026 | Bloker reklam na PC Szefa ukrył panel Admin (klasy `ad-…`) | Klasy CSS bez słów reklamowych (`ad-`, `banner`, `promo`, `sponsor`…) | karta-godzin `CLAUDE.md` → do `ra-ster-mini-app` |
| 19.09.2026 | Zadanie Harmonogramu nie widziało klucza kopii | Pakiet aplikacji Claude wirtualizuje `%LOCALAPPDATA%` — klucze/logi dla Harmonogramu trzymać gdzie indziej | karta-godzin `CLAUDE.md` |
| 19.09.2026 | „Kopia na H:” nie chroni przed awarią dysku | C/F/G/H/I to jeden SSD — kopia musi iść na dysk zewnętrzny | karta-godzin `CLAUDE.md` |
| 09.2026 | Link z `data:` URI na iPhonie nic nie robił | Na iOS tylko natywne elementy i realne dotknięcie `<a href>` | `ra-ster-mini-app` |
| 09.2026 | POST do Apps Script po cichu się nie zapisywał | POST zawsze `text/plain;charset=utf-8` | `ra-ster-mini-app` |
| 09.2026 | Literówka w godzinie doliczała ~20 h (po cichu „następny dzień”) | Podejrzana wartość = komunikat i nie liczymy | `ra-ster-mini-app`, `ZASADY.md` |
| 09.2026 | Fałszywa odpowiedź „funkcja już jest” po zgrubnym wyszukaniu słowa | Sprawdzaj konkretne identyfikatory, nie słowa | `ra-ster-mini-app` |
| 09.2026 | Kod pisany w czacie claude.ai na telefonie → dwie wersje appki | Kod tylko w Claude Code na repo | `ra-ster-mini-app` |
| 09.2026 | Test na starej kopii strony | Serwer testowy z `Cache-Control: no-store` | `ra-ster-mini-app` |
| 09.2026 | Ryzyko nowego adresu backendu | `clasp deploy` zawsze z `--deploymentId` | `gas-clasp-autodeploy` |
| 09.2026 | `PAWE~1` psuje ścieżki na PC | używać `$env:USERPROFILE` | `ra-ster-mini-app` |
| 09.2026 | Port 4190 blokowany przez przeglądarki | serwery testowe na innych portach (np. 4180, 4280) | wydatki-domowe `CLAUDE.md` |
