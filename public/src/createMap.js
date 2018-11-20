function createMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWF4cG91IiwiYSI6ImNqZjVzM2dxbjBiMmQzM216b2dkbG55YTIifQ.m5y8bKQR5EXE6HHemyVRcw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-6.2603, 53.3498],
    pitch: 40,
    zoom: 3
  })
  
  // window.map = map
  return map
}

export default createMap;