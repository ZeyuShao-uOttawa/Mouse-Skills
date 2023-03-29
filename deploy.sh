#!/usr/bin/env sh

set -e

npm run build

git add dist -f
git commit -m 'New Deployment'
git subtree push --prefix dist origin gh-pages
