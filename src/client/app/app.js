export class App {

    constructor() {

        this.year = new Date().getFullYear();
    }
    
    configureRouter(config, router) {

        this.router = router;

        config.map([
            {
                route: ["", "/"],
                name: "home",
                title: "Home",
                moduleId: "app/home/home",
                nav: true
            },
            {
                route: "sessions",
                name: "Sessions List",
                title: "Sessions",
                moduleId: "app/sessions/sessions",
                nav: true
            },
            {
                route: "sessions/info/:id",
                name: "SessionDetails",
                title: "Session Details",
                moduleId: "app/sessions/sessionDetail",
                nav: false 
            },
            {
                route: "sessions/edit/:id",
                name: "SessionEdit",
                title: "Session Edit",
                moduleId: "app/sessions/sessionEdit",
                nav: false 
            },
            {
                route: "speakers",
                name: "Speakers",
                title: "Speakers",
                moduleId: "app/speakers/speakers",
                nav: true
            },
            {
                route: "speakers/edit/:id",
                name: "SpeakerEdit",
                title: "Speaker Edit",
                moduleId: "app/speakers/speakerEdit",
                nav: false
            },
            {
                route: "speakers/info/:id",
                name: "SpeakerDetails",
                title: "Speaker Details",
                moduleId: "app/speakers/speakerDetail",
                nav: false 
            }

        ]);
    }

}
