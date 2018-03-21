app_controllers.controller('bmiCalCtrl', function ($scope){
    $scope.ShowStanderd =function(){
        console.log("calling");
         $scope.showMetric = false;
         $scope.showStanderd = true;
     }
     $scope.ShowMetric = function() {
         $scope.showMetric = true;
         $scope.showStanderd = false;
     }
 var BMI = " ";
 var resHint = "";
     $scope.getBmiValue = function () {
         
         var wt = $scope.weight;
         var ht = $scope.height;
         var htInMtrs = ht/3.2808;
         var htInCMMtrs = ht/0.032808;
        
         
         var BMI = (wt/(htInCMMtrs*htInCMMtrs))*10000;
         $scope.resText = "BMI Result :" +"<h1>"+ BMI + "</h1>";
        
 
         if(BMI < 18.5){
             resHint = "you have Under weight";
             console.log(BMI, "---> you have Under weight");
         }
         else if(BMI > 18.5 && BMI < 24.9)
         {
             resHint = "you have normal weight";
             console.log(BMI, "---> you have normal weight");
         }
         else if(BMI > 25 && BMI < 29)
         {
             resHint = "you have OverWeight weight";
             console.log(BMI, "---> you have Over weight");
         }
         else if (BMI > 30){
             resHint = "you have Obese weight";
             console.log(BMI, "---> you have Obese weight");
         }
         else{
             resHint = "enter good values";
             console.log(BMI, "--->enter good values");
         }
         $scope.resText1 = "Weight status :" +"<h1>"+ resHint + "</h1>"
      
     };
});