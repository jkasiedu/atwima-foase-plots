# Atwima Foase Land Reservation Website

A simple land allocation system built with Node.js and Leaflet.

## Features
- View plots overlaid from a KML file
- Reserve available plots with name & phone
- Overlay layout image for visual reference
- Data stored locally in `server/plots.json`

## How to Run

1. Clone the repo:
```
git clone https://github.com/YOUR_USERNAME/atwima-foase-plots.git
cd atwima-foase-plots/server
```

2. Install dependencies:
```
npm install express cors body-parser
```

3. Start the server:
```
node server.js
```

4. Open the frontend:
Open `index.html` in your browser.

## File Structure
```
server/
├── server.js
├── plots.json
└── public/
    ├── layout.png
    └── FOASE_AFRANCHO final check.kml
```
