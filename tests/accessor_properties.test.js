import {user} from "../src/accessor_properties.js";

test("check how data accessor properties work", () => {
    expect(user.fullName).toBe("Vukkalam Rangaswamy Vinod");
});