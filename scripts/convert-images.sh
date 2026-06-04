#!/usr/bin/env bash
# Regenerate WebP and AVIF variants from JPEG sources in images/about/.
# Requires: brew install webp libavif

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/images/about"

CWEBP="${CWEBP:-$(command -v cwebp || echo /opt/homebrew/bin/cwebp)}"
AVIFENC="${AVIFENC:-$(command -v avifenc || echo /opt/homebrew/bin/avifenc)}"

if [[ ! -x "$CWEBP" || ! -x "$AVIFENC" ]]; then
  echo "Install tools: brew install webp libavif" >&2
  exit 1
fi

shopt -s nullglob
for f in "$DIR"/*.jpg; do
  base="${f%.jpg}"
  echo "Converting $(basename "$f")..."
  "$CWEBP" -q 82 -m 6 "$f" -o "${base}.webp"
  "$AVIFENC" -s 6 --min 25 --max 35 "$f" "${base}.avif" >/dev/null
done

echo "Done. JPG: $(du -ch "$DIR"/*.jpg | tail -1 | cut -f1)"
echo "     WebP: $(du -ch "$DIR"/*.webp | tail -1 | cut -f1)"
echo "     AVIF: $(du -ch "$DIR"/*.avif | tail -1 | cut -f1)"
