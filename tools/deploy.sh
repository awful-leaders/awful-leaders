#!/usr/bin/env bash

set -e
set -o xtrace

rm -rf out/

yarn build

git checkout gh-pages

cp -R out/* ./

rm -rf *.txt

git status

echo "
Complete the following steps manually:
  1. Verify all changes with python3 -m http.server
  2. Commit changes
  3. Push to remote gh-pages branch
"

