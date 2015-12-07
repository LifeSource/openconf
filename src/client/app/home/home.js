import {inject} from "aurelia-framework";
import {SpeakerService} from '../speakers/speaker.service';

@inject(SpeakerService)
export class Home {

    constructor(speakerService) {
        this.speakerService = speakerService;
    }

    activate() {
        return this.speakerService
            .getAll()
            .then((speakers) => this.speakers = speakers);
    }
}
