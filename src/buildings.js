import {buildingsList} from "./data.js";
import {renderLineOfTile, renderColumnOfTile} from "./map/map.js";


// ------------------------------------------------------------------------------------------
// ---------------------------------------- HTML List ---------------------------------------
// ------------------------------------------------------------------------------------------

// create html content of buildings list (div, img) from buildingsList object
export function createBuildingsList() {
    let content = '';

    Object.keys(buildingsList).forEach( key => {
        content += `<div class="selectableTool building" id="${buildingsList[key].id}_toolsList">
                <img src="${buildingsList[key].logo.src}" alt="${buildingsList[key].logo.alt}" title="${buildingsList[key].logo.title}">
            </div>`
    } );

    return content;
}

// ------------------------------------------------------------------------------------------
// -------------------------------------- Construction --------------------------------------
// ------------------------------------------------------------------------------------------

// construct building on tile (parameters) with applyConstruction function if validated verification
export function constructBuildingOnTile(tileDiv, playingGame) {
    let lineTile = renderLineOfTile(tileDiv.id);
    let columnTile = renderColumnOfTile(tileDiv.id);
    let tileChosen = playingGame.cityMap.arrayTiles[lineTile][columnTile];
    
    if(!tileChosen.building)
        applyConstruction(tileDiv, tileChosen, playingGame);
    else
        console.log('tile is not empty...');
}

// add building to the tile (parameters) : update data, html content
function applyConstruction(tileDiv, tile, playingGame) {
    let buildingChosen = playingGame.selectedTool;
    tile.building = buildingChosen;
    
    // update data
    if(playingGame.constrBuildingAccount[buildingChosen.id])
        playingGame.constrBuildingAccount[buildingChosen.id] += 1;
    else
        playingGame.constrBuildingAccount[buildingChosen.id] = 1;

    console.log(playingGame.constrBuildingAccount); // to test

    // update html
    tileDiv.innerHTML = `<img src="${buildingChosen.logo.src}" alt="${buildingChosen.logo.alt}" title="${buildingChosen.logo.title}">`;
}