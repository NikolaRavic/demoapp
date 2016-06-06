/**
 * Created by Nikola on 6/4/2016.
 */
'use strict';
eventsApp.controller('EditEventController', function($scope){
    $scope.saveEvent=function(event, newEventForm){
        if(newEventForm.$valid){

            window.alert('event '+event.name+' saved!');
        }
        }

    $scope.cancelEdit=function(){
        window.location='EventDetails.html';
    }
})