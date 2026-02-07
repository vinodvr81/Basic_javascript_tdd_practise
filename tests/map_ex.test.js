import {stateCaps} from "../src/map_ex.js";

test("Check for keys in the Map", () => {

    expect(stateCaps.has("Telangana")).toBeTruthy();
    expect(stateCaps.has("Andhra Pradesh")).toBeTruthy();
    expect(stateCaps.has("Karnataka")).toBeTruthy();

})