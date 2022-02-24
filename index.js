import { v4 } from "uuid";

/**
 * INPUT: a javascript array of objects
 * OUTPUT: the same array, but every object has a new property
 * with key: _id and value: a randomly generated string
 */
const makeId = (array) => {
    array.map((d) => (d["_id"] = v4()));
    return array;
};

/**
 * INPUT: a javascript array of objects and a preferred name for key id
 * OUTPUT: the same array, but every object has a new property
 * with key: _id and value: a randomly generated string
 */
const makeIdCustom = (array, key) => {
    array.map((a) => (a[key] = v4()));
    return array;
};

export default jcereal = { makeId: makeId, makeIdCustom: makeIdCustom };
