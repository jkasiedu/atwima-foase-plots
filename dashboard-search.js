
document.getElementById('searchInput').addEventListener('input', filterPlots);
document.getElementById('statusFilter').addEventListener('change', filterPlots);

function filterPlots() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;

  console.log("Filtering plots with search:", search, "and status:", status);
  // Add logic to filter plot layers here if using Leaflet or any GIS integration.
}
