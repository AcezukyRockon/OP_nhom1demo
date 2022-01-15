# op-nhom1demo package

[Add apm to your PATH](https://stackoverflow.com/questions/38138900/complete-guide-for-installing-apm-on-windows)

**Supported snippet languages:** HTML, CSS, Javascript

**How to use "snippet":**
1. Go to `test.js` file
2. Do one of the following:
- Type one of the `case` in switch-case trong file `main.js`, select word, open command palette, press `Op Nhom1demo : Expand` to insert snippet
- Type one of following `prefix` snippet in `snippet.cson` on test file, then select the word, press `Ctrl+Tab`
- Press `~` to open the modal panel and click to the snippet panel to insert snippet in current cursor position
- Go to Packages > op-nhom1demo > using the options same as step 2.1 and 2.2
3. Snippet appears!

**Edit and run instruction:**
1. It's recommended to uninstall this package first before making any edit.
2. Clone this repository `git clone https://github.com/AcezukyRockon/op-nhom1demo.git` at `C:\Users\<username>\.atom\packages`
3. Reload Atom.
4. Make some edits
5. Reload Atom by open "Command Palette" (Ctrl+Shift+P) > Window Reload

**Push to Github**. Open command line in package's folder, type following:
1. git fetch
2. git status
3. git add .
4. git commit -m "update something"
5. git push

**Publish your package to atom site:**
1. [Make sure you have requirements for publishing a package](https://flight-manual.atom.io/hacking-atom/sections/publishing/) (package.json and git tag)
2. Open command line, go to your package folder
3. You may need to connect with your atom account via apm command
4. [Change git local user](https://stackoverflow.com/questions/22844806/how-to-change-my-git-username-in-terminal) (remove `--global tag`)
5. Type: `git tag`
6. Type `apm publish major/minor/patch` ([see more](https://flight-manual.atom.io/hacking-atom/sections/publishing/))
7. Congrats!

**Install package:**
- Via website: https://atom.io/packages/op-nhom1demo
- Via Atom: File > Settings > Install > Search "op-nhom1demo" > Install
- Via apm command: apm install op-nhom1demo

**Uninstall package:**
- Via Atom: File > Settings > Packages > Search "op-nhom1demo" > Uninstall
- Via apm command: apm uninstall op-nhom1demo

**List of npm dependencies:**
- atom-select-list: 0.7.2+
- cson: 7.20.0+
- fuzzaldrin: 2.1.0+
- season: 6.0.2+
- underscore-plus: 1.7.0+

**Tags and versions:**
- v0.1.1: Make some final edits for README
- v0.1.0: Add [cson](https://www.npmjs.com/package/cson) package for reading .cson snippet file, add [atom-select-list](https://github.com/atom/atom-select-list) package for modal panel with click to use snippet (type `~` to open the modal panel)
- v0.0.4: Change command name and add key bind. To run old snippet, select word (list of words in main.js) and press `Ctrl+Alt`.
- v0.0.3: Add HTML, CSS, JS snippet using snippet folder
- v0.0.2: Add snippet feature by using [atom API to select text and insert text](https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text/)
- v0.0.1: barebone main.js with very simple console log
