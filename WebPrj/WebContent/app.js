/**
 * 
 */
'use strict';
var myApp = angular.module('myApp',['ngResource']);
myApp.controller("appMainCtrl",['$scope','$http',function($scope,$http){
	$scope.taskName = "";
	$scope.taskDesc = "";
	$scope.taskPriority = "";
	$scope.taskStatus = "";
	$scope.successData = "";
	
	$scope.submitForm = function(){
		$http.post("/sampleWS/addTask/"+$scope.taskName+"/"+$scope.taskDesc+"/"+$scope.taskPriority+"/"+$scope.taskStatus)
			.success(function(data){
				$scope.successData = JSON.stringify(data);
				
			});
	};
	
	$scope.submitChange = function(){
		var data = {
				taskName: $scope.taskName,
				taskStatus: $scope.taskStatus
		};
		$http.post("/sampleWS/changeStatus", data)
		.success(function(responseData){
			$scope.successData = JSON.stringify(responseData);
			
		});
	}
	
}]);
