/**
 * Created by Nikola on 5/28/2016.
 */
'use strict'

eventsApp.controller('EventController',
    function ($scope,eventData){
        $scope.sortOrder='name';
        $scope.event=eventData.event;
        $scope.upVoteSession=function(session){
            session.upVoteCount++;
        }
        $scope.downVoteSession=function(session){
            session.upVoteCount--;
        }
        $scope.date=new Date();
});
