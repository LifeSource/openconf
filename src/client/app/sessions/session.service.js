import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/sessions/";

@inject(HttpClient)
export class SessionService {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http
            .get(baseUrl)
            .then((response) => response.content);
    }

    getSessionById(id) {
        return this.http
            .get(baseUrl + id)
            .then((response) => response.content);
    }

    saveSession(session) {
        return this.http
            .post(baseUrl, session)
            .then((response) => response.content);
    }

    updateSession(session) {
        return this.http
            .put(baseUrl + session._id, session)
            .then((response) => response.content);
    }

    removeSession(id) {
        return this.http
            .delete(baseUrl + id)
            .then((response) => response.statusCode);
    }

}

