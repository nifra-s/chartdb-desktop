import { app, BrowserWindow, ipcMain } from 'electron';
import electronServe from 'electron-serve';
import path from 'path';
import { fileURLToPath } from 'url';

// 2. IMPORT DIRNAME FROM PATH
import { dirname } from 'path';

let win;

// Necesario para __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuramos electron-serve para que sirva la carpeta 'dist'
const loadURL = electronServe({ directory: path.join(__dirname, 'dist') });

async function createWindow() {
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 900,
        minHeight: 600,
        frame: false,
        titleBarStyle: 'hidden',
        icon: app.isPackaged
            ? path.join(process.resourcesPath, 'icon.ico')
            : path.join(__dirname, 'src/assets/logo-2.png'),
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
