// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

(function() {
  var app = angular.module('leegstandscan', ['ngRoute']);

  app.controller('WelcomeController', ['$scope',
    function(){

    }]);

  app.controller('QuestionController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.questionId = $routeParams.questionId;
      $scope.question = $.grep(questions, function(e){ return e.number == $routeParams.questionId})[0];
    }]);

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/vraag/:questionId', {
        templateUrl: 'partials/question.html',
        controller: 'QuestionController'
      }).
      otherwise({
        templateUrl: 'partials/welcome.html',
        controller: 'WelcomeController'
      });
  }]);

  var parts = [
    "Criminele risico's",
    "Technische risico's",
    "Economische risico's"
  ]

  var questions = [
    {
      number: 1,
      name: "Het risico op hangjongeren",
      points: {
        high: 3,
        medium: 0,
        low: 0
      },
      part: 0
    }
  ];

})();
