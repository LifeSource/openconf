import "bootstrap/css/bootstrap.css!";
import {inject} from "aurelia-framework";
import {SessionService} from "./session.service";

@inject(SessionService)
export class SessionDetail {

    constructor(sessionService) {
       this.sessionService = sessionService; 
    }
    
    activate(params) {
        return this.sessionService
            .getSessionById(params.id)
            .then((session) => this.session = session);
    }
    
}
