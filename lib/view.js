'use babel';

import _ from 'underscore-plus'
import SelectListView from 'atom-select-list'
import { filter } from 'fuzzaldrin'

export default class Nhom1AtomSnippetView {

  constructor(serializedStatem, snippets, editor) {

    let snippetList = Object.values(snippets['.source.js']);

    const userSelectList = new SelectListView({
        items: snippetList,
        elementForItem: (snippets) => {
            const li = document.createElement('li')
            li.classList.add('two-lines')

            const primaryLine = document.createElement('div')
            primaryLine.classList.add('primary-line')
            primaryLine.textContent = snippets['prefix']
            li.appendChild(primaryLine)

            const secondaryLine = document.createElement('div')
            secondaryLine.classList.add('secondary-line')
            secondaryLine.textContent = snippets['description']
            li.appendChild(secondaryLine)

            return li
        },
        didConfirmSelection: (snippets) => {
          const editor2 = atom.workspace.getActiveTextEditor();
          if (editor2){
            editor2.insertText(snippets['body']);
          }
          editor.modalPanel.hide()
        },
        didConfirmEmptySelection: () => {
            editor.modalPanel.hide()
        },
        didCancelSelection: () => {
            editor.modalPanel.hide()
        }
    })
    this.element = userSelectList.element;
    this.element.classList.add('select-list');
    userSelectList.focus(); // Does not work
  }

  // populate () {
  //   let snippetList = Object.values(this.snippets['.source.js']);
  //   for (let snippets of snippetList) {
  //     snippet.searchText = _.compact([snippets['prefix'], snippets['body']).join(' ');
  //   }
  //   return this.selectListView.update({items: snippetList});
  // }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
}
