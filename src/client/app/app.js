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
                route: "speakers",
                name: "Speakers",
                title: "Speakers",
                moduleId: "app/speakers/speakers",
                nav: true
            },
            {
                route: "speakers/:id",
                name: "SpeakerDetails",
                title: "Speaker Details",
                moduleId: "app/speakers/speakerDetail",
                nav: false 
            }

        ]);
    }

}
