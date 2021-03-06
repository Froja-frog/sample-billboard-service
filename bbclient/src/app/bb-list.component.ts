import { Component, OnInit } from '@angular/core';
import { BbService } from "./bb.service";

@Component({
  selector: 'app-bb-list',
  templateUrl: './bb-list.component.html',
  styleUrls: ['./bb-list.component.css']
})
export class BbListComponent implements OnInit {
  // @ts-ignore
  private bbs: Object[];
  constructor(private bbservice: BbService) { }
  ngOnInit(): void {
    this.bbservice.getBbs().subscribe((bbs: Object[]) => {this.bbs = bbs})
  };
}
