import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });

    await mongoose.connect(config.mongodb_uri);
  } catch (err) {
    console.log(err);
  }
}

main();
