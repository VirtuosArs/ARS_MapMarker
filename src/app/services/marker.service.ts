import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init{
	constructor(){
		super();
		console.log("Marker service Initialized...");
		this.load(); //Load function in Init
	}

	getMarkers(){
		var markers = JSON.parse(localStorage.getItem('markers'));
		return markers;
	}

	addMarker(newMarker){
		//Fetch Markers
		var markers = JSON.parse(localStorage.getItem('markers'));
		//Push to array
		markers.push(newMarker);
		//Set localStorage markers again
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	updateMarker(marker, newLat, newLng, newName){
		//Fetch Markers
		var markers = JSON.parse(localStorage.getItem('markers'));
		for(var i=0; i < markers.length; i++){
			if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
				markers[i].lat = newLat;
				markers[i].lng = newLng;
				markers[i].name = newName;
			}
		}
		//Set localStorage markers again
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	removeMarker(marker){
		//Fetch Markers
		var markers = JSON.parse(localStorage.getItem('markers'));
		for(var i=0; i < markers.length; i++){
			if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
				markers.splice(i, 1);
			}
		}
		//Set localStorage markers again
		localStorage.setItem('markers', JSON.stringify(markers));
	}
}