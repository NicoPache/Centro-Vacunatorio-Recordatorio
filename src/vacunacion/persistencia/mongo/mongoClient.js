import mongodb from "mongodb";

function crearMongoClient(conectionStr) {
  const client = new mongodb.MongoClient(conectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return {
    connect: async () => {
      await client.connect();
      const db = client.db("vacunatorio");
      db.close = async () => {
        await client.close();
      };
      return db;
    },
    close: async () => {
      await client.close();
    },
  };
}

export { crearMongoClient };
