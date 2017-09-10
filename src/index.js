import "./style.css";
import {displayDataBar} from "./dataCityBar/dataCityBar.js";
import {displayMap, createMap} from "./map/map.js";
import {displayToolsBar} from "./toolsBar/toolsBar.js";
import {PlayingGame, logosList, buildingsList, toolsList} from "./data.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Initial ----------------------------------------
// ------------------------------------------------------------------------------------------
const mapCity = createMap(8, 12, 4);
const playingGame = new PlayingGame(mapCity);

displayDataBar();
displayToolsBar();
displayMap(mapCity);


// ------------------------------------------------------------------------------------------
// ----------------------------------------- Events -----------------------------------------
// ------------------------------------------------------------------------------------------
let selectableToolsList = document.getElementsByClassName('selectableTool');
let mapTiles = document.getElementsByClassName('tile');

for(let tool of selectableToolsList) {

    // ----- Click -----
    tool.addEventListener('click', e => {
        e.stopPropagation();

        // update style
        for(let t of selectableToolsList) {
            t.classList.remove('selectedTool');
        }
        tool.classList.add('selectedTool');

        // save selected tool
        if(tool.classList.contains('tool')) {
            playingGame.selectedTool = toolsList[tool.id.split('_')[0]];
            playingGame.typeSelectedTool = 'tool';
        }
        else if (tool.classList.contains('building')) {
            playingGame.selectedTool = buildingsList[tool.id.split('_')[0]];
            playingGame.typeSelectedTool = 'building';
        }
        else
            return;
    });
}

for(let tile of mapTiles) {
    tile.addEventListener('click', e => {
        e.stopPropagation();

        if(!playingGame.selectedTool) return;
        
        if(playingGame.typeSelectedTool === 'building') {
            let building = playingGame.selectedTool;
            tile.innerHTML = `<img src="${building.logo.src}" alt="${building.logo.alt}" title="${building.logo.title}">`;
        }
    });
}

document.addEventListener('click', e => {
    // style : reset style for all tools
    for(let t of selectableToolsList) {
        t.classList.remove('selectedTool');
    }

    // reset selected tool properties of playingGame
    playingGame.selectedTool = null;
    playingGame.typeSelectedTool = null;
})