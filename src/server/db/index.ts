import * as mysql from "mysql";
import Chirps from "./chirps";
import users from "./users";
import mentions from "./mentions";

export const Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "chirprApp",
    password: "chirprApp",
    database: "chirprApp"
});

export const Query = (query: string, values?: Array<string | number>) => {

    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    });


}

export default {
    Chirps,
    users,
    mentions
}