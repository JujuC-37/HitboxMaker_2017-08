// ---------------------------------------------------------------------------------------
// --------------------------------------- General ---------------------------------------
// ---------------------------------------------------------------------------------------

export const mapProperties = {
    lines: 8,
    columns: 12,
    nbBackgrounds: 4
};

// ---------------------------------------------------------------------------------------
// --------------------------------------- Images ----------------------------------------
// ---------------------------------------------------------------------------------------

class Image {
    constructor(src, alt, title) {
        this.src = src;
        this.alt = alt;
        this.title = title;
    }
}

// ----- Buildings -----
const farmerLogo =      new Image(require('./images/farmer.svg'), 'logo_farmer', 'Farmer');
const woodcutterLogo =  new Image(require('./images/woodcutter.svg'), 'logo_woodcutter', 'Woodcutter');
const stonecutterLogo = new Image(require('./images/stonecutter.svg'), 'logo_stonecutter', 'Stonecutter');
const minerLogo =       new Image(require('./images/miner.svg'), 'logo_miner', 'Miner');
const townhallLogo =    new Image(require('./images/townhall.svg'), 'logo_townhall', 'Townhall');
const hospitalLogo =    new Image(require('./images/hospital.svg'), 'logo_hospital', 'Hospital');
const circusLogo =      new Image(require('./images/circus.svg'), 'logo_circus', 'Circus');
const innLogo =         new Image(require('./images/inn.svg'), 'logo_inn', 'Inn');
const watchTowerLogo =  new Image(require('./images/watchTower.svg'), 'logo_watchTower', 'Watch Tower');
const wishingWellLogo = new Image(require('./images/wishingWell.svg'), 'logo_wishingWell', 'Wishing Well');

// ----- Tools -----
const broomLogo = new Image(require('./images/broom.svg'), 'logo_broom', 'Broom');

export const logosList = {
    // a new building must be added in object buildingsList also
    farmer:      farmerLogo,
    woodcutter:  woodcutterLogo,
    stonecutter: stonecutterLogo,
    miner:       minerLogo,
    townhall:    townhallLogo,
    hospital:    hospitalLogo,
    circus:      circusLogo,
    inn:         innLogo,
    watchTower:  watchTowerLogo,
    wishingWell: wishingWellLogo,
    // a new tool must be added in object buildingsList also
    broom:       broomLogo
};

// ---------------------------------------------------------------------------------------
// -------------------------------------- Buildings --------------------------------------
// ---------------------------------------------------------------------------------------

class Building {
    constructor(id, name, descr, logo) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.logo = logo;
    }
}

const farmerObject =      new Building('farmer', logosList.farmer, 'Products food', logosList.farmer);
const woodcutterObject =  new Building('woodcutter', logosList.woodcutter, 'Products log', logosList.woodcutter);
const stonecutterObject = new Building('stonecutter', logosList.stonecutter, 'Products stone', logosList.stonecutter);
const minerObject =       new Building('miner', logosList.miner, 'Products iron', logosList.miner);
const townhallObject =    new Building('townhall', logosList.townhall, 'Indicates informations city', logosList.townhall);
const hospitalObject =    new Building('hospital', logosList.hospital, 'Provides care', logosList.hospital);
const circusObject =      new Building('circus', logosList.circus, 'Improves happiness', logosList.circus);
const innObject =         new Building('inn', logosList.inn, 'Improves happiness', logosList.inn);
const watchTowerObject =  new Building('watchTower', logosList.watchTower, 'Manages security', logosList.watchTower);
const wishingWellObject = new Building('wishingWell', logosList.wishingWell, 'Products water', logosList.wishingWell);

export const buildingsList = {
    // a new building must be added in object logosList also
    farmer:      farmerObject,
    woodcutter:  woodcutterObject,
    stonecutter: stonecutterObject,
    miner:       minerObject,
    townhall:    townhallObject,
    hospital:    hospitalObject,
    circus:      circusObject,
    inn:         innObject,
    watchTower:  watchTowerObject,
    wishingWell: wishingWellObject
}
// ---------------------------------------------------------------------------------------
// ---------------------------------------- Tools ----------------------------------------
// ---------------------------------------------------------------------------------------

class Tool {
    constructor(id, name, descr, logo) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.logo = logo;
    }
}

const broomObject = new Tool('broom', 'Broom', 'Remove building', logosList.broom);

export const toolsList = {
    broom: broomObject
};