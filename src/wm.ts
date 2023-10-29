import { createIcons, X, Maximize, Minimize } from 'lucide';

export class WindowManager {
  private windows: Record<string, HTMLDivElement> = {};
  private container: HTMLDivElement;

  constructor() {
    this.container = document.getElementById("window-container") as HTMLDivElement;
  }

  createWindow(title: string, content: string, isOpen: boolean = true): void {
    if (!this.windows[title]) {
      const windowDiv = document.createElement("div");
      windowDiv.classList.add("w-96", "h-64", "text-white", "shadow-md", "m-4", "bg-[#5271FF]", "rounded-lg", "relative");
  
      if (!isOpen) {
        windowDiv.classList.add("hidden");
      }
  
      windowDiv.innerHTML = `
          <div class="p-2 rounded-lg h-10">
            <div class="flex items-center w-full justify-center">
              <div class="text-md">${title}</div>
            </div>
            <div class="flex justify-end w-full h-10 top-0 absolute left-0 items-center pr-2">
            <button class="w-4 h-4"><i data-lucide="Minimize" class="w-4 h-4"></i></button>
            <button class="w-4 h-4 mx-2"><i data-lucide="Maximize" class="w-4 h-4"></i></button>
            <button class="w-4 h-4"><i data-lucide="x" class="w-4 h-4"></i></button>
            </div>
          </div>
          <div class="p-2 bg-[#2A323C] h-[calc(100%-2.5rem)] rounded-lg">${content}</div>
      `;
  
      this.container.appendChild(windowDiv);
      this.windows[title] = windowDiv;

      createIcons({
        icons: {
          X,
          Maximize,
          Minimize
        }
      });
    } else {
      // Window already exists, so toggle visibility
      const window = this.windows[title];
      window.classList.toggle("hidden");
    }
  }
  
  

  closeWindow(title: string): void {
    if (this.windows[title]) {
      const window = this.windows[title];
      window.classList.add("hidden");
    }
  }

  showWindow(title: string): void {
    if (this.windows[title]) {
      const window = this.windows[title];
      window.classList.remove("hidden");
    }
  }
}

export const windowManager = new WindowManager();
