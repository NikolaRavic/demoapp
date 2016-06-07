'use strict';

eventsApp.filter('durations', function(){
    return function (duration){
        switch (duration){
            case 0:
                return "Half Hour";
            case 1:
                return "1 Hour";
            case 2:
                return "Half Day";
            case 3:
                return "Full Day";
        }
    }
})
eventsApp.filter('icons',function(){
    return function (level) {
        switch (level){
            case "Introductory":
                return "<img src='../app/img/icon-1.png' alt='Introductory' height='24' width='24'>";
            case "Intermediate":
                return "<img src='../app/img/icon-2.png' alt='Intermediate' height='24' width='24'>";
            case "Advanced":
                return "<img src='../app/img/icon-3.png' alt='Advanced' height='24' width='24'>";
        }
    }
})