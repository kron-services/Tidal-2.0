"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppManager = void 0;
class AppManager {
    constructor() {
        this.apps = [];

        this.initDefaultApps();
    }
    initDefaultApps() {

        const defaultApps = [
            {
                meta: {
                    name: 'Sample App 1',
                    description: 'This is a sample app.',
                    pkg: 'sample-app-1',
                    version: '1.0.0',
                    icon: 'sample-app-1-icon.png',
                },
                open: (data) => __awaiter(this, void 0, void 0, function* () {

                    console.log('Opening Sample App 1', data);
                }),
            },

        ];
        this.apps.push(...defaultApps);
    }
    addApp(app) {
        this.apps.push(app);
    }
    openApp(pkg, data) {
        const app = this.apps.find((a) => a.meta.pkg === pkg);
        if (app) {
            app.open(data);
        }
        else {
            console.error(`App with package name "${pkg}" not found.`);
        }
    }
}
exports.AppManager = AppManager;

const appManager = new AppManager();

appManager.addApp({
    meta: {
        name: 'Custom App',
        description: 'This is a custom app.',
        pkg: 'custom-app',
        version: '1.0.0',
        icon: 'custom-app-icon.png',
    },
    open: (data) => __awaiter(void 0, void 0, void 0, function* () {

        console.log('Opening Custom App', data);
    }),
});

appManager.openApp('sample-app-1', { someData: 'example' });
appManager.openApp('custom-app', { customData: 'test' });
