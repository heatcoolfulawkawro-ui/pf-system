# Mapa projektów

Stan: 01.10.2026. Szczegóły każdego projektu są w jego `CLAUDE.md` / `README.md` — tu tylko
przegląd. Właściciel GitHub: `heatcoolfulawkawro-ui`. Adres appek:
`https://heatcoolfulawkawro-ui.github.io/<repo>/`.

## Appki webowe (wzorzec: skill `ra-ster-mini-app`)

| Projekt | Repo | Do czego | Kto używa | Stan / uwagi |
|---|---|---|---|---|
| Karta godzin | `karta-godzin` | godziny pracy, eksport do Excela, konta + PIN, panel admina | Szef + serwisanci | v1.6.1, produkcja; najbardziej rozbudowana |
| Paliwo PF | `Paliwo-PF` | tankowania i koszty aut — 2 sekcje: firmowe i prywatne | Szef | produkcja; brak `CLAUDE.md` (tylko README) |
| Waga PF | `Waga-PF` | pomiary masy ciała (profile), trening, przypomnienia w Kalendarzu | rodzina | produkcja |
| Wydatki domowe | `wydatki-domowe` | budżet domowy, paragony → Gemini | Szef + żona | v0.4+, produkcja |
| Gotówka PF | `gotowka-pf` | pula gotówki, ile zostało, rytm wydawania | Paweł, Zuzia | produkcja |
| Narzędzia PF (rozdzielacz) | `heatcoolfulawkawro-ui.github.io` | strona startowa z linkami do appek | Szef | produkcja |
| HVAC Notatki | `AGENT_JOHN` | wizyty serwisowe i urządzenia, AI (Gemini) | — | **porzucone** (02.10.2026); kod może posłużyć jako materiał |
| PF-Protokoły | `pf-protokoly` | baza klientów / obiektów / urządzeń (V1) | — | **porzucone** (02.10.2026); kod może posłużyć jako materiał |

Wspólne mechanizmy: skrypt wykrywania nowej wersji (ten sam we wszystkich od 30.09.2026),
„rodzina PIN-u PF” (zmiana PIN-u konta PF synchronizowana między appkami).

## Inne

| Projekt | Gdzie | Do czego | Stan |
|---|---|---|---|
| Kalkulator RBH | repo `rbh-kalkulator` (prywatne), otwierany lokalnie | netto → brutto → koszt pracodawcy → stawka roboczogodziny | v1.4 (08.2026) |
| SP HNC | PC: `I:\HNC FIRMA\` | ? (teksty ustaw, kontrola podatkowa) | ? |
| System wycen | `BAZA_DANYCH_.xlsm` | wyceny RA-STER | osobny, większy temat |
| Kopie zapasowe karty godzin | PC: `tools/backup-karta-godzin.ps1`, Harmonogram 20:00 | JSON + SHA-256 na F:, H:, dysk zewnętrzny | działa; brak kopii poza jednym SSD bez dysku zewn. |
| pf-system | repo `pf-system` (prywatne) | ten „mózg” | od 01.10.2026 |

## Gdzie leży wiedza

- Wyciągi ze starych czatów: PC `..\_wiedza-z-czatow\` → do przeniesienia do `wiedza/`.
- Mapa projektów na PC: `..\CLAUDE.md` → zastąpiona tym plikiem (na PC zostaje odnośnik).
