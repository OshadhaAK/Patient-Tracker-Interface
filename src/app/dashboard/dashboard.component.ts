import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userId;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.userId = id;
  }

}
