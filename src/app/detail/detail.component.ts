import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MarkerService } from '../services/marker.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MarkerService, PostsService]
})
export class DetailComponent extends AppComponent implements OnInit {
  name: any;

  constructor(public _markerService: MarkerService, public postsservice: PostsService){
    super(_markerService, postsservice);
  }

  ngOnInit() {
  	//this.markers = this._markerService.getMarkers();
    //this.name = this.route.snapshot.params['name'];
    //console.log(this.name);
    
  }

}
