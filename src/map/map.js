import "./map.css";
import {MapCity, Tile} from "../data.js";

// ------------------------------------------------------------------------------------------
// ---------------------------------------- Creation ----------------------------------------
// ------------------------------------------------------------------------------------------

// create an array 2 dimensions with objects of type Tile
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

// create an object of type CityMap
export function createMap(nbLines, nbColumns, nbBackgrounds) {
    
    const tilesArray = createTilesArray(nbLines, nbColumns, nbBackgrounds);
    const mapCity = new MapCity(nbLines, nbColumns, nbBackgrounds, tilesArray);
    
    return mapCity;
}

// create a table to complete section "map" in html
function createContentOfSectionHtmlMap(mapCity) {
    let content = `<table>`;

    for(let line = 0; line < mapCity.nbLines; line++){
        content += `<tr>`;

        for(let col = 0; col < mapCity.nbColumns; col++) {
            content += `<td id="lin-${line}_col-${col}" class="tile backgroundTile_${mapCity.arrayTiles[line][col].background}"></td>`;
        }

        content += `</tr>`;        
    }

    return content;
}

// complete the empty section "map" in html
export function displayMap(mapCity) {
    const $map = document.getElementById('map');
    $map.innerHTML = createContentOfSectionHtmlMap(mapCity);
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------ Using -----------------------------------------
// ------------------------------------------------------------------------------------------

//return line number of tile with id tile (string) in parameter
export function renderLineOfTile(tileID) {
    return tileID.split('_')[0].split('-')[1];
}

//return column number of tile with id tile (string) in parameter
export function renderColumnOfTile(tileID) {
    return tileID.split('_')[1].split('-')[1];
}
