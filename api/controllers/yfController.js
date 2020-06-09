const request = require('request');

exports.getCurrentPrice = function (req, res) {
    let stockId = req.params.stockId

    getPrice(stockId, function (err, price) {
        if (err)
            res.send(err);
        res.json({
            price: price
        });
    })
};

const getPrice = function (ticker, callback) {
    const baseUrl = 'https://finance.yahoo.com/quote/';
    request(baseUrl + ticker + "/", function (err, res, body) {

        if (err) { callback(err); }

        try {
            var price = parseFloat(body.split(`"${ticker}":{"sourceInterval"`)[1]
                .split("regularMarketPrice")[1]
                .split("fmt\":\"")[1]
                .split("\"")[0]);

            callback(null, price);
        } catch (err) {
            callback(err)
        }
    });
};