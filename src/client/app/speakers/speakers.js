import "bootstrap/css/bootstrap.css!";
import "font-awesome/css/font-awesome.css!";

import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {SpeakerService} from "./speaker.service";

@inject(SpeakerService, Router)
export class Speakers {

    constructor(speakerService, router) {
        this.speakerService = speakerService; 
        this.router = router;
    }
    
    activate() {
        return this.speakerService
            .getAll()
            .then((speakers) => this.speakers = speakers);
    }

    speakerDetails(id) {
        this.router.navigateToRoute("SpeakerDetails", { id: id});
    }
}
