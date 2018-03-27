app_controllers.controller('stepsAndCaloriesCtrl', function ($scope){

  var stepsCount = {};
  $scope.resText = "Steps Count :" +"<h1>"+ stepsCount + "</h1>";
  var successCallback = function (pedometerData) {
    console.log(pedometerData);
    stepsCount  = pedometerData.numberOfSteps;
    $scope.resText = "Steps Count :" +"<h1>"+ stepsCount + "</h1>";
    // pedometerData.startDate; -> ms since 1970
    // pedometerData.endDate; -> ms since 1970
    // pedometerData.distance;
    // pedometerData.floorsAscended;
    // pedometerData.floorsDescended;
};
var failureCallback =function(error){

};
var successHandler = function (pedometerData) {
   console.log(pedometerData);
   stepsCount  = pedometerData.numberOfSteps;
   console.log(pedometerData.numberOfSteps);
   console.log(stepsCount);
   $scope.resText = "Steps Count :" +"<h1>"+ stepsCount + "</h1>";
  // pedometerData.startDate; -> ms since 1970
  // pedometerData.endDate; -> ms since 1970
  // pedometerData.numberOfSteps;
   
  // pedometerData.distance;
  // pedometerData.floorsAscended;
  // pedometerData.floorsDescended;
  
};
var onError =function(errordata){
  console.log(errordata);
};

pedometer.startPedometerUpdates(successHandler, onError);

pedometer.stopPedometerUpdates(successCallback, failureCallback);
 
});