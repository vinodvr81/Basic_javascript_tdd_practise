import {newAdd} from "../src/avoid_polluting_globalscope.js";

test("check how to avoid polluting globalscope example work", () => {
    expect(newAdd.newUtils.add(10,20,70)).toBe(100);
    expect(newAdd.newUtils.add(101,260,750)).toBe(1111);
});