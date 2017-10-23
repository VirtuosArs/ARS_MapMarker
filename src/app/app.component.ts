import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { MarkerService } from './services/marker.service';
import { PostsService } from './services/posts.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  providers: [MarkerService, PostsService]
})

export class AppComponent {
  title = 'ARSMapApp';
  //Zoom level
  zoom: number = 14;
  //Start Position
  lat: number = 19.0268747;
  lng: number = 72.8553352;
  //Values
  markerName: string;
  markerLat: number;
  markerLng: number;
  markerDraggable: string;
  //Marker
  markers: marker[];
  posts: Post[];
  //private _markerService: MarkerService;

  constructor(public _markerService: MarkerService, public postsservice: PostsService){
    this.markers = this._markerService.getMarkers();
    this.postsservice.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  clickedMarker(marker: marker, index: number){
  	console.log("Inside Clicked Marker..")
  }

  mapClicked($event:any){
  	var newMarker = {
  		name: 'Untitled',
  		lat: $event.coords.lat,
  		lng: $event.coords.lng,
  		draggable: true
  	}

  	this.markers.push(newMarker);
    this._markerService.addMarker(newMarker); 
  }

  markerDragEnd(marker, $event:any){
  	console.log('dragEnd', marker, $event);
  	var updMarker = {
  		name: marker.name,
  		lat: marker.lat,
  		lng: marker.lng,
  		draggable: true
  	}

  	var newLat = $event.coords.lat;
  	var newLng = $event.coords.lng;
    var newName = "New name";

    this._markerService.updateMarker(updMarker, newLat, newLng, newName);
  }

  addMarker(){
  	console.log("Adding New Marker..");
  	if(this.markerDraggable == 'yes'){
  	 var isDraggable = true;
  	}
  	else {
  	 var isDraggable = false;
  	}

  	var newMarker = {
  		name: this.markerName,
  		lat: this.markerLat,
  		lng: this.markerLng,
  		draggable: isDraggable
  	}

  	this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  updateMarker(marker){
    console.log("Updating marker...");
  }

  removeMarker(marker){
    console.log("Deleting marker...");
    
    for(var i=0; i < this.markers.length; i++){
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i,1);
      }
    }

    this._markerService.removeMarker(marker);

  }

  openInfowindow(marker){
    
  }

  menuState:string = 'out';
 
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}

//Marker Type
interface marker{
	name: string;
	lat: number;
	lng: number;
	draggable: boolean;
}

//Post Type
interface Post{
  id: number;
  name: string;
  description: string;
  url: string;
  date: string;
}