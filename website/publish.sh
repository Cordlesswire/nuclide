#!/bin/bash

# Copyright (c) 2015-present, Facebook, Inc.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree. An additional grant
# of patent rights can be found in the PATENTS file in the same directory.

set -e

# Start in website/ even if run from root directory
cd "$(dirname "$0")"

cd ../../nuclide-gh-pages
git checkout -- .
git clean -dfx
git fetch
git rebase
rm -Rf *
cd ../nuclide/website
node server/generate.js
cp -R build/nuclide/* ../../nuclide-gh-pages/
rm -Rf build/
cd ../../nuclide-gh-pages
git status
git add -A .
if ! git diff-index --quiet HEAD --; then
  git commit -m "update website"
  git push origin gh-pages
fi
cd ../nuclide/website
