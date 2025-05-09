export class NewsCommentService {
    #rootApi: string;

    constructor(apiName: string) {
        this.#rootApi = `/api/${apiName}`;
    }

    getAll(accessToken: String) {
        return fetch(this.#rootApi + '/getall', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }

    requestByUnique(id: number, accessToken: String) {
        return fetch(this.#rootApi + '/get/' + id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }

    search(item: any, accessToken: String) {
        return fetch(this.#rootApi + '/getPaged', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    approve(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/approveComment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    reject(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/rejectComment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    delete(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/deleteComment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }

    deletes(item: any, accessToken: string) {
        return fetch(this.#rootApi + '/deleteComments', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }
}
