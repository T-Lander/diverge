import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Project[];
  public currentProject: Project;

  constructor() { }

  createProject( name: string ): void {
    const newProject: Project = {
      id: 'dsd',
      name,
      content: [
        {
          id: '0',
          type: 'start',
        }
      ]
    }

    this.projects.push( newProject );

  }

  openProject( id ): void {

  }

}
