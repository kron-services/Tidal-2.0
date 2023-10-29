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

  // Filter apps to get default apps (excluding custom apps)
  const defaultApps: App[] = appManager.getApps().filter((app) => !app.isCustom);

  // Create and append links for each default app
  defaultApps.forEach((app) => {
    if (app.meta.pkg !== "marketplace") {
      const appLink = document.createElement('button');
      appLink.onclick = () => {
        appManager.openApp(app.meta.pkg, { someData: 'example' });
      }
      appLink.classList.add('mb-4')
      appLink.appendChild(app.meta.icon)
      sidebar.appendChild(appLink); 
    } else {
      // <hr class="bg-white w-2 my-4 opacity-30">
      const appLink = document.createElement('button');
      appLink.onclick = () => {
        appManager.openApp(app.meta.pkg, { someData: 'example' });
      }
      const hr = document.createElement('hr')
      hr.classList.add('bg-white')
      hr.classList.add('w-2')
      hr.classList.add('mb-4')
      hr.classList.add('opacity-30')
      appLink.classList.add('mb-4')
      appLink.appendChild(app.meta.icon)
      sidebar.appendChild(hr); 
      sidebar.appendChild(appLink); 
    }
  });
}
