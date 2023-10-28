import { App } from '../types'; // Adjust the path as needed

const PostApp: App = {
  meta: {
    name: 'Post App',
    description: 'An app for creating and managing posts.',
    pkg: 'post-app',
    version: '1.0.0',
    icon: 'post-app-icon.png',
  },
  open: async (data?: any) => {
    // Add your app logic here
    console.log('Opening Post App', data);
  },
};

export default PostApp;
