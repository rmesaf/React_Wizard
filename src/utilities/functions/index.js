export const toMoney = function (str, currency_sign){
    currency_sign = currency_sign || '$';
    var current = Number(str.toString().replace(/[^0-9.]/g, ''));
    var formatted = current.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var wDecimals = formatted.split('.');
    	wDecimals = wDecimals[0].replace(',','.')
    return currency_sign + wDecimals;
};

export const logSomething = function(something){
    console.log(something);
}

