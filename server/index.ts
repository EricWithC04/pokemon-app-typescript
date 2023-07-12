import app from "./app.ts";
import dotenv from "dotenv";
dotenv.config();
import db from "./models/index.ts";

const port = process.env.PORT;
console.log(port);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listen in port ${port}`);
    })

})

