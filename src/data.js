// ---------------------------------------------------------------------------------------
// --------------------------------------- General ---------------------------------------
// ---------------------------------------------------------------------------------------
// here there are classes. Objects of each classes are declared below in this file

export class Tile {
    constructor(idBackground, building) {
        this.background = idBackground;
        this.building = building;
    }
}

export class CityMap {
    constructor(nbLines, nbColumns, nbBackgrounds, arrayTiles) {
        this.nbLines = nbLines;
        this.nbColumns = nbColumns;
        this.nbBackgrounds = nbBackgrounds;
        this.arrayTiles = arrayTiles;
    }
}

export class PlayingGame {
    constructor(cityMap, resources) {
        this.cityMap = cityMap;
        this.constrBuildingAccount = {}; // to count number of constructed building for each type building already used
        this.selectedTool = null;
        this.selectedTile = null;
        this.typeSelectedTool = null;
        this.actualResources = resources;
    }
}

export class ResourcesSet {
    constructor(food, log, stone, iron) {
        this.food = food;
        this.log = log;
        this.stone = stone;
        this.iron = iron;
        // a new resources must be added in object logosList also
    }
}

class Image {
    constructor(src, alt, title) {
        this.src = src;
        this.alt = alt;
        this.title = title;
    }
}

class Instrument {
    constructor(id, name, descr, logo) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.logo = logo;
    }
}

class Building {
    constructor(id, name, descr, logo, construction, production) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.logo = logo;
        this.constr = construction;
        this.prod = production;
    }
}

// here there are lists. Objects of each lists are declared below in this file


// ---------------------------------------------------------------------------------------
// --------------------------------------- Images ----------------------------------------
// ---------------------------------------------------------------------------------------

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
const wellLogo =        new Image(require('./images/well.svg'), 'logo_well', 'Wishing Well');

// ----- Instruments -----
const broomLogo = new Image(require('./images/broom.svg'), 'logo_broom', 'Broom');

// ----- Resources -----
const foodLogo =    new Image(require('./images/food.svg'), 'logo_food', 'Food');
const logLogo =     new Image(require('./images/log.svg'), 'logo_log', 'Log');
const stoneLogo =   new Image(require('./images/stone.svg'), 'logo_stone', 'Stone');
const ironLogo =    new Image(require('./images/iron.svg'), 'logo_iron', 'Iron');

export const logosList = {
    // a new building must be added in object buildingsList also
    farmer:     farmerLogo,
    woodcutter: woodcutterLogo,
    stonecutter: stonecutterLogo,
    miner:      minerLogo,
    townhall:   townhallLogo,
    hospital:   hospitalLogo,
    circus:     circusLogo,
    inn:        innLogo,
    watchTower: watchTowerLogo,
    well:       wellLogo,
    // a new instrument must be added in object instrumentsList also
    broom:      broomLogo,
    // a new resources must be added in class ResourcesSet also
    food:       foodLogo,
    log:        logLogo,
    stone:      stoneLogo,
    iron:       ironLogo
};


// ---------------------------------------------------------------------------------------
// -------------------------------------- Resources --------------------------------------
// ---------------------------------------------------------------------------------------

// values to adjust
const farmerConstr =        new ResourcesSet(0, 5, 0, 0);
const farmerProd =          new ResourcesSet(5, 0, 0, 0);

const woodcutterConstr =    new ResourcesSet(0, 3, 0, 0);
const woodcutterProd =      new ResourcesSet(0, 5, 0, 0);

const stonecutterConstr =   new ResourcesSet(0, 5, 0, 0);
const stonecutterProd =     new ResourcesSet(0, 0, 5, 0);

const minerConstr =         new ResourcesSet(0, 5, 5, 0);
const minerProd =           new ResourcesSet(0, 0, 0, 5);

const townhallConstr =      new ResourcesSet(0, 10, 10, 10);
const townhallProd =        new ResourcesSet(0, 0, 0, 0);

const hospitalConstr =      new ResourcesSet(0, 10, 10, 0);
const hospitalProd =        new ResourcesSet(0, 0, 0, 0);

const circusConstr =        new ResourcesSet(0, 5, 0, 5);
const circusProd =          new ResourcesSet(0, 0, 0, 0);

const innConstr =           new ResourcesSet(0, 5, 5, 0);
const innProd =             new ResourcesSet(0, 0, 0, 0);

const watchTowerConstr =    new ResourcesSet(0, 5, 0, 0);
const watchTowerProd =      new ResourcesSet(0, 0, 0, 0);

const wellConstr =          new ResourcesSet(0, 5, 5, 5);
const wellProd =            new ResourcesSet(5, 0, 0, 0);


// ---------------------------------------------------------------------------------------
// ------------------------------------- Instruments -------------------------------------
// ---------------------------------------------------------------------------------------
const broomObject = new Instrument('broom', 'Broom', 'Remove building', logosList.broom);

export const instrumentsList = {
    // a new instrument must be added in object logosList also
    broom: broomObject
};

// ---------------------------------------------------------------------------------------
// -------------------------------------- Buildings --------------------------------------
// ---------------------------------------------------------------------------------------

const farmerObject =      new Building('farmer', 'Farmer', 'Products food', logosList.farmer, farmerConstr, farmerProd);
const woodcutterObject =  new Building('woodcutter', 'Woodcutter', 'Products log', logosList.woodcutter, woodcutterConstr, woodcutterProd);
const stonecutterObject = new Building('stonecutter', 'Stonecutter', 'Products stone', logosList.stonecutter, stonecutterConstr, stonecutterProd);
const minerObject =       new Building('miner', 'Miner', 'Products iron', logosList.miner, minerConstr, minerProd);
const townhallObject =    new Building('townhall', 'Townhall', 'Indicates informations city', logosList.townhall, townhallConstr, townhallProd);
const hospitalObject =    new Building('hospital', 'Hospital', 'Provides care', logosList.hospital, hospitalConstr, hospitalProd);
const circusObject =      new Building('circus', 'Circus', 'Improves happiness', logosList.circus, circusConstr, circusProd);
const innObject =         new Building('inn', 'Inn', 'Improves happiness', logosList.inn, innConstr, innProd);
const watchTowerObject =  new Building('watchTower', 'Watchtower', 'Manages security', logosList.watchTower, watchTowerConstr, watchTowerProd);
const wellObject =        new Building('well', 'Well', 'Products water', logosList.well, wellConstr, wellProd);

export const buildingsList = {
    // a new building must be added in object logosList also
    farmer:     farmerObject,
    woodcutter: woodcutterObject,
    stonecutter: stonecutterObject,
    miner:      minerObject,
    townhall:   townhallObject,
    hospital:   hospitalObject,
    circus:     circusObject,
    inn:        innObject,
    watchTower: watchTowerObject,
    well:       wellObject
}