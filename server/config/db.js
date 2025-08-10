const mongoose = require("mongoose");

function connectionToDB() {
  mongoose.connect(process.env.MONGO_URL).then( () => {
  console.log("database connect")
})
}

module.exports = connectionToDB;