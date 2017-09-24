import "./style.css";
import {displayDataBar} from "./dataCityBar/dataCityBar.js";
import {createMap, displayMap} from "./map/map.js";
import {displayToolsBar} from "./toolsBar/toolsBar.js";
import {PlayingGame, instrumentsList, buildingsList} from "./data.js";
import {constructBuildingOnTile} from "./buildings.js";
import {useInstrument} from "./instruments.js";
import {initializeResources} from "./resources.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Initial ----------------------------------------
// ------------------------------------------------------------------------------------------
const cityMap = createMap(8, 12, 4);
const initalResources = initializeResources();
const playingGame = new PlayingGame(cityMap, initalResources);

displayDataBar(playingGame.resources);
displayToolsBar();
displayMap(cityMap);

console.log(playingGame); // to test

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
        if(tool.classList.contains('instruments')) {
            playingGame.selectedTool = instrumentsList[tool.id.split('_')[0]];
            playingGame.typeSelectedTool = 'instrument';
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
            console.log(playingGame); // to test
        }
        else if(playingGame.typeSelectedTool === 'instrument') {
            useInstrument(tile, playingGame);
            console.log(playingGame); // to test
        }
        displayDataBar(playingGame.resources); // to test update

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