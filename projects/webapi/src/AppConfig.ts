import LogFactoriesMap from "./adapters/driven/ToLogTraductorAdapter/LogFactory/LogFactoriesMap";
import { AuthLogFactory } from "./adapters/driven/ToLogTraductorAdapter/LogFactory/AuthLogFactory";
import mongoose from "mongoose";

export default async () => {
    require('dotenv').config()
    LogFactoriesMap.push(new AuthLogFactory())
    
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

