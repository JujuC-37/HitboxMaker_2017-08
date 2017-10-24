import {renderLineOfTile, renderColumnOfTile} from "./map/map.js";
import {buildingsList} from "./data.js";
import {updateResourcesAfterConstruction} from "./resources.js";
import {createHtmlElementImg} from "./functions.js";


// ------------------------------------------------------------------------------------------
// ---------------------------------------- HTML List ---------------------------------------
// ------------------------------------------------------------------------------------------

// creates html content of buildings list (div, img) from buildingsList object
export function createBuildingsList() {
    let content = '';

    Object.keys(buildingsList).forEach( key => {
        content += `<div class="selectableTool building" id="${buildingsList[key].id}_toolsList">${createHtmlElementImg(buildingsList[key].logo)}</div>`;
    } );
    
    return content;
}

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Using ------------------------------------------
// ------------------------------------------------------------------------------------------

// constructs building on tile (parameters) with applyConstruction function if validated verification
export function constructBuildingOnTile(tileDiv, playingGame) {
    let lineTile = renderLineOfTile(tileDiv.id);
    let columnTile = renderColumnOfTile(tileDiv.id);
    let tileChosen = playingGame.cityMap.arrayTiles[lineTile][columnTile];
    
    if(!tileChosen.building)
        applyConstruction(tileDiv, tileChosen, playingGame);
    else
        console.log('tile is not empty...');
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------

// adds building to the tile (parameters) : update data, html content
function applyConstruction(tileDiv, tile, playingGame) {
    let buildingChosen = playingGame.selectedTool;
    tile.building = buildingChosen;
    
    // update data
    if(playingGame.constrBuildingAccount[buildingChosen.id])
        playingGame.constrBuildingAccount[buildingChosen.id] += 1;
    else
        playingGame.constrBuildingAccount[buildingChosen.id] = 1;

    updateResourcesAfterConstruction(playingGame);

    // update html
    tileDiv.innerHTML = createHtmlElementImg(buildingChosen.logo);
}