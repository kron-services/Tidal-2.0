import { createElement, Home  } from 'lucide';
import { App } from '../types'; 
import { windowManager } from '../wm';

const postIcon = createElement(Home); 

postIcon.setAttribute('stroke', '#FFF');

const PostApp: App = {
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
    if (PostApp.isOpen) {
      // If the app is already open, close it and remove the window
      windowManager.closeWindow('Post');
    } else {
      // If the app is not open, open it and create a window
      windowManager.createWindow('Post', 'This is the content of the Marketplace window.');
    }

    // Toggle the isOpen state
    PostApp.isOpen = !PostApp.isOpen;

  },
};

export default PostApp;
