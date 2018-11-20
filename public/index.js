import trips from './data/trips.js'
import createMap from './src/createMap.js'
import drawBezierTrips from './src/drawBezierTrips.js'

const map = createMap()

drawBezierTrips(map, trips)
