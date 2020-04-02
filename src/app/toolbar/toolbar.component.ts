import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public userId;
  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.userId = id;
  }

}
