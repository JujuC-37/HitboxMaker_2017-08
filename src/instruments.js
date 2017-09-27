import {instrumentsList} from "./data.js";
import {renderLineOfTile, renderColumnOfTile} from "./map/map.js";
import {createHtmlElementImg} from "./functions.js";

// ------------------------------------------------------------------------------------------
// ---------------------------------------- HTML List ---------------------------------------
// ------------------------------------------------------------------------------------------

// create html content of instruments list (div, img) from instrumentsList object
export function createInstrumentsList() {
    let content = '';

    Object.keys(instrumentsList).forEach( key => {
        content += `<div class="selectableTool instruments" id="${instrumentsList[key].id}_toolsList">${createHtmlElementImg(instrumentsList[key].logo)}</div>`
    } );

    return content;
}

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Using ----------------------------------------
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
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------

// remove building on tile
function useBroom(tileDiv, tile, playingGame) {
    if(!tile.building) return;

    // update html
    tileDiv.innerHTML = '';

    // update data
    playingGame.constrBuildingAccount[tile.building.id]--;
    tile.building = null; // after decrementing in playingGame.constrBuildingAccount !!!

    // to test
    console.log('building removed !'); // to test
}