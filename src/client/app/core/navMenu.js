import "font-awesome/css/font-awesome.css!";
import {bindable} from "aurelia-framework";

export class NavMenu {

    @bindable router = null

    constructor() {
        this.icons = [];
    }

    activate() {
        this.icons = ["home", "bar", "user"];

        console.log(this.icons);
    }
}
