import { App } from './App';

export class AppManager {
  private apps: App[] = [];

  constructor() {
    // Initialize your app manager with some default apps
    this.initDefaultApps();
  }

  private initDefaultApps() {
    // Add your default apps here
    const defaultApps: App[] = [
      {
        meta: {
          name: 'Sample App 1',
          description: 'This is a sample app.',
          pkg: 'sample-app-1',
          version: '1.0.0',
          icon: 'sample-app-1-icon.png',
        },
        open: async (data?: any) => {
          // Implement the app's behavior here
          console.log('Opening Sample App 1', data);
        },
      },
      // Add more default apps as needed
    ];

    this.apps.push(...defaultApps);
  }

  addApp(app: App) {
    this.apps.push(app);
  }

  openApp(pkg: string, data?: any) {
    const app = this.apps.find((a) => a.meta.pkg === pkg);
    if (app) {
      app.open(data);
    } else {
      console.error(`App with package name "${pkg}" not found.`);
    }
  }
}

// Usage
const appManager = new AppManager();

// Add a custom app
appManager.addApp({
  meta: {
    name: 'Custom App',
    description: 'This is a custom app.',
    pkg: 'custom-app',
    version: '1.0.0',
    icon: 'custom-app-icon.png',
  },
  open: async (data?: any) => {
    // Implement the custom app's behavior here
    console.log('Opening Custom App', data);
  },
});

// Open an app
appManager.openApp('sample-app-1', { someData: 'example' });
appManager.openApp('custom-app', { customData: 'test' });