// @ts-check

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        title: "Storybook ALPHA",
        frame: true,
    });

    //win.loadFile('index.html');
    win.removeMenu();
    //setTimeout(()=>{
        win.loadFile('./app/editor/editor.html');
    //}, 5000);
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});