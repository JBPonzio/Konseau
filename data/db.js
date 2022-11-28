import * as React from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('database.db');

// classe de management de la base de données locale (serverless)
export default class LocalDatabaseManager {
    // focntion qui execute les requête sql
    static ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                    resolve(results);
                },
                (error) => {
                    reject(error);
                });
        });
    });
    // initialisation de la table conso
    static initializeDatabase() {
        db.transaction(tx => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS\
                        conso (\
                            id INTEGER PRIMARY KEY NOT NULL,\
                            value TEXT NOT NULL,\
                            date TEXT NOT NULL\
                    );"
                );
            }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK") }
        );
    }

    // récupération de la conso
    static async getConso() {
        let result = [];
        let select = await this.ExecuteQuery("SELECT * FROM conso");
        let rows = select.rows;
        console.log(select);
        for (let i = 0; i < rows.length; i++) {
            let item = rows.item(i);
            result.push(item);
        }

        return result;
    }

    static insertConso(params) {
        db.transaction((trans) => {
            trans.executeSql("INSERT INTO conso (value, date)VALUES('12', '10/12/2022');", params, (trans, results) => {
                    return results;
                },
                (error) => {
                    console.error(error);
                });
        });
    }

}