import _ from "lodash";

export class SortValueConverter {

    toView(array, propertyName, direction) {

        var result = _.sortByOrder(array, [propertyName], [direction]);

        return result;
    }

}
