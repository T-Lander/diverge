import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Font awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Shared components
import { TitlebarComponent } from './shared/components/titlebar/titlebar.component';

// Shared services

// Modules
import { ProjectManagerModule } from './modules/project-manager/project-manager.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { IpcService } from './shared/services/ipc/ipc.service';
import { ProjectService } from './shared/services/project/project.service';


@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProjectManagerModule,
    WorkspaceModule,
  ],
  providers: [IpcService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private readonly library : FaIconLibrary ) {
    library.addIconPacks( fas, far );
  }
}
