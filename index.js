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

/**
 * INPUT: a javascript array of objects and number of new mock 
 * objects desired
 * OUTPUT: the same array, plus the n new objects that resemble the original objects
 */
const makeMock = (array, nObj) => {
    const protoL = Object.keys(array[0]).length;
    const mock = array;
    for (let i = 0; i < nObj; i++) {
        const obj = {};

        for (let j = 0; j < protoL; j++) {
            const protoF = Object.keys(array[0])[j];

            if (!isNaN(parseInt(array[0][protoF]))) {
                obj[protoF] = Math.floor(Math.random() * 100 + 1);
            } else if (
                typeof array[0][protoF] === "string" &&
                array[0][protoF].includes("http")
            )
                obj[protoF] = "https://it.wikipedia.org/wiki/Monte_Rosa";
            else obj[protoF] = "Lorem ipsum dolor sit amet";
        }
        mock.push(obj);
    }

    return mock;
};

const jcereal = {
    makeId: makeId,
    makeIdCustom: makeIdCustom,
    makeMock: makeMock,
};

export default jcereal;
