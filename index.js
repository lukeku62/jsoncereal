const { v4 } = require("uuid");
makeId = (data) => {
    data.map((d) => (d["_id"] = v4()));
    return data;
};

module.exports = makeId;
