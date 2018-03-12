# Install
```
npm install

npm install -g pm2

pm2 start app.js
```
## REQUIREMENT ##

* NodeJs >8.0.0
* Pm2 >2.0.0

Port HTTP || HTTPS redirect to 8080 (see iptable solutions)

## Docs ##
```
Route : /mail
Data : JSON
{
  mail: "MailOfReceiver"
}
Response : HTTPCODE
200 : success
500 : Error
```
## Contributors ##
maddoctor