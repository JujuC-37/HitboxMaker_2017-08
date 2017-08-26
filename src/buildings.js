const $toolsList = document.getElementById('toolsList');

const logos_buildings = {
    farm: {src: require('./images/farm.svg'), alt: 'logo_farm', title:'Farm'},
    woodcutter: {src: require('./images/woodcutter.svg'), alt: 'logo_woodcutter', title:'Woodcutter'},
    stonecutter: {src: require('./images/stonecutter.svg'), alt: 'logo_stonecutter', title:'Stonecutter'},
    mine: {src: require('./images/mine.svg'), alt: 'logo_mine', title:'Mine'},
    townhall: {src: require('./images/townhall.svg'), alt: 'logo_townhall', title:'Townhall'},
    hospital: {src: require('./images/hospital.svg'), alt: 'logo_hospital', title:'Hospital'},
    circus: {src: require('./images/circus.svg'), alt: 'logo_circus', title:'Circus'},
    inn: {src: require('./images/inn.svg'), alt: 'logo_inn', title:'Inn'},
    watchTower: {src: require('./images/watch_tower.svg'), alt: 'logo_watch_tower', title:'Watch Tower'},
    wishingWell: {src: require('./images/wishing_well.svg'), alt: 'logo_wishing_well', title:'Wishing Well'}
};

// ----- display -----
export function displayBuildingsList() {
    Object.keys(logos_buildings).forEach( key => {
        $toolsList.innerHTML += `<div class="selectableTool"><img src="${logos_buildings[key].src}" alt="${logos_buildings[key].alt}" title="${logos_buildings[key].title}"</div>`
    } );
}