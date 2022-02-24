const { v4 } = require("uuid");

modules.exports = makeId = (data) => {
    data.map((d) => (d["_id"] = v4()));
    return data;
};
