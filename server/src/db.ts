import { Sequelize, DataTypes, Model, Dialect } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT as Dialect;

const sequelize = new Sequelize(dbName, dbUser, "", {
    host: dbHost,
    dialect: dbDialect
})

const toExport = {
    sequelize,
    DataTypes,
    Model
}

export default toExport