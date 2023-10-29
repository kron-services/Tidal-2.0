import { createElement, ShoppingBasket  } from 'lucide';
import { App } from '../types'; 
import { windowManager } from '../wm';

const marketIcon = createElement(ShoppingBasket); 

marketIcon.setAttribute('stroke', '#FFF');

const PostApp: App = {
  meta: {
    name: 'Marketplace',
    description: 'Download community apps',
    pkg: 'marketplace',
    version: '1.0.0',
    icon: marketIcon,
  },
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening Marketplace App', data);
    windowManager.createWindow('Marketplace', 'This is the content of the Marketplace window.');
  },
};

export default PostApp;
