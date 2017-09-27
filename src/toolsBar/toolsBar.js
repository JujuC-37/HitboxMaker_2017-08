import {createBuildingsList} from "../buildings.js";
import {createInstrumentsList} from "../instruments.js";
import "./toolsBar.css";


// ------------------------------------------------------------------------------------------
// ---------------------------------------- Display -----------------------------------------
// ------------------------------------------------------------------------------------------

// displays tools bar element 
export function displayToolsBar() {
    let $toolsList = document.getElementById('toolsList');
    $toolsList.innerHTML = createContentDivToolsList();
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------

// returns content of div toolsList
function createContentDivToolsList() {
    let content = '';
    content += createInstrumentsList();
    content += createBuildingsList();
    return content;
}
