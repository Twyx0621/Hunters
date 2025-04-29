function enterBuilding(building) {
  const screen = document.getElementById("building-screen");

  switch (building) {
    case 'main':
      screen.innerHTML = `<h2>Main Building</h2><p>Welcome to your hero house.</p>`;
      break;
    case 'treehouse':
      screen.innerHTML = `<h2>Treehouse</h2><p>Train your skills here.</p>`;
      break;
    case 'market':
      screen.innerHTML = `<h2>Market</h2><p>Buy and sell items here.</p>`;
      break;
    case 'blacksmith':
      screen.innerHTML = `<h2>Blacksmith</h2><p>Upgrade and craft your gear here.</p>`;
      break;
    case 'arena':
      screen.innerHTML = `<h2>Arena</h2><p>Fight other players here.</p>`;
      break;
    case 'map':
      renderWorldMap();
      break;
    default:
      screen.innerHTML = `<h2>Building</h2><p>Feature under construction.</p>`;
      break;
  }
}

function renderWorldMap() {
  const screen = document.getElementById("building-screen");
  screen.innerHTML = `
    <h2>World Map</h2>
    <p>Select a zone to explore.</p>
    <button onclick="returnToVillage()">⬅️ Back to Town</button>
  `;
}

function returnToVillage() {
  const screen = document.getElementById("building-screen");
  screen.innerHTML = "";
}
