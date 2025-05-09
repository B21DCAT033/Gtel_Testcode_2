export class ApplicationInformationService {
    #rootApi: string;

    constructor(apiName: string) {
        this.#rootApi = `/api/${apiName}`;
    }

    getAll(accessToken: string) {
        return fetch(this.#rootApi + '/getall', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }

    requestByUnique(id: number, accessToken: string) {
        return fetch(this.#rootApi + '/get/' + id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }

    search(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/getPaged', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    delete(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/deleteApplicationInformation', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    deletes(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/deleteApplicationInformations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }
}
