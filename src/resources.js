import {ResourcesSet} from "./data.js";

export function initializeResources() {
    const initialResources = new ResourcesSet(10, 10, 10, 10);
    return initialResources;
}