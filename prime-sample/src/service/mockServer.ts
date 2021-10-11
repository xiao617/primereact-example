import { createServer, Factory, Model } from "miragejs";
import { itemBody } from "../types/datatableType";
import dataSource from './resource/data.json';

export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      data: Model.extend<Partial<itemBody>>({})
    },
    factories: {
      
    },
    seeds(server) {
      //server.schema.create('todo',{ name: "Go to Market" });
      //server.create("todo", { name: "Buy Cookies" });
      //server.createList("todo", 3);
      server.db.loadData(dataSource)
    },
    routes() {
      //this.urlPrefix = "https://sd8zp.csb.app/";
      this.get("/datas", (schema, request) => {
        //return {"todos": [{"name":"Buy Drink", "id":"1"}]}
        return schema.all("data");
      });
      
    }
  });
}