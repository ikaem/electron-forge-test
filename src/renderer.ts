/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import './index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './styles/main.scss';
import './index';
// import './index.css';
import { ipcRenderer } from 'electron';
// import electron from 'electron';

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

export const showOpenDialog = () => {
  //@ts-ignore
  dialogs.showOpenDialog('showOpenDialog', {
    title: 'Select a file',
    buttonLabel: 'This one will do',
    // this is just waht we will allow to do to the dialog
    properties: ['openFile'],
  });
};

export const showMessageBox = () => {
  //@ts-ignore
  dialogs.showMessageBox({
    type: 'none',
    title: 'No title',
    message: 'Message box',
  });
};

export const showButtonContextMenu = () => {
  // this does not work
  // ipcRenderer.send('show-button-context-menu');
  //@ts-ignore
  // dialogs.showMessageBox({
  //   type: 'none',
  //   title: 'No title',
  //   message: 'Message box',
  // });
  menus.showButtonContextMenu();
};

// ipcRenderer.send('show-button-context-menu');

// export

export const getCurrentAppPath = async () => {
  //@ts-ignore
  const res: string = await paths.getCurrentAppPath();
  console.log(res);

  return res;
};

export const updateScratchpad = async (newValue: string) => {
  //@ts-ignore
  scratchpad.saveContent(newValue);
};

export const loadScratchpad = async () => {
  //@ts-ignore
  const what = await scratchpad.loadContent();

  console.log('what', what);

  return what;
};
