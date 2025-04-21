import { createServer, Model } from "miragejs";
import { sampleStudios } from "./app/data/studios";

export function makeServer(){
    console.log("Making server")
    return createServer({
        logging: true,
        environment: "development",
        models: {
            studios: Model
        },
        seeds(server) {
            server.create("studio", sampleStudios[0])
            server.create("studio", sampleStudios[1])
        },
        routes() {
            this.passthrough("/__manifest**");
            this.namespace = 'api'
            this.get("/studios", (schema) => {
                console.log("Schema", schema)
                return schema.studios.all()
            })
            
            this.get("/studios/:id", (schema, request) => {
                const id = request.params.id
                return schema.studios.find(id)
            })
          },
    });
}