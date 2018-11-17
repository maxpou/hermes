import trips from './data/trips.js'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4cG91IiwiYSI6ImNqZjVzM2dxbjBiMmQzM216b2dkbG55YTIifQ.m5y8bKQR5EXE6HHemyVRcw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-6.2603, 53.3498],
  zoom: 3
})

const mapBoxfeatures = trips.map(trip => {
  return {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        trip.from,
        trip.to,
      ]
    }
  }
})

const mapBoxRoutes = {
  "type": "FeatureCollection",
  "features": mapBoxfeatures
}

map.on('load', () => {
  map.addSource('route', {
    "type": "geojson",
    "data": mapBoxRoutes
  })

  map.addLayer({
    "id": "route",
    "source": "route",
    "type": "line",
    "paint": {
      "line-width": 2,
      "line-color": "#8A0808"
    }
  })
  console.log(map);
})