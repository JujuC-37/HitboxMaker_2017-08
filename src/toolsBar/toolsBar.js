import {createBuildingsList} from "../buildings.js";
import {createInstrumentsList} from "../instruments.js";
import "./toolsBar.css";


// ------------------------------------------------------------------------------------------
// ---------------------------------------- Display -----------------------------------------
// ------------------------------------------------------------------------------------------

// display tools bar element from 
export function displayToolsBar() {
    let $toolsList = document.getElementById('toolsList');
    $toolsList.innerHTML = createContentDivToolsList();
}


// ------------------------------------------------------------------------------------------
// ----------------------------------------- Content ----------------------------------------
// ------------------------------------------------------------------------------------------

// return content of div toolsList
function createContentDivToolsList() {
    let content = '';
    content += createInstrumentsList();
    content += createBuildingsList();
    return content;
}