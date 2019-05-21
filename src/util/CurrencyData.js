import { fx } from "money"
let currency_rates = {
    "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
    "license": "https://openexchangerates.org/license",
    "timestamp": 1552028400,
    "base": "USD",
    "rates": {
        "AED": 3.673181,
        "AFN": 74.998542,
        "ALL": 110.593593,
        "AMD": 488.463133,
        "ANG": 1.814845,
        "AOA": 314.62,
        "ARS": 42.434,
        "AUD": 1.426729,
        "AWG": 1.799996,
        "AZN": 1.7025,
        "BAM": 1.729346,
        "BBD": 2,
        "BDT": 84.118294,
        "BGN": 1.74451,
        "BHD": 0.377027,
        "BIF": 1823.307186,
        "BMD": 1,
        "BND": 1.350711,
        "BOB": 6.907071,
        "BRL": 3.871,
        "BSD": 1,
        "BTC": 0.000256343684,
        "BTN": 70.637746,
        "BWP": 10.68161,
        "BYN": 2.137234,
        "BZD": 2.015578,
        "CAD": 1.345432,
        "CDF": 1637.936317,
        "CHF": 1.009347,
        "CLF": 0.024214,
        "CLP": 667.80202,
        "CNH": 6.731141,
        "CNY": 6.720415,
        "COP": 3133.811122,
        "CRC": 606.355154,
        "CUC": 1,
        "CUP": 25.75,
        "CVE": 98.0015,
        "CZK": 22.860583,
        "DJF": 178,
        "DKK": 6.656108,
        "DOP": 50.595706,
        "DZD": 119.18,
        "EGP": 17.424,
        "ERN": 14.997545,
        "ETB": 28.567276,
        "EUR": 0.892266,
        "FJD": 2.138203,
        "FKP": 0.763739,
        "GBP": 0.763739,
        "GEL": 2.685,
        "GGP": 0.763739,
        "GHS": 5.579618,
        "GIP": 0.763739,
        "GMD": 49.5325,
        "GNF": 9165.126778,
        "GTQ": 7.712013,
        "GYD": 209.186443,
        "HKD": 7.84991,
        "HNL": 24.515455,
        "HRK": 6.615363,
        "HTG": 82.576548,
        "HUF": 282.218999,
        "IDR": 14325.314005,
        "ILS": 3.6283,
        "IMP": 0.763739,
        "INR": 70.02453,
        "IQD": 1205.785426,
        "IRR": 42105,
        "ISK": 121.700198,
        "JEP": 0.763739,
        "JMD": 127.164135,
        "JOD": 0.709302,
        "JPY": 111.08388889,
        "KES": 99.7,
        "KGS": 68.686155,
        "KHR": 4052.130714,
        "KMF": 435.000245,
        "KPW": 900,
        "KRW": 1136.190216,
        "KWD": 0.30407,
        "KYD": 0.833289,
        "KZT": 378.650796,
        "LAK": 8675.084255,
        "LBP": 1511.711574,
        "LKR": 180.526014,
        "LRD": 161.899369,
        "LSL": 14.24,
        "LYD": 1.391935,
        "MAD": 9.649707,
        "MDL": 17.044583,
        "MGA": 3555.859912,
        "MKD": 54.7545,
        "MMK": 1517.934406,
        "MNT": 2453.75,
        "MOP": 8.084899,
        "MRO": 357,
        "MRU": 36.55,
        "MUR": 34.79993,
        "MVR": 15.449981,
        "MWK": 728.572432,
        "MXN": 19.577153,
        "MYR": 4.088476,
        "MZN": 62.76,
        "NAD": 14.24,
        "NGN": 360,
        "NIO": 32.850788,
        "NOK": 8.783732,
        "NPR": 113.01898,
        "NZD": 1.478517,
        "OMR": 0.385,
        "PAB": 1,
        "PEN": 3.309025,
        "PGK": 3.373745,
        "PHP": 52.3,
        "PKR": 139.673758,
        "PLN": 3.849325,
        "PYG": 6090.499786,
        "QAR": 3.641194,
        "RON": 4.231907,
        "RSD": 105.375456,
        "RUB": 66.357,
        "RWF": 894.191978,
        "SAR": 3.75025,
        "SBD": 8.140964,
        "SCR": 13.680381,
        "SDG": 47.612675,
        "SEK": 9.463374,
        "SGD": 1.35949,
        "SHP": 0.763739,
        "SLL": 8390,
        "SOS": 584.565404,
        "SRD": 7.458,
        "SSP": 130.2634,
        "STD": 21050.59961,
        "STN": 21.675,
        "SVC": 8.749193,
        "SYP": 515.000082,
        "SZL": 14.292152,
        "THB": 31.8205,
        "TJS": 9.436222,
        "TMT": 3.50998,
        "TND": 3.054679,
        "TOP": 2.26997,
        "TRY": 5.466886,
        "TTD": 6.789582,
        "TWD": 30.905596,
        "TZS": 2364.3,
        "UAH": 26.637453,
        "UGX": 3701.741337,
        "USD": 1,
        "UYU": 32.703325,
        "UZS": 8390.401976,
        "VEF": 248487.642241,
        "VES": 3294.899604,
        "VND": 23407.115448,
        "VUV": 111.482288,
        "WST": 2.608518,
        "XAF": 585.2881,
        "XAG": 0.06621936,
        "XAU": 0.00077375,
        "XCD": 2.70255,
        "XDR": 0.717706,
        "XOF": 585.2881,
        "XPD": 0.00065715,
        "XPF": 106.475651,
        "XPT": 0.00122505,
        "YER": 250.300587,
        "ZAR": 14.522274,
        "ZMW": 12.024565,
        "ZWL": 322.355011
    }
}

// class FX {
//     constructor(rates_data) {
//         const { base, rates, timestamp } = rates_data
//         myFx.base = base
//         myFx.rates = rates
//         myFx.timestamp = timestamp
//         this.fx = myFx
//     }

//     setNew() {
//         this.fx.new = true
//     }
// }

function setFx(rates_data, status) {
    const { base, rates, timestamp } = rates_data
    fx.base = base
    fx.rates = rates
    fx.timestamp = timestamp
    fx.new = status
}

setFx(currency_rates)

fetch(process.env.REACT_APP_DATA_LINK).then(res => res.json()).then(res => {
    console.log("new data:", res)
    currency_rates = Object.assign({}, res)
    setFx(res, true)
});

export { fx }