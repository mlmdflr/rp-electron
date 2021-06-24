import enLocale from 'element-ui/lib/locale/lang/en'
const softlang = {
    welcome: "Welcome use the framework",
    buttonTips: "You can click buttons to experience",
    waitDataLoading: "Wait data loading",
    about: {
        system: "About system",
        language: "language：",
        languageValue: "English",
        currentPagePath: "current page path:",
        currentPageName: "current page name:",
        vueVersion: "Vue version:",
        electronVersion: "Electron version:",
        nodeVersion: "Node version:",
        systemPlatform: "system platform:",
        systemVersion: "system version:",
        systemArch: "system arch:"
    },
    buttons: {
        console: "Console",
        checkUpdate: "Check update",
        checkUpdate2: "Check update(plan 2)",
        startServer: "Start server",
        stopServer: "Stop server",
        viewMessage: "view message",
        openNewWindow: "Open new window",
        changeLanguage: "Change language"
    }
}
export const lang = Object.assign(softlang, enLocale)