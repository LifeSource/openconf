import numeral from "numeral";

export class CurrencyValueConverter {

    toView(value, format = "$0,00") {
        return numeral(value).format(format);
    }
}
