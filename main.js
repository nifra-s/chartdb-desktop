/* eslint-env node */
/* eslint-disable no-undef */

import { app, BrowserWindow, ipcMain } from 'electron';
import electronServe from 'electron-serve';
import path from 'path';
import { fileURLToPath } from 'url';

let win;

// Necesario para __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuramos electron-serve para que sirva la carpeta 'dist'
const loadURL = electronServe({ directory: path.join(__dirname, 'dist') });

async function createWindow() {
    win = new BrowserWindow({
        width: 1024,
        height: 768,

        minWidth: 900, // Prevents the window from being squeezed narrower than 800px
        minHeight: 600, // Prevents the window from being squeezed shorter than 600px
        frame: false, // 1. Destroys the default OS bar, name, and icon
        titleBarStyle: 'hidden', // Helps maintain window behaviors across platforms
        icon: path.join(__dirname, 'src/assets/logo-2.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    win.setMenu(null);

    // Cargar la app mediante el servidor interno
    await loadURL(win);
}

// 3. Handle the window control signals coming from your Webapp
ipcMain.on('window-minimize', () => {
    win.minimize();
});

ipcMain.on('window-maximize', () => {
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
});

ipcMain.on('window-close', () => {
    win.close();
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
