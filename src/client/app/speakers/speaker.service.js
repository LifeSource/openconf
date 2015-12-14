import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/speakers/";


@inject(HttpClient)
export class SpeakerService {

    constructor(httpClient) {
        this.http = httpClient;
    }

   getAll() {
      return this.http
        .get(baseUrl)
        .then((response) => response.content);
   }

   getSpeakerById(id) {
      return this.http
        .get(baseUrl + id)
        .then((response) => response.content);
   }

   saveSpeaker(speaker) {
      return this.http
        .post(baseUrl, speaker)
        .then((response) => response.content);
   }

   updateSpeaker(speaker) {
      return this.http
        .put(baseUrl + speaker._id, speaker)
        .then((response) => response.content);
   }

   removeSpeaker(id) {
      return this.http
        .get(baseUrl + id)
        .then((response) => response.statusCode);
   }
}
