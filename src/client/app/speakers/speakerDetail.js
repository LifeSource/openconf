//import "jquery/jquery.min.js";
import $ from "jquery";
import * as toastr from "toastr";
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

    updateSpeaker() {
        return this.speakerService
            .updateSpeaker(this.speaker)
            .then((response) => {
                toastr.success("Speaker details saved successfully!");
                this.toggleEditForm();
            })
            .catch((response) => toastr.error(response));
    }

    toggleEditForm() {
       $(".editForm").toggleClass("form-open");
    }
}
