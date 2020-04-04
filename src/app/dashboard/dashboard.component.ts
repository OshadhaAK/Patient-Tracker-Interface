import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: any;
  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.userId = id;
    
  }
  addNew(){
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/addquarantinee', {id: selectedId}],{relativeTo: this.route});

  }
  viewList(){
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/viewquarantinees', {id: selectedId}],{relativeTo: this.route});
  }
}
