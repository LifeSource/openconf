import "bootstrap/css/bootstrap.css!";
import "font-awesome/css/font-awesome.css!";

import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {SessionService} from "../sessions/session.service";    
import {SpeakerService} from "../speakers/speaker.service";

@inject(Router, SessionService, SpeakerService)
export class Sessions {

    constructor(router, sessionService, speakerService) {
       this.router         = router;
       this.sessionService = sessionService;
       this.speakerService = speakerService;
    }
    
    activate() {
       this.getAllSessions();
    }

    getAllSessions() {
        return this.sessionService
            .getAll()
            .then((sessions) => this.sessions = sessions);
    }

    addSession() {
        this.router.navigateToRoute("SessionEdit", {id: 0});
    }

    editSession(id) {
        this.router.navigateToRoute("SessionEdit", {id: id});
    }
}
