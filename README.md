# op-nhom1demo package

Add apm to your PATH: https://stackoverflow.com/questions/38138900/complete-guide-for-installing-apm-on-windows

Supported snippet languages: HTML, CSS, JAVASCRIPT

How to use "snippet":
1. go to test file
2. type one of following snippet on test file, then select the word
3. open command palette, search for "Op Nhom1demo: Owo" and run the command
4. magic appears!

Edit and run instruction:
1. It's recommended to uninstall this package first before making any edit.
2. Clone this repository (git clone https://github.com/AcezukyRockon/op-nhom1demo.git) at `C:\Users\<username>\.atom\packages`
3. Reload Atom and try to use package: Ctrl+Shift+I to open devtool > on Atom editor, Ctrl+Shift+P > Type and run "Op nhom1demo:Owo" > see "Owo" in the devtool console
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

Tags and versions:
- v0.0.3: Add HTML, CSS, JS snippet using snippet folder
- v0.0.2: Add snippet feature by using [atom API to select text and insert text](https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text/)
- v0.0.1: barebone main.js with very simple console log
