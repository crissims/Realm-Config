import Realm from "realm"

export class Dog extends Realm.Object {
    static schema = {
        name: "Dog",
        primaryKey: "_id",
        properties: {
            _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
            name: "string",
            age: "int",
        },
    };
}


const app = new Realm.App({ id: "loadtest-jbuzjvw" });
const credentials = Realm.Credentials.anonymous();
try {
    const user = await app.logIn(credentials);
} catch (err) {
    console.error("Failed to log in", err);
}
