import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagerComponent } from './modules/project-manager/project-manager.component';
import { WorkspaceComponent } from './modules/workspace/workspace.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectManagerComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'workspace/:id', component: WorkspaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
