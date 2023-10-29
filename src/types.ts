export interface App {
  meta: {
    name: string;
    description: string;
    pkg: string;
    version: string;
    icon: SVGElement;
  };
  open: (data?: any) => Promise<void>;
  isCustom?: boolean; // Add this property
}

export interface WM {
  title: string
  icon: string
  width?: number
  height?: number
  canResize?: boolean
  minWidth?: number
  minHeight?: number
}
