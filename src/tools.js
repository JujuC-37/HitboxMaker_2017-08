import {toolsList} from "./data.js";

const $toolsList = document.getElementById('toolsList');

// ----- display -----
export function displayToolsList() {
    Object.keys(toolsList).forEach( key => {
        $toolsList.innerHTML += `<div class="selectableTool">
                <img src="${toolsList[key].logo.src}" alt="${toolsList[key].logo.alt}" title="${toolsList[key].logo.title}"
            </div>`
    } );
}