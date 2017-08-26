import "./map.css";

const $map = document.getElementById('map');

const mapProperties = {
    lines: 8,
    columns: 12,
    nbBackgrounds: 4
};

function createMap() {
    let contentMap = `<table>`;
    let linesArray = Array(mapProperties.lines).fill(1);
    let columnsArray = Array(mapProperties.columns).fill(1);

    contentMap = `<table>${linesArray
        .map( (_, l) => `
            <tr>
                ${columnsArray
                    .map( (_, c) => `<td class="tile "></td>`)
                    .join('')}
            </tr>`)
        .join('')}
        </table>`;

    contentMap += `</table>`;
    return contentMap;
}

function addBackgroundToTiles(nbBackgrounds) {
    let tilesList = $map.getElementsByClassName('tile');

    for(let tile of tilesList) {
        tile.classList.add(`backgroundTile_${Math.trunc(Math.random()*100) % nbBackgrounds}`);
    }
}

export function displayMap() {
    $map.innerHTML = createMap();
    addBackgroundToTiles(mapProperties.nbBackgrounds);
}