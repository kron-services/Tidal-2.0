import { createElement, User } from 'lucide';
import { App } from '../types';

const userIcon = createElement(User);

userIcon.setAttribute('stroke', '#FFF');

const UserApp: App = {
  meta: {
    name: 'User App',
    description: 'An app for creating and managing posts.',
    pkg: 'user-app',
    version: '1.0.0',
    icon: userIcon,
  },
  isOpen: false,
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening User App', data);
  },
};

export default UserApp;
