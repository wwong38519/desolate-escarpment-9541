### desolate-escarpment-9541

##### Descriptions
* Single-page application to read Facebook page feed
* Facebook Graph API, AngularJS, nodeJS, Heroku

##### Development Environment Setup
* Facebook
  1. Create new application
  2. Get App ID, App Secret
  3. Setup domain e.g. desolate-escarpment-9541.local.host

* Vagrant 
  1. edit Vagrantfile
```
app.vm.network :forwarded_port, host:8080, guest:8080
```

* Guest Machine
  1. npm init
  2. npm install
  3. set FB_APP_ID & FB_APP_SECRET as environment variable (or in package.json)
  4. npm start

* Host Machine
  1. edit /etc/hosts
```
127.0.0.1	desolate-escarpment-9541.local.host
```

Then the website can be accessed on local machine at:
http://desolate-escarpment-9541.local.host:8080

##### Heroku Setup
* Heroku
  * set FB_APP_ID & FB_APP_SECRET as environment variable

The website can be accessed on local machine at:
http://desolate-escarpment-9541.herokuapp.com
