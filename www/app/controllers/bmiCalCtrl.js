app_controllers.controller('bmiCalCtrl', function ($scope){
    
    $scope.ShowStanderd =function(){
        console.log("calling");
         $scope.showMetric = false;
         $scope.showStanderd = true;
         $scope.weightPounds ="";
         $scope.feetheight = "";
         $scope.inchheight = "";
         $scope.resText ="";
         $scope.resText1 ="";
         $scope.weightKgs = "";
         $scope.heightCm = "";

     }
     $scope.ShowMetric = function() {
         $scope.showMetric = true;
         $scope.showStanderd = false;
         $scope.weightKgs = "";
         $scope.heightCm = "";
         $scope.weightPounds ="";
         $scope.feetheight = "";
         $scope.inchheight = "";
         $scope.resText ="";
         $scope.resText1 ="";

     }
 var BMI = " ";
 var resHint = "";
     $scope.getMetricBmiValue = function () {
        
         var wtPounds = $scope.weightPounds;
         var htfeet = $scope.feetheight;
         var htInch =$scope.inchheight;

         var convertingFeetsToInches = htfeet*12;
         var totalInches = htInch + convertingFeetsToInches;
          
        var bmiMetricResult = (wtPounds/ (totalInches * totalInches))*703;

         $scope.resText = "BMI Result :" +"<h1>"+ bmiMetricResult + "</h1>";
        
 
         if(bmiMetricResult < 18.5){
             resHint = "you have Under weight";
             console.log(bmiMetricResult, "---> you have Under weight");
         }
         else if(bmiMetricResult > 18.5 && bmiMetricResult < 24.9)
         {
             resHint = "you have normal weight";
             console.log(bmiMetricResult, "---> you have normal weight");
         }
         else if(bmiMetricResult > 25 && bmiMetricResult < 29)
         {
             resHint = "you have OverWeight weight";
             console.log(bmiMetricResult, "---> you have Over weight");
         }
         else if (bmiMetricResult > 30){
             resHint = "you have Obese weight";
             console.log(bmiMetricResult, "---> you have Obese weight");
         }
         else{
             resHint = "enter good values";
             console.log(bmiMetricResult, "--->enter good values");
         }
         $scope.resText1 = "Weight status :" +"<h1>"+ resHint + "</h1>";
      
     };

     $scope.getStanderdBmiValue = function(){

        var wtKgs = $scope.weightKgs;
        var htCms = $scope.heightCm;

         var bmiGenericResult = (wtKgs / (htCms * htCms)) * 10000;

         $scope.resText = "BMI Result :" +"<h1>"+ bmiGenericResult + "</h1>";
        
 
         if(bmiGenericResult < 18.5){
             resHint = "you have Under weight";
             console.log(bmiMetricResult, "---> you have Under weight");
         }
         else if(bmiGenericResult > 18.5 && bmiGenericResult < 24.9)
         {
             resHint = "you have normal weight";
             console.log(bmiGenericResult, "---> you have normal weight");
         }
         else if(bmiGenericResult > 25 && bmiGenericResult < 29)
         {
             resHint = "you have OverWeight weight";
             console.log(bmiGenericResult, "---> you have Over weight");
         }
         else if (bmiGenericResult > 30){
             resHint = "you have Obese weight";
             console.log(bmiMetricResult, "---> you have Obese weight");
         }
         else{
             resHint = "enter good values";
             console.log(bmiMetricResult, "--->enter good values");
         }
         $scope.resText1 = "Weight status :" +"<h1>"+ resHint + "</h1>";

     };
});