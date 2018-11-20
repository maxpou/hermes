import trips from './data/trips.js'
import createMap from './src/createMap.js'
import drawGreatCircleTrips from './src/drawGreatCircleLines.js'

const map = createMap();
drawGreatCircleTrips(map, trips)
