export class WindowManager {
  private windows: HTMLDivElement[] = [];
  private container: HTMLDivElement;

  constructor() {
    this.container = document.getElementById(
      "window-container"
    ) as HTMLDivElement;
  }

  createWindow(title: string, content: string): void {
    const windowDiv = document.createElement("div");
    windowDiv.className = "window";
    windowDiv.innerHTML = `
          <div class="title-bar">${title}</div>
          <div class="window-content">${content}</div>
      `;

    this.container.appendChild(windowDiv);
    this.windows.push(windowDiv);
  }

  closeWindow(title: string): void {
    const windowIndex = this.windows.findIndex((window) => window.querySelector('.title-bar')?.textContent === title);
    if (windowIndex !== -1) {
      this.windows[windowIndex].remove();
      this.windows.splice(windowIndex, 1);
    }
  }
}

export const windowManager = new WindowManager();
