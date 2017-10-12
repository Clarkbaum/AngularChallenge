//app.js
/*
angular.module('challenge', [])
.config (function() {})
.factory ('', function() {})
.run(function () {})
*/
//trouble importing this but i dont really need it for the moment
//import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular.module('app', [uirouter, home])
  .config(routing);