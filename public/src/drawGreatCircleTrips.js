export default function drawGreatCircleTrips(map, trips) {
  const mapBoxfeatures = trips.map(trip => {
    const start = turf.point(trip.from);
    const end = turf.point(trip.to);
  
    const greatCircle = turf.greatCircle(start, end);
    return greatCircle;
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
  })
}