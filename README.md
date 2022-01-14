# op-nhom1demo package

Add apm to your PATH: https://stackoverflow.com/questions/38138900/complete-guide-for-installing-apm-on-windows

Supported snippet languages: HTML, CSS, Javascript

How to use "snippet":
1. Go to test.js file
2.1 type one of following snippet on test file, then select the word, open command palette, press "Ctrl+Tab"
2.2 Press "~" to open the modal panel and click to the snippet panel to insert snippet in current cursor position
2.3 Go to Packages > op-nhom1demo > using the options same as step 2.1 and 2.2
3. Snippet appears!

Edit and run instruction:
1. It's recommended to uninstall this package first before making any edit.
2. Clone this repository (git clone https://github.com/AcezukyRockon/op-nhom1demo.git) at `C:\Users\<username>\.atom\packages`
3. Reload Atom. Based on file extension, select the keyword (list of words in main.js) and press ctrl+tab. Snippet will appear.
4. Make some edits
5. Reload Atom by open "Command Palette" (Ctrl+Shift+P) > Window Reload
6. See result

Push to Github, open command line in package's folder, type following:
1. git fetch
2. git status
3. git add .
4. git commit -m "update something"
5. git push

Publish your package to atom site:
1. Make sure you have requirements for publishing a package (package.json and git tag): https://flight-manual.atom.io/hacking-atom/sections/publishing/
2. Open command line, go to your package folder
3. You may need to connect with your atom account via apm command
4. Change git local user (remove --global tag): https://stackoverflow.com/questions/22844806/how-to-change-my-git-username-in-terminal
5. Type: git tag
6. Type "apm publish major/minor/patch" (see more at https://flight-manual.atom.io/hacking-atom/sections/publishing/)
7. Congrats!

Install package:
- Via website: https://atom.io/packages/op-nhom1demo
- Via Atom: File > Settings > Install > Search "op-nhom1demo" > Install
- Via apm command: apm install op-nhom1demo
- Check if package is installed: try to run package in step 3 "Edit and run instruction"

Uninstall package:
- Via Atom: File > Settings > Packages > Search "op-nhom1demo" > Uninstall
- Via apm command: apm uninstall op-nhom1demo

List of npm dependencies:
- atom-select-list: 0.7.2+
- cson: 7.20.0+
- fuzzaldrin: 2.1.0+
- season: 6.0.2+
- underscore-plus: 1.7.0+

Tags and versions:
- v0.1.0: Add "cson" package for reading .cson snippet file, add "atom-select-list package" for modal panel with click to use snippet (type "~" to open the modal panel)
- v0.0.4: Change command name and add key bind. To run old snippet, select word (list of words in main.js) and press Ctrl+Alt.
- v0.0.3: Add HTML, CSS, JS snippet using snippet folder
- v0.0.2: Add snippet feature by using [atom API to select text and insert text](https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text/)
- v0.0.1: barebone main.js with very simple console log
