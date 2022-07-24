// @ts-check

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: true,
	    icon: 'icon.png'
    });

    win.loadFile('index.html');
    win.removeMenu();
    setTimeout(()=>{
        win.loadFile('./app/editor/editor.html');
    }, 8000);
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
