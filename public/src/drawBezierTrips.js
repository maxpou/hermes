import { createQuadraticBuilder } from './quadratic.js'
import { getPointControl } from './geo.js'

const SCALE = 15;
const CURVATURE = 1


function getTripFeature(trip) {
  const tripPointControl = getPointControl(trip.from, trip.to, CURVATURE)
  const points = createQuadraticBuilder()(trip.from, tripPointControl, trip.to, SCALE)

  return {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        ...points
      ]
    }
  }
}



export default function drawGreatCircleTrips(map, trips) {
  const tripFeatures = trips.map(getTripFeature)

  const geojson = {
    "type": "FeatureCollection",
    "features": [...tripFeatures]
  };


  map.on('load', function () {
    map.addLayer({
      'id': 'line',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': geojson
      },
      'paint': {
        'line-color': '#ed6498',
        'line-width': 5,
        'line-opacity': .8
      }
    });
  });
}