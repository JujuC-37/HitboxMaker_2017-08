import "./menuButtons.css";
import {displayMapInPause} from "../map/map.js";
import {logosList, buttonsList} from "../data.js";
import {createHtmlElementImg} from "../functions.js";

// ------------------------------------------------------------------------------------------
// ----------------------------------------- Display ----------------------------------------
// ------------------------------------------------------------------------------------------

// displays html content of buttons in menu
export function displayButtonsMenu() {
    const $menuButtons = document.getElementById('menuButtons');
    let content = '';

    Object.keys(buttonsList).forEach( key => {
        content += `<div class="menuButton" id="${buttonsList[key].id}">${createHtmlElementImg(buttonsList[key].logo)}</div>`;
    })

    $menuButtons.innerHTML = content;
}

// calls function relative to parameter
export function useMenuButton(idButton, playingGame) {
    switch(idButton) {
        // case 'playButton':
        //         usePlayButton();
        //         break;
        case 'pauseButton':
                usePauseButton(playingGame);
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
    console.log('playButton'); // to test
}

function usePauseButton(playingGame) {
    playingGame.inPause = !playingGame.inPause;
    displayMapInPause(playingGame.inPause);

    console.log('pauseButton', playingGame.inPause); // to test
}

function useStopButton() {
    console.log('stopButton'); // to test
}