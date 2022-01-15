'use babel';

import Nhom1AtomSnippetView from './view';
import { CompositeDisposable } from 'atom';

const CSON = require('cson');
const path = require('path');

export default {

  nhom1AtomSnippetView: null,
  modalPanel: null,
  subscriptions: null,

  // ----- initial setup -----
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
      'op-nhom1demo:expand': () => this.expand(),
      'op-nhom1demo:toggle': () => this.toggle()
    }));
  },

  // ----- setup when run command on command palette -----
  expand() {
    //console.log('Owo');
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      //---------get keyword by selecting word----------
      const selection = editor.getSelectedText()
      console.log(selection);
      //---------find the snippet------------------------
      const filePath = path.join(atom.getConfigDirPath(), "packages", "op-nhom1demo", "snippets", "snippets.cson");
      let availableSnippets = CSON.load(filePath);
      let snippetList = Object.values(availableSnippets['.source.js']);
      for(let i = 0; i < snippetList.length; i++) {
        if (selection == snippetList[i]['prefix']){
          editor.insertText(snippetList[i]['body']);
          console.log(snippetList[i]['body']);
        }
      }
      switch (selection) {
        // ----- snippet for op-nhom1demo -----
        case "op-nhom1demo":
          editor.insertText(`Hello! This is Nhom 1 !`)
          break;
        default:
      }
    }
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
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

  // This function reads snippets from ./snippets/snippets.cson
  parseSnippets() {
      const filePath = path.join(atom.getConfigDirPath(), "packages", "op-nhom1demo", "snippets", "snippets.cson");
      // console.log(filePath); // Print file path
      let availableSnippets = CSON.load(filePath);
      return availableSnippets;
  }
};
