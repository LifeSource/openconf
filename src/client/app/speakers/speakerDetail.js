import "bootstrap/css/bootstrap.css!";
import {inject} from "aurelia-framework";
import {SpeakerService} from "./speaker.service";

@inject(SpeakerService)
export class SpeakerDetail {

    constructor(speakerService) {
       this.speakerService = speakerService; 
    }
    
    activate(params) {
        return this.speakerService
            .getSpeakerById(params.id)
            .then((speaker) => this.speaker = speaker);
    }
}
