import "./map.css";
import {CityMap, Tile} from "../data.js";

// ------------------------------------------------------------------------------------------
// ---------------------------------------- Creation ----------------------------------------
// ------------------------------------------------------------------------------------------

// creates an object of type CityMap
export function createMap(nbLines, nbColumns, nbBackgrounds) {
    
    const tilesArray = createTilesArray(nbLines, nbColumns, nbBackgrounds);
    const cityMap = new CityMap(nbLines, nbColumns, nbBackgrounds, tilesArray);
    
    return cityMap;
}

// completes the empty section "map" in html
export function displayMap(cityMap) {
    const $map = document.getElementById('map');
    $map.innerHTML = createContentOfSectionHtmlMap(cityMap);
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------ Using -----------------------------------------
// ------------------------------------------------------------------------------------------

// returns line number of tile with id tile (string) in parameter
export function renderLineOfTile(tileID) {
    return tileID.split('_')[0].split('-')[1];
}

// returns column number of tile with id tile (string) in parameter
export function renderColumnOfTile(tileID) {
    return tileID.split('_')[1].split('-')[1];
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------

// creates an array 2 dimensions with objects of type Tile
function createTilesArray(nbLines, nbColumns, nbBackgrounds) {
    const tilesArray = Array(nbLines).fill(null);
    
    for(let line = 0; line < nbLines; line++) {
        tilesArray[line] = Array(nbColumns).fill(null);

        for(let col = 0; col < nbColumns; col++) {
            let numBackground = Math.trunc(Math.random()*100) % nbBackgrounds;
            tilesArray[line][col] = new Tile(numBackground, null);
        }
    }

    return tilesArray;
}

// creates a table to complete section "map" in html
function createContentOfSectionHtmlMap(cityMap) {
    let content = `<table>`;

    for(let line = 0; line < cityMap.nbLines; line++){
        content += `<tr>`;

        for(let col = 0; col < cityMap.nbColumns; col++) {
            content += `<td id="lin-${line}_col-${col}" class="tile backgroundTile_${cityMap.arrayTiles[line][col].background}"></td>`;
        }

        content += `</tr>`;        
    }

    return content;
}
