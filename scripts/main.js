(function(window) {
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());//uses the variable name instead of App.DataStore() that we used in console
    window.myTruck = myTruck;//allows instance of Truck to be accessible from outside the function
})(window);
