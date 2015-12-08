import "bootstrap/css/bootstrap.css!";

import {inject} from "aurelia-framework";
import {SessionService} from "../sessions/session.service";    
import {SpeakerService} from "../speakers/speaker.service";

@inject(SessionService, SpeakerService)
export class Sessions {

    constructor(sessionService, speakerService) {
       this.sessionService = sessionService; 
       this.speakerService = speakerService;
    }
    
    activate() {
       this.getAllSessions();

       console.log("this sessions: ", this.sessions);
    }

    getAllSessions() {
        return this.sessionService
            .getAll()
            .then((sessions) => this.sessions = sessions);
    }
}
