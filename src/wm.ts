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
}

export const windowManager = new WindowManager();
