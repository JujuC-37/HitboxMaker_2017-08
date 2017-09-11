import "./style.css";
import {displayDataBar} from "./dataCityBar/dataCityBar.js";
import {displayMap, createMap} from "./map/map.js";
import {displayToolsBar} from "./toolsBar/toolsBar.js";
import {PlayingGame, logosList, buildingsList, toolsList} from "./data.js";
import {constructBuildingOnTile} from "./buildings.js";
import {useTool} from "./tools.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Initial ----------------------------------------
// ------------------------------------------------------------------------------------------
const mapCity = createMap(8, 12, 4);
const playingGame = new PlayingGame(mapCity);

displayDataBar();
displayToolsBar();
displayMap(mapCity);
console.log(playingGame);

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Events -----------------------------------------
// ------------------------------------------------------------------------------------------
let selectableToolsList = document.getElementsByClassName('selectableTool');
let mapTiles = document.getElementsByClassName('tile');

// ----- events for tools list -----
for(let tool of selectableToolsList) {

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

// ----- events for tile ----
for(let tile of mapTiles) {

    tile.addEventListener('click', e => {
        e.stopPropagation();

        if(!playingGame.selectedTool) return;
        
        if(playingGame.typeSelectedTool === 'building') {
            constructBuildingOnTile(tile, playingGame);
        }
        else if(playingGame.typeSelectedTool === 'tool') {
            useTool(tile, playingGame);
        }

    });
}

// ----- general -----
document.addEventListener('click', e => {
    // style : reset style for all tools
    for(let t of selectableToolsList) {
        t.classList.remove('selectedTool');
    }

    // reset selected tool properties of playingGame
    playingGame.selectedTool = null;
    playingGame.typeSelectedTool = null;
})