import {DataSource} from "typeorm";
import * as dotenv from "dotenv";
import {User} from "./User";
 
dotenv.config();
const databasePath = process.env.DATABASE_PATH;
if(!databasePath){
    throw new Error('Database path environment variable is not set')
}

export const AppDataSource = new DataSource({
    type:"sqlite",
    database: databasePath,
    synchronize: true,
    entities: [User],
})

export const initDataSource = async () => {
    await AppDataSource.initialize();
    console.log("Database connected and initialized");
};

initDataSource().catch((err) => 
    console.log("Database connection error:", err)
);