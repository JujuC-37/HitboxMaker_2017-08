import "./dataCityBar.css";
import {logosList} from "../data.js";
import {createHtmlElementImg} from "../functions.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Display ----------------------------------------
// ------------------------------------------------------------------------------------------

// displays html content of data bar
export function displayDataBar(resources) {
    const $dataBar = document.getElementById('dataBar');
    let content = '';

    Object.keys(resources).forEach( key => {
        content += `<div>${createHtmlElementImg(logosList[key])} ${resources[key]}</div>`;
    })
    
    $dataBar.innerHTML = content;
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------
