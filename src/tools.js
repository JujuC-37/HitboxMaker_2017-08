const $toolsList = document.getElementById('toolsList');

const logos_tools = {
    broom: {src: require('./images/broom.svg'), alt: 'logo_broom', title:'Broom'}
};

// ----- display -----
export function displayToolsList() {
    Object.keys(logos_tools).forEach( key => {
        $toolsList.innerHTML += `<div class="selectableTool"><img src="${logos_tools[key].src}" alt="${logos_tools[key].alt}" title="${logos_tools[key].title}"</div>`
    } );
}