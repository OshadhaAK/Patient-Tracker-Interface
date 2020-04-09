import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuarantineeService } from '../services/quarantinee.service';
import { MouseEvent, MarkerManager } from "@agm/core";
import { makeBindingParser } from '@angular/compiler';


interface marker {
  lat: number;
  lng: number;
  
}

@Component({
  selector: 'app-view-quarantinees',
  templateUrl: './view-quarantinees.component.html',
  styleUrls: ['./view-quarantinees.component.css']
})
export class ViewQuarantineesComponent implements OnInit {
  indexExpanded: number = -1;
  panelOpenState = false;
  quarantineName: any;
  location: any;
  startDate: any;
  endDate: any;
  status: any;
  quarantinees: any;
  hasMoved: any;
  // google maps zoom level
  zoom: number = 8;
  marks: any;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  /* mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  } */

  /* markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  } */

  markers: marker[] = [];
  constructor(private router: Router, private quarantineeService: QuarantineeService ) { 

   


  }

  ngOnInit() {
    
  }

  search(id){
    this.quarantineeService.filterQuarantinees(id).subscribe((data: any) => {
      this.quarantinees = data; 
      console.log("quarantinees",this.quarantinees);
    });
  }

  getLocations(i){
    
    /* this.markers.push({lat: 51.673858, lng:  8.815982}); */
   /*  console.log("markser",this.markers) */
    /* console.log(this.quarantinees[i].band) */
    this.indexExpanded = i == this.indexExpanded ? -1 : i;
    console.log(i);
      
        let marks = [];
        this.quarantineeService.getLocations(this.quarantinees[i].band).subscribe((data: any) => {
          
          data[0].location.forEach(function (value) {
            const location = value.split(";");
            
              var points = { 
                lat:Number(location[0]), 
                lng:Number(location[1])
            };
              marks.push(points);
          
          });
          
        
        });
        
        this.markers = marks;
       

    
    console.log(this.quarantinees)
  }

}
