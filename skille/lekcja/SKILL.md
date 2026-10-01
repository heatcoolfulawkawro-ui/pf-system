---
name: lekcja
description: Zapisuje poprawkę Szefa jako trwałą regułę, żeby ten sam błąd nie wrócił w żadnej sesji („metoda roweru” / „update the skill”). Użyj, gdy Szef wpisze /lekcja, powie „zapamiętaj”, „popraw przepis”, „zaktualizuj skill”, „nie rób tak więcej”, albo gdy wyraźnie poprawia Twoją pracę lub odrzuca Twoje podejście — wtedy zaproponuj zapis sam.
---

# /lekcja — z poprawki robi się reguła

## 1. Sformułuj lekcję (pokaż Szefowi, zanim zapiszesz)

- **Co poszło źle** — jedno zdanie, konkret (nie „błąd w UI”, tylko „bloker reklam ukrył klasy `ad-`”).
- **Reguła** — jedno zdanie w trybie rozkazującym, sprawdzalne („Klasy CSS bez słów reklamowych: …”).
- **Dlaczego** — jedno zdanie (żeby przyszła sesja umiała ocenić przypadki graniczne).
- **Data** (DD.MM.RRRR).

## 2. Wybierz JEDNO właściwe miejsce

| Lekcja dotyczy | Zapisz w |
|---|---|
| jednego projektu | `CLAUDE.md` tego projektu, sekcja zasad |
| rodzaju pracy z przepisem (appki, podatki, …) | ten przepis: `pf-system/skille/<nazwa>/SKILL.md` (albo `.claude/skills/` w repo projektu, jeśli tam leży) |
| sposobu pracy z Szefem ogólnie | `pf-system/ZASADY.md` |
| faktu o Szefie / firmie / projekcie | `PROFIL.md` albo `MAPA.md` |

Wpisz regułę tam, gdzie przyszła sesja jej SZUKA (obok podobnych reguł), krótko, bez historii.
Jeśli reguła przeczy istniejącej — zastąp starą, nie dopisuj sprzecznej.

## 3. Zawsze dodatkowo wpis w `pf-system/LEKCJE.md`

Nowy wiersz NA GÓRZE tabeli: data · co poszło źle · reguła · gdzie zapisana.

## 4. Zapisz na stałe

- Commit w każdym zmienionym repo, opis: „Lekcja: <reguła w skrócie>”, i push.
  (`pf-system` → `main`. W repo appki zmiana samego `CLAUDE.md` na `main` jest bezpieczna.)
- Zmieniony przepis, który żyje na claude.ai (np. `ra-ster-mini-app`, `kontrola-podatkowa`,
  `pf-system`, `lekcja`, `raport`) → uruchom `bash tools/build-skills.sh` w `pf-system` i
  powiedz Szefowi, KTÓRĄ paczkę `.zip` wgrać ponownie na claude.ai.
- Nie da się zapisać (brak dostępu do repo, czat bez narzędzi) → podaj Szefowi gotowy tekst
  i miejsce, a w następnej sesji z dostępem dopisz.

## 5. Potwierdź jednym zdaniem

„Zapisane: <reguła> → <plik>. [Do wgrania na claude.ai: <paczka>.]”
