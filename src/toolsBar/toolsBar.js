import {displayBuildingsList} from "../buildings.js";
import {displayToolsList} from "../tools.js";
import "./toolsBar.css";

export function displayToolsBar() {
    displayToolsList();
    displayBuildingsList();
}