'use babel';

import Nhom1AtomSnippet from '../lib/nhom1-atom-snippet';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Nhom1AtomSnippet', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('nhom1-atom-snippet');
  });

  describe('when the nhom1-atom-snippet:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.nhom1-atom-snippet')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'nhom1-atom-snippet:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.nhom1-atom-snippet')).toExist();

        let nhom1AtomSnippetElement = workspaceElement.querySelector('.nhom1-atom-snippet');
        expect(nhom1AtomSnippetElement).toExist();

        let nhom1AtomSnippetPanel = atom.workspace.panelForItem(nhom1AtomSnippetElement);
        expect(nhom1AtomSnippetPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'nhom1-atom-snippet:toggle');
        expect(nhom1AtomSnippetPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.nhom1-atom-snippet')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'nhom1-atom-snippet:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let nhom1AtomSnippetElement = workspaceElement.querySelector('.nhom1-atom-snippet');
        expect(nhom1AtomSnippetElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'nhom1-atom-snippet:toggle');
        expect(nhom1AtomSnippetElement).not.toBeVisible();
      });
    });
  });
});
