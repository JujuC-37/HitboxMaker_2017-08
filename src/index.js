import "./style.css";
import "./dataCityBar/dataCityBar.js";
import {displayMap} from "./map/map.js";
import {displayToolsBar} from "./toolsBar/toolsBar.js";

displayToolsBar();
displayMap();

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Events -----------------------------------------
// ------------------------------------------------------------------------------------------
let selectableToolsList = document.getElementsByClassName('selectableTool');

for(let tool of selectableToolsList) {

    // ----- Click -----
    tool.addEventListener('click', e => {
        e.stopPropagation();

        // style : reset style for all tools
        for(let t of selectableToolsList) {
            t.classList.remove('selectedTool');
        }
        // style : add style for selected tool
        tool.classList.add('selectedTool');
    });
}

document.addEventListener('click', e => {
    // style : reset style for all tools
    for(let t of selectableToolsList) {
        t.classList.remove('selectedTool');
    }
})