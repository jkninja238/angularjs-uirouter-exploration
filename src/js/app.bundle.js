!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var o=angular.module("myApp",["ui.router"]);o.config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("home",{url:"/home",views:{header:{templateUrl:"./src/views/header.html"},mainview:{templateUrl:"./src/views/home.html",controller:"homeController"}}}).state("profile",{url:"/profile",views:{header:{templateUrl:"./src/views/header.html"},mainview:{templateUrl:"./src/views/profile.html",controller:"homeController"}}}).state("settings",{url:"/settings",views:{header:{templateUrl:"./src/views/header.html"},mainview:{templateUrl:"./src/views/settings.html",controller:"homeController"}}}),r.otherwise("/home")}]),o.run(["$rootScope","globalService",function(e,r){e.$on("$stateChangeStart",function(e,r,t){console.log(r+" < "+t)})}]);var n=o;n.controller("homeController",["$scope",function(e){console.log("This was executed!")}]),n.service("globalService",function(){var e,r={activemenu:"home"};return{props:r,updateCurrentMenu:void(r.activemenu=e)}})}]);