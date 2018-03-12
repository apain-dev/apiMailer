let express = require('express');
let router = express.Router();
let Mailer = new (require('../Modules/Mailer'));


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    Mailer.connect().then(function (answer) {
        Mailer.send(req.body.mail).then(function (answer) {
            console.log(answer);
            res.sendStatus(200);
        }).catch(function (answer) {
            console.log(answer);
            res.sendStatus(500);
        });
    }).catch(function (answer) {
        console.log(answer);
        res.sendStatus(500);
    });
});

module.exports = router;
