import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public userId;
  constructor(private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.userId = id;
    console.log(this.userId);
    localStorage.setItem('id', this.userId);
  }

  back(){
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/dashboard', {id: selectedId}],{relativeTo: this.route});
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'],{relativeTo: this.route});
  }
}
