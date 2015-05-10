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
      part: 0
    },
    {
      number: 2,
      name: "Het risico op vandalisme en vernieling, o.a. graffiti",
      part: 0
    },
    {
      number: 3,
      name: "Het risico op inbraak/ diefstal, o.a. koper",
      part: 0
    },
    {
      number: 4,
      name: "Het risico op brandstichting",
      part: 0
    },
    {
      number: 5,
      name: "Het risico op kraak",
      part: 0
    },
    {
      number: 6,
      name: "Het risico op hennepteelt",
      part: 0
    },
    {
      number: 7,
      name: "Het risico op waterschade/ lekkage",
      part: 1
    },
    {
      number: 8,
      name: "Het risico voor de brandveiligheid",
      part: 1
    },
    {
      number: 9,
      name: "Het risico op technische storingen in installaties",
      part: 1
    },
    {
      number: 10,
      name: "Het risico op verval door achterstallig onderhoud",
      part: 1
    },
    {
      number: 11,
      name: "Het risico op verloedering van het buitenterrein",
      part: 1
    },
    {
      number: 12,
      name: "Het risico op schade aan dak & gevel",
      part: 1
    },
    {
      number: 13,
      name: "Het risico op onderverzekering",
      part: 2
    },
    {
      number: 14,
      name: "Het risico op waardevermindering",
      part: 2
    },
    {
      number: 15,
      name: "Het risico op energieverspilling",
      part: 2
    },
    {
      number: 16,
      name: "Het risico op langere verkooptijd",
      part: 2
    },
    {
      number: 17,
      name: "Het risico op verminderde leefbaarheid in de omgeving",
      part: 2
    },
    {
      number: 18,
      name: "Het risico op imagoschade",
      part: 2
    }
  ];

})();
