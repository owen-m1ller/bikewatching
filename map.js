// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiZHl2bSIsImEiOiJjbWFyYW9pdTUwOThuMnJweXYwNHhsbWJ6In0.-tNNDDJ3FjlckGKHemHshw';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
//   style: 'mapbox://styles/mapbox/streets-v12',
  style: 'mapbox://styles/dyvm/cmarb5z6i01g401sp4uxq1iwa', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});