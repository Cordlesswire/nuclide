'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import {
  activateAllPackages,
  copyMercurialFixture,
  deactivateAllPackages,
} from '../pkg/nuclide/integration-test-helpers';

describe('Blame context menu integration test', () => {
  it('has show blame option in the context menu', () => {
    waitsForPromise({timeout: 240000}, async () => {
      // Allow jasmine to interact with the DOM.
      jasmine.attachToDOM(atom.views.getView(atom.workspace));
      // Activate atom packages.
      await activateAllPackages();
      // Copy mercurial project to temporary directory.
      const repoPath = await copyMercurialFixture('hg_repo_1', __dirname);
      // Add this directory as a new project in atom.
      atom.project.setPaths([repoPath]);
      // Check that context menu has 'show blame'
      const inMenu = atom.contextMenu.itemSets.some(itemSet => itemSet.items.some(
        item => item.command === 'nuclide-blame:show-blame',
      ));
      expect(inMenu).toBe(true);
      deactivateAllPackages();
    });
  });
});
