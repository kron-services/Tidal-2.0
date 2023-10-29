import { createElement, User } from 'lucide';
import { App } from '../types';

const userIcon = createElement(User); 

userIcon.setAttribute('stroke', '#FFF');

const PostApp: App = {
  meta: {
    name: 'Users App',
    description: 'An app for viewing all users to friend, or message them..',
    pkg: 'user-app',
    version: '1.0.0',
    icon: userIcon,
  },
  open: async (data?: any) => {
    console.log('Opening User App', data);
  },
};

export default PostApp;
