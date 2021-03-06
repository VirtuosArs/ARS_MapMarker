import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MarkerService } from '../services/marker.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MarkerService, PostsService]
})
export class HomeComponent extends AppComponent implements OnInit {

  constructor(public _markerService: MarkerService, public postsservice: PostsService){
    super(_markerService, postsservice);
  }

  ngOnInit() {
    //this.markers = this._markerService.getMarkers();
  }

}

//Marker Type
interface marker{
	name: string;
	lat: number;
	lng: number;
	draggable: boolean;
}