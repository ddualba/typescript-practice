// instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

// google api script needs to be added to html,
// then google will be a global variable
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {}

  addMarker(mappable: Mappable) {
    // add code
  }
}
