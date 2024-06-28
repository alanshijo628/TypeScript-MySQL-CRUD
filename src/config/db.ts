import { Sequelize } from "sequelize";
import config from "./config";

const sequalize = new Sequelize(config.db.name, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "mysql"
});

sequalize.sync().then(()=>{
    console.log(`Database schemas are synced.`);
}).catch(()=>{
    console.log(`Database schema update failed`);
});

export default sequalize;