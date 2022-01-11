'use babel';

import SelectListView from 'atom-select-list'

export default class Nhom1AtomSnippetView {

  constructor(serializedStatem, snippets, editor) {
    // // Create root element
    // this.element = document.createElement('div');
    // this.element.classList.add('nhom1-atom-snippet');
    //
    // // Create message element
    // const message = document.createElement('div');
    // message.textContent = 'The Nhom1AtomSnippet package is Alive! It\'s ALIVE!';
    // message.classList.add('message');
    // this.element.appendChild(message);

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

    // this.element = document.createElement('li');
    // this.element.classList.add('two-lines');
    //
    // const primaryLine = document.createElement('div');
    // primaryLine.classList.add('primary-line');
    // primaryLine.textContent = 'Hello';
    // this.element.appendChild(primaryLine);
    //
    // const secondaryLine = document.createElement('div')
    // secondaryLine.classList.add('secondary-line')
    // secondaryLine.textContent = 'World'
    // this.element.appendChild(secondaryLine)
  }

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
