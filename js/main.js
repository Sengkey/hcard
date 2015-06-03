function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }

// var app = angular.module('myApp', []);
// app.controller('ResponsiveController', function($scope) {
angular.module('myApp', [])
 .controller('ResponsiveController', ['$scope', function($scope) {
    $scope.inputGiven = '';
    $scope.inputSurname = '';
    $scope.inputEmail = '';
    $scope.inputPhone = '';
    $scope.inputHouse = '';
    $scope.inputStreet = '';
    $scope.inputSuburb = '';
    // $scope.inputState = '';
    $scope.inputStates = [
      {label:'NSW', code:'NSW'},
      {label:'VIC', code:'VIC'},
      {label:'QLD', code:'QLD'},
      {label:'WA', code:'WA'},
      {label:'SA', code:'SA'},
      {label:'TAS', code:'TAS'},
      {label:'ACT', code:'ACT'},
      {label:'NT', code:'NT'}
    ];
    //$scope.myResp = $scope.inputStates[0]; // red
    $scope.inputPostcode = '';
    $scope.inputCountry = '';
  }])

  .filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().replace(/\s/g, '').replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 2);
                number = value.slice(2);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 4) + ' ' + number.slice(4);

        return (country + " " + city + " " + number);
    };
}); 








