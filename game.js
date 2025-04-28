function enterBuilding(building) {
  const screen = document.getElementById("building-screen");
  screen.style.position = "absolute";
  screen.style.top = "10%";
  screen.style.left = "50%";
  screen.style.transform = "translateX(-50%)";
  screen.style.background = "rgba(255,255,255,0.95)";
  screen.style.border = "2px solid #333";
  screen.style.padding = "20px";
  screen.style.borderRadius = "12px";
  screen.style.zIndex = "100";
  screen.style.minWidth = "300px";
  screen.style.textAlign = "center";

  let content = "";

  switch (building) {
    case 'main':
      content = `
        <h2>Main Building</h2>
        <p>This is where your hero lives. Access stats, inventory, and gear here.</p>
        <button onclick="closeBuilding()">❌ Close</button>
      `;
      break;
    case 'treehouse':
      content = `
        <h2>Treehouse</h2>
        <p>Coming soon: Storage, quests, and pet system!</p>
        <button onclick="closeBuilding()">❌ Close</button>
      `;
      break;
    case 'market':
      content = `
        <h2>Market</h2>
        <p>You’ll be able to buy potions, weapons, armor and trade with others here.</p>
        <button onclick="closeBuilding()">❌ Close</button>
      `;
      break;
    case 'arena':
      content = `
        <h2>Arena</h2>
        <p>Fight against other players and climb the rankings!</p>
        <button onclick="closeBuilding()">❌ Close</button>
      `;
      break;
    case 'map':
      content = `
        <h2>World Map</h2>
        <p>Prepare for battle and explore the lands!</p>
        <button onclick="goToMap()">🌍 Enter Map</button>
        <br><br>
        <button onclick="closeBuilding()">❌ Cancel</button>
      `;
      break;
    default:
      content = `<h2>${building}</h2><p>This area is under construction.</p><button onclick="closeBuilding()">❌ Close</button>`;
      break;
  }

  screen.innerHTML = content;
}

function closeBuilding() {
  const screen = document.getElementById("building-screen");
  screen.innerHTML = "";
  screen.removeAttribute("style");
}

function goToMap() {
  alert("Loading World Map... (next feature)");
  closeBuilding();
}
