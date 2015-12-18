import "font-awesome/css/font-awesome.css!";
import {bindable} from "aurelia-framework";

export class NavMenu {

    @bindable router = null

    constructor() {
        this.icons = [
            { name: "home", state: "home" },
            { name: "bars", state: "sessions" },
            { name: "user", state: "speakers" }
        ];
    }

    goToRoute(route) {
        this.router.navigateToRoute(route);
    }
}
