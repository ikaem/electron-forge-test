import { contextBridge, ipcRenderer, app } from 'electron';

contextBridge.exposeInMainWorld('dialogs', {
  // any for now
  showOpenDialog: (method: string, config: any) => {
    console.log('in here');
    // return because this is promise // but then might be more appropriate
    ipcRenderer.send('show-open-dialog', method, config);
  },
  showMessageBox: (config: any) => {
    ipcRenderer.send('show-message-box-dialog', config);
  },
});

contextBridge.exposeInMainWorld('menus', {
  showButtonContextMenu: () => {
    ipcRenderer.send('show-button-context-menu');
  },
});

contextBridge.exposeInMainWorld('paths', {
  // this is cool, but maybe is not necessary always to send
  // getCurrentAppPath: () => {
  //   ipcRenderer.send('get-current-app-path');

  //   // this is intertesting
  //   // also, note just once, to get rid of it maybe?
  //   return new Promise((resolve) => {
  //     ipcRenderer.once('current-app-path', (e, path: string) => resolve(path));
  //   });
  // },

  getCurrentAppPath: () => {
    const responseFromIpcMainHandle = ipcRenderer.invoke(
      'get-current-app-path'
    );

    console.log({ responseFromIpcMainHandle });

    return responseFromIpcMainHandle;
  },
});

// we want to save the contents of the scratchpad to the disk

contextBridge.exposeInMainWorld('scratchpad', {
  saveContent: (content: string) => ipcRenderer.send('save-content', content),
  loadContent: () => ipcRenderer.invoke('load-content'),
});
