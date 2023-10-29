import { createElement, Home } from 'lucide';
import { App } from '../types';

const postIcon = createElement(Home);

postIcon.setAttribute('stroke', '#FFF');

const UserApp: App = {
  meta: {
    name: 'Post App',
    description: 'An app for creating and managing posts.',
    pkg: 'post-app',
    version: '1.0.0',
    icon: postIcon,
  },
  isOpen: false,
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening Post App', data);
  },
};

export default UserApp;
