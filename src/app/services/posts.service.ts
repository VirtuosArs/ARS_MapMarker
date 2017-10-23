import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
	constructor(private http: Http) {
		console.log("Post initialized...");
		
    }

    getPosts(){
    	return this.http.get('http://dev.tripininc.in:3000/api/v1/locations')
    		.map(res => res.json());
    }
}