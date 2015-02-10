var app = angular.module('textSupport');

app.controller('SupportCtrl', function($scope, mainService){

 $scope.messages = mainService.getMessages().$asArray();

 // $scope.getServerMsg = mainService.getServerMsg()$asArray();
 
});