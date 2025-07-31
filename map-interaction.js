
import L from 'https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js';

const map = L.map('map').setView([6.6869, -1.6245], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Placeholder marker
L.marker([6.6869, -1.6245]).addTo(map).bindPopup("Plot A1 - Available");
