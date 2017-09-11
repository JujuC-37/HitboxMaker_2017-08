import {toolsList} from "./data.js";
import {renderLineOfTile, renderColumnOfTile} from "./map/map.js";

// ------------------------------------------------------------------------------------------
// ---------------------------------------- HTML List ---------------------------------------
// ------------------------------------------------------------------------------------------

// create html content of tools list (div, img) from toolsList object
export function createToolsList() {
    let content = '';

    Object.keys(toolsList).forEach( key => {
        content += `<div class="selectableTool tool" id="${toolsList[key].id}_toolsList">
                <img src="${toolsList[key].logo.src}" alt="${toolsList[key].logo.alt}" title="${toolsList[key].logo.title}">
            </div>`
    } );

    return content;
}


// ------------------------------------------------------------------------------------------
// ----------------------------------------- General ----------------------------------------
// ------------------------------------------------------------------------------------------

// apply function according to chosen tool (in parameter playingGame) on chosen tile (in parameter tile)
export function useTool(tileDiv, playingGame) {
    let lineTile = renderLineOfTile(tileDiv.id);
    let columnTile = renderColumnOfTile(tileDiv.id);
    let tileChosen = playingGame.cityMap.arrayTiles[lineTile][columnTile];

    switch(playingGame.selectedTool.id) {
        case 'broom':
            useBroom(tileDiv, tileChosen, playingGame);
            break;
    }
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------ Using -----------------------------------------
// ------------------------------------------------------------------------------------------

// remove building on tile
function useBroom(tileDiv, tile, playingGame) {
    if(!tile.building) return;

    // update html
    tileDiv.innerHTML = '';

    // update data
    playingGame.constrBuildingAccount[tile.building.id]--;
    tile.building = null; // after decrementing !!!

    // test
    console.log('building removed !');
    console.log(playingGame.constrBuildingAccount);
}