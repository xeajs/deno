/**
 * @dataBaseName 数据库名字
 * @collection 数据库下的集合名称
 */
import { Mongo } from "../Deps.ts";

export default class StartDataBase<P> {
  DB: Mongo.Collection<P>;
  constructor(collection: string, dataBaseName = "xeajs") {
    const MongoClient = new Mongo.MongoClient();
    // const MongoOptions = {
    //   hosts: ["mongodb://localhost:27017"],
    //   username: "xeajs",
    //   password: "xeajs",
    // };
    // MongoClient.connectWithOptions(MongoOptions);
    MongoClient.connectWithUri("mongodb://localhost:27017");
    const database = MongoClient.database(dataBaseName);
    this.DB = database.collection(collection);
  }
}
