export class Init{
	load(){
		if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
			console.log("No markers found ...Creating new markers");
			var markers = [
			  {
			  	name: 'Hotel City Pride',
			  	lat: 19.0169884,
			  	lng: 72.8475258,
				draggable: false
			  },
			  {
			  	name: 'Bawa Residency',
			  	lat: 19.0137553,
			  	lng: 72.8437213,
				draggable: false
			  },
			  {
			  	name: 'Pritam Group Of Hotels',
			  	lat: 19.016924,
			  	lng: 72.8459731,
				draggable: false
			  },
			  {
			  	name: 'Hotel Parklane',
			  	lat: 19.0159105,
			  	lng: 72.8428462,
				draggable: false
			  },
			  {
			  	name: 'Hotel New Shree Niwas',
			  	lat: 19.0293736,
			  	lng: 72.8467218,
				draggable: false
			  }
			];

			localStorage.setItem('markers', JSON.stringify(markers));
		}
		else{
			console.log("Loading markers...");
		}
	}
}