import { Component, OnInit } from '@angular/core';
import { IdService } from 'src/app/shared/services/id/id.service';

@Component({
  selector: 'project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {

  constructor( private readonly idService: IdService ) {

  }

  ngOnInit(): void {
  }

}
