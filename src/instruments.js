import {instrumentsList} from "./data.js";
import {renderLineOfTile, renderColumnOfTile} from "./map/map.js";

// ------------------------------------------------------------------------------------------
// ---------------------------------------- HTML List ---------------------------------------
// ------------------------------------------------------------------------------------------

// create html content of instruments list (div, img) from instrumentsList object
export function createInstrumentsList() {
    let content = '';

    Object.keys(instrumentsList).forEach( key => {
        content += `<div class="selectableTool instruments" id="${instrumentsList[key].id}_toolsList">
                <img src="${instrumentsList[key].logo.src}" alt="${instrumentsList[key].logo.alt}" title="${instrumentsList[key].logo.title}">
            </div>`
    } );

    return content;
}


// ------------------------------------------------------------------------------------------
// ----------------------------------------- General ----------------------------------------
// ------------------------------------------------------------------------------------------

// apply function according to chosen instruments (in parameter playingGame) on chosen tile (in parameter tile)
export function useInstrument(tileDiv, playingGame) {
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