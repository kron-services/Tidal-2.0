export interface App {
    meta: {
      name: string;
      description: string;
      pkg: string;
      version: string;
      icon: string;
    };
    open: (data?: any) => Promise<void>;
  }