module.exports = (req, res, next) => {

    if (req.method === 'OPTIONS') {
        var headers = {};
        // IE8 does not allow domains to be specified, just the *
        // headers["Access-Control-Allow-Origin"] = req.headers.origin;
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "*";
        res.writeHead(200, headers);
        res.end();
    } else {
        //...
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Credentials', "*");
        res.header('Access-Control-Allow-Methods', '')
        res.header('Access-Control-Allow-Headers', '*')
        next();

    }
}