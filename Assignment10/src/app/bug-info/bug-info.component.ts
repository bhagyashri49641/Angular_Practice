import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})


export class BugInfoComponent implements OnInit {
  model: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
  }
}
