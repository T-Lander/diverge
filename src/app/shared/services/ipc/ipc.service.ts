import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  private ipc: IpcRenderer | undefined = void 0;

  constructor() {
    // Get the ipc renderer
    if(window.require) {
      try {
        this.ipc = window.require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
     console.warn('Could not load ipc renderer.')
    }
  }

  // Close the current window
  public minimizeWindow(): void {
    if(!this.ipc) {
      return;
    }
    this.ipc.send('minimizeWindow');
  }

    // Close the current window
  public toggleWindow(): void {
    if(!this.ipc) {
      return;
    }
    this.ipc.send('toggleWindow');
  }

  // Close the current window
  public closeWindow(): void {
    if(!this.ipc) {
      return;
    }
    this.ipc.send('closeWindow');
  }

}
