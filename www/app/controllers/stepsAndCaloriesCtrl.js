app_controllers.controller('stepsAndCaloriesCtrl', 'stepcounter', function ($scope){

    var success = function(message) {
        alert(message);
        console.log("log 1");
    };
 
    var failure = function() {
        alert("Error calling CordovaStepCounter Plugin");
    };
    var startingOffset = 0;
    stepcounter.start(startingOffset, success, failure);
    stepcounter.stop(success, failure);
    stepcounter.getTodayStepCount(success, failure);
    stepcounter.getStepCount(success, failure);
    stepcounter.deviceCanCountSteps(success, failure);
    stepcounter.getHistory(
        function(historyData){
            success(historyData);
        },
        failure
    );
});