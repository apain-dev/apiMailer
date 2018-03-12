const nodemailer = require('nodemailer');

module.exports = function () {
    this._transporter = null;
    this._config = {
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'arthur.pain@epitech.eu',
            pass: 'lr8If0kj'
        }
    };
    this._mailOptions = {
        from: '"Arthur Pain" <arthur.pain@epitech.eu>', // sender address
        to: '', // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };
    let self = this;

    this.connect = function () {
        return new Promise(function (resolve, reject) {
            self._transporter = nodemailer.createTransport(self._config);
            self._transporter.verify(function (error, success) {
                if (error)
                    reject(error);
                else
                    resolve(success);
            });
        });
    };
    this.send = function (to) {
        this._mailOptions.to = to;
        return new Promise(function (resolve, reject) {
            self._transporter.sendMail(self._mailOptions, function (error, info) {
                if (error)
                    reject(error);
                else
                    resolve(info);
            });
        })
    };
};