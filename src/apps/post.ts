import { createElement, Home  } from 'lucide';
import { App } from '../types'; 

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
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening Post App', data);
  },
};

export default PostApp;
