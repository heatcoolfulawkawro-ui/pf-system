#!/usr/bin/env bash
# Buduje paczki .zip skilli do wgrania na claude.ai (Ustawienia → Capabilities → Skills → Upload).
# Do skilla pf-system dokleja aktualną kopię PROFIL/ZASADY/MAPA/LEKCJE (references/).
# Wypisuje, które paczki zmieniły się od ostatniego budowania (tylko te trzeba wgrać ponownie).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p dist
mkdir -p skille/pf-system/references
cp PROFIL.md ZASADY.md MAPA.md LEKCJE.md skille/pf-system/references/

changed=()
for dir in skille/*/; do
  name=$(basename "$dir")
  sum=$(cd skille && find "$name" -type f ! -name '.*' -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -c1-16)
  stamp="dist/$name.sha"
  rm -f "dist/$name.zip"
  (cd skille && zip -qr "../dist/$name.zip" "$name" -x '*/.*')
  # dist/*.sha są w repo: pamiętają stan ostatnio zbudowanych (= wgranych) paczek
  if [ "$(cat "$stamp" 2>/dev/null)" != "$sum" ]; then
    echo "$sum" > "$stamp"
    changed+=("$name")
  fi
done

if [ ${#changed[@]} -eq 0 ]; then
  echo "Bez zmian — nic do wgrywania."
else
  echo "Do wgrania na claude.ai: ${changed[*]/%/.zip}"
fi
