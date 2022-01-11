'use babel';

import Nhom1AtomSnippetView from './nhom1-atom-snippet-view';
import { CompositeDisposable } from 'atom';

const CSON = require('cson');
const path = require('path');

export default {

  nhom1AtomSnippetView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.nhom1AtomSnippetView = new Nhom1AtomSnippetView(state.nhom1AtomSnippetViewState, this.parseSnippets(), this);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.nhom1AtomSnippetView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'nhom1-atom-snippet:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.nhom1AtomSnippetView.destroy();
  },

  serialize() {
    return {
      nhom1AtomSnippetViewState: this.nhom1AtomSnippetView.serialize()
    };
  },

  toggle() {
    console.log('Nhom1AtomSnippet was toggled!');

    // let test = this.parseSnippets();
    // for (const i in test) {
    //     console.log(`${i}: ${test[i]}`);
    // }

    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

  // This function reads snippets from ./snippets/snippets.cson
  parseSnippets() {
      const filePath = path.join(atom.getConfigDirPath(), "packages", "nhom1-atom-snippet", "snippets", "snippets.cson");
      // console.log(filePath); // Print file path
      let availableSnippets = CSON.load(filePath);
      return availableSnippets;
  }

};
