import { App } from './types'; // Corrected import statement
import { AppManager } from './AppManager';

// Initialize your AppManager
const appManager = new AppManager();

// Add a custom app (set the isCustom flag to true)
// appManager.addApp({
//   meta: {
//     name: 'Custom App',
//     description: 'This is a custom app.',
//     pkg: 'custom-app',
//     version: '1.0.0',
//     icon: 'custom-app-icon.png',
//   },
//   open: async (data?: any) => {
//     console.log('Opening Custom App', data);
//   },
// }, true);

// Render the sidebar with default apps only
const sidebar = document.getElementById('sidebar'); // Replace 'sidebar' with your actual sidebar element's ID

if (sidebar) {
  sidebar.innerHTML = '<img src="src/assets/images/tidal.svg" alt="Tidal" class="">'; // Clear any existing content

  // Filter apps to get default apps (excluding custom apps)
  const defaultApps: App[] = appManager.getApps().filter((app) => !app.isCustom);

  // Create and append links for each default app
  defaultApps.forEach((app) => {
    const appLink = document.createElement('button');
    appLink.innerText = app.meta.name;
    sidebar.appendChild(appLink);
  });
}
