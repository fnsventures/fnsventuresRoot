#!/usr/bin/env node
/**
 * Assembles HTML pages from src/*.html and partials/*.html.
 * Usage: node scripts/build-html.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const INCLUDE_RE = /<!--\s*@include\s+([^\s]+)\s*-->/g;
const MAX_DEPTH = 12;

function resolveIncludes(content, depth = 0) {
  if (depth > MAX_DEPTH) {
    throw new Error("Include depth exceeded (possible circular include)");
  }
  return content.replace(INCLUDE_RE, (_, relPath) => {
    const fullPath = path.join(ROOT, relPath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Partial not found: ${relPath}`);
    }
    const partial = fs.readFileSync(fullPath, "utf8");
    return resolveIncludes(partial, depth + 1);
  });
}

function build() {
  if (!fs.existsSync(SRC)) {
    console.error("src/ directory not found");
    process.exit(1);
  }

  const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".html"));
  if (files.length === 0) {
    console.error("No .html files in src/");
    process.exit(1);
  }

  for (const file of files) {
    const raw = fs.readFileSync(path.join(SRC, file), "utf8");
    const built = resolveIncludes(raw);
    fs.writeFileSync(path.join(ROOT, file), built);
    console.log(`Built ${file}`);
  }
}

build();
