import React from 'react';
import './TitleBar.css';

export default function TitleBar() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const handleMinimize = () => (window as any).electronAPI?.minimizeWindow();
    const handleMaximize = () => (window as any).electronAPI?.maximizeWindow();
    const handleClose = () => (window as any).electronAPI?.closeWindow();
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return (
        <div className="window-controls">
            <button
                className="control-btn"
                onClick={handleMinimize}
                aria-label="Minimize"
            >
                <span>—</span>
            </button>
            <button
                className="control-btn"
                onClick={handleMaximize}
                aria-label="Maximize"
            >
                <span>❑</span>
            </button>
            <button
                className="control-btn close-style"
                onClick={handleClose}
                aria-label="Close"
            >
                <span>✕</span>
            </button>
        </div>
    );
}
