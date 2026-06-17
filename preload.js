/* eslint-disable @typescript-eslint/no-require-imports, no-undef */
const { contextBridge, ipcRenderer } = require('electron');
/* eslint-enable @typescript-eslint/no-require-imports, no-undef */

contextBridge.exposeInMainWorld('electronAPI', {
    minimizeWindow: () => ipcRenderer.send('window-minimize'),
    maximizeWindow: () => ipcRenderer.send('window-maximize'),
    closeWindow: () => ipcRenderer.send('window-close'),
});
