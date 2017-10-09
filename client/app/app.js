//app.js
/*
angular.module('challenge', [])
.config (function() {})
.factory ('', function() {})
.run(function () {})
*/
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

angular.module('app', [uirouter]);