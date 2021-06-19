import { Component, OnInit } from '@angular/core';
import { IpcService } from '../../services/ipc/ipc.service';

@Component({
  selector: 'titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  public appTitle = 'Diverge';

  constructor( private readonly ipcService: IpcService ) { }

  ngOnInit(): void {
  }

  minimizeWindow(): void {
    this.ipcService.minimizeWindow();
  }

  toggleWindow(): void {
    this.ipcService.toggleWindow();
  }

  closeWindow(): void {
    this.ipcService.closeWindow();
  }

}
