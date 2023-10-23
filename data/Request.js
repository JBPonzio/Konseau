
const url = 'https://apikonseau.herokuapp.com';

export default class Request {

    static async getConso() {
        // récupère la consommation totale sur l'année
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
        });
    }

    // récupère les données du foyer
    static async getFoyer(state) {
        state.setData = await fetch(
            url + '/foyers/1', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        ).then((response) => response.json());
    }

    // modification des informations du foyer
    updateFoyer() {

    }

    // création d'un foyer lors du lancement de l'application
    static async createFoyer() {
        try {
            return await fetch(
                url + '/foyers/add/nb_pers=3', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

}