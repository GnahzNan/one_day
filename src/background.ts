import { app, BrowserWindow, ipcMain } from 'electron'

// 等待Electron应用就绪后创建BrowserWindow窗口
app.whenReady().then(async () => {
    const win = await new BrowserWindow({
        width: 800,
        height: 600,

        // 配置窗口的WebPreferences选项，用于控制渲染进程的行为
        webPreferences: {
            nodeIntegration: true, // 启用Node.js集成
            contextIsolation: false, // 禁用上下文隔离
            webSecurity: false, // 禁用web安全策略
        },
        frame: false,
        transparent: true,
       /*  titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 30
         } */
   
    })
    
    // 开发者工具
    //win.webContents.openDevTools();


    // 根据命令行参数加载URL或本地文件
    if (process.argv[2]) {
        win.loadURL(process.argv[2])
    } else {
        win.loadFile('index.html')
    }

    win.on('blur', () => {
         //阻止默认的关闭操作
      });
     
    win.on('focus', () => {
    // 窗口获得焦点时，恢复渲染进程
    });

    ipcMain.on("min", (e) => win.minimize());
    ipcMain.on("window-maximize", function () {
        if (win.isFullScreen()) {
          win.setFullScreen(false);
        } else if (win.isMaximized()) {
          win.unmaximize();
        } else {
          win.maximize();
        }
      });
    ipcMain.on("close", (e) => win.close());
    ipcMain.on("reload", (e) => win.reload());
})



  
