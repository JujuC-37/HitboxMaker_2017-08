import {createBuildingsList} from "../buildings.js";
import {createToolsList} from "../tools.js";
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
    content += createToolsList();
    content += createBuildingsList();
    return content;
}