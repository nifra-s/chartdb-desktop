// src/components/title-bar/electron.d.ts
export interface IElectronAPI {
    minimizeWindow: () => void;
    maximizeWindow: () => void;
    closeWindow: () => void;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}
