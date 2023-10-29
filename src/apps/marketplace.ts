import { createElement, ShoppingBasket  } from 'lucide';
import { App } from '../types'; 

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
  },
};

export default PostApp;
