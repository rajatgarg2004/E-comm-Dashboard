const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://${username}:${password}@${clusterName}.gysdhem.mongodb.net/${databaseName}?retryWrites=true&w=majority`
);