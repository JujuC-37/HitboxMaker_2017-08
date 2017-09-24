import {ResourcesSet, buildingsList} from "./data.js";

export function initializeResources() {
    const initialResources = new ResourcesSet(10, 10, 10, 10);
    return initialResources;
}

// subtracts used resources in construction from playing game data
export function updateResourcesAfterConstruction(playingGame) {
    let resourcesConstr = playingGame.selectedTool.constr;

    Object.keys(resourcesConstr).forEach( key => {
        playingGame.resources[key] -= resourcesConstr[key];
    });

    console.log('production : ', calculateResourcesProd(playingGame)); // to test
}

// calculates resources production from list of constructed building
function calculateResourcesProd(playingGame) {
    let production = new ResourcesSet(0, 0, 0, 0);

    Object.keys(playingGame.constrBuildingAccount).forEach( keyBuilding => {
        let building = buildingsList[keyBuilding];
        let nbBuildings = playingGame.constrBuildingAccount[keyBuilding];

        Object.keys(building.prod).forEach( keyResource => {
            production[keyResource] += nbBuildings * building.prod[keyResource];
        });
    });

    return production;
}