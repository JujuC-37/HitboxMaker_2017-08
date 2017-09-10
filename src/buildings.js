import {logosList, buildingsList} from "./data.js";

const $toolsList = document.getElementById('toolsList');

// ----- display -----
export function displayBuildingsList() {
    Object.keys(buildingsList).forEach( key => {
        $toolsList.innerHTML += `<div class="selectableTool building" id="${buildingsList[key].id}_toolsList">
                <img src="${buildingsList[key].logo.src}" alt="${buildingsList[key].logo.alt}" title="${buildingsList[key].logo.title}">
            </div>`
    } );
}
