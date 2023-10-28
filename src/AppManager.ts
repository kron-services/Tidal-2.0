import { App } from './types';
import PostApp from './apps/test';

export class AppManager {
  private apps: App[] = [];

  constructor() {
    this.addDefaultApps()
  }

//   private initDefaultApps() {
//     const defaultApps: App[] = [
//       {
//         meta: {
//           name: 'Sample App 1',
//           description: 'This is a sample app.',
//           pkg: 'sample-app-1',
//           version: '1.0.0',
//           icon: 'sample-app-1-icon.png',
//         },
//         open: async (data?: any) => {
//           console.log('Opening Sample App 1', data);
//         },
//       },
//     ];

//     this.apps.push(...defaultApps);
//   }

  addApp(app: App, isCustom: boolean = false) {
    app.isCustom = isCustom; // Set the isCustom property
    this.apps.push(app);
  }

  getApps(): App[] {
    return this.apps; // Provide a method to get the list of apps
  }

  openApp(pkg: string, data?: any) {
    const app = this.apps.find((a) => a.meta.pkg === pkg);
    if (app) {
      app.open(data);
    } else {
      console.error(`App with package name "${pkg}" not found.`);
    }
  }

  private addDefaultApps() {
    const postApp = PostApp;
    this.addApp(postApp);
  }
}


const appManager = new AppManager();

appManager.addApp({
  meta: {
    name: 'Custom App',
    description: 'This is a custom app.',
    pkg: 'custom-app',
    version: '1.0.0',
    icon: 'custom-app-icon.png',
  },
  open: async (data?: any) => {
    console.log('Opening Custom App', data);
  },
});

// appManager.openApp('sample-app-1', { someData: 'example' });
appManager.openApp('custom-app', { customData: 'test' });