import "./menuButtons.css";
import {logosList, buttonsList} from "../data.js";
import {createHtmlElementImg} from "../functions.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Display ----------------------------------------
// ------------------------------------------------------------------------------------------

//displays html content of buttons in menu
export function displayButtonsMenu() {
    const $menuButtons = document.getElementById('menuButtons');
    let content = '';

    Object.keys(buttonsList).forEach( key => {
        content += `<div class="menuButton" id="${buttonsList[key].id}">${createHtmlElementImg(buttonsList[key].logo)}</div>`;
    })

    $menuButtons.innerHTML = content;
}

export function useMenuButton(idButton) {
    switch(idButton) {
        case 'playButton':
                usePlayButton();
                break;
        case 'pauseButton':
                usePauseButton();
                break;
        case 'stopButton':
                useStopButton();
                break;
        default:
            console.log('This button is not defined');
    }
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------ Local -----------------------------------------
// ------------------------------------------------------------------------------------------
function usePlayButton() {
    console.log('playButton');
}

function usePauseButton() {
    console.log('pauseButton');
}

function useStopButton() {
    console.log('stopButton');
}