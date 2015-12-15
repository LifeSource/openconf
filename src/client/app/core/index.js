import "toastr/build/toastr.min.css!";
import "toastr/build/toastr.min.js";

export function configure(aurelia) {

    aurelia.globalResources([
        "../navMenu", 
        "../sort",
        "../date",
        "../currency"
    ]);
    
}
