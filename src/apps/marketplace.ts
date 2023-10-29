import { createElement, ShoppingBasket  } from 'lucide';
import { App } from '../types'; 
import { windowManager } from '../wm';

const marketIcon = createElement(ShoppingBasket); 

marketIcon.setAttribute('stroke', '#FFF');

const Marketplace: App = {
  meta: {
    name: 'Marketplace',
    description: 'Download community apps',
    pkg: 'marketplace',
    version: '1.0.0',
    icon: marketIcon,
  },
  isOpen: false,
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening Marketplace App', data);
    if (Marketplace.isOpen) {
      // If the app is already open, close it and remove the window
      windowManager.closeWindow('Marketplace');
    } else {
      // If the app is not open, open it and create a window
      windowManager.createWindow('Marketplace', 'This is the content of the Marketplace window.');
    }

    // Toggle the isOpen state
    Marketplace.isOpen = !Marketplace.isOpen;
  },
};

export default Marketplace;
