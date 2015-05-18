// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

(function() {
  var app = angular.module('leegstandscan', ['ngRoute']);

  app.controller('WelcomeController', ['$scope',
    function($scope){

    }]);

  app.controller('ContactController', ['$http', '$location', 'storage', function($http, $location, storage){
    this.details = {criminele: storage.parts[0].score, technische: storage.parts[1].score, economische: storage.parts[2].score, totaal: storage.score};
    this.submit = function() {
      $http.post('/details', this.details);
      $location.path('/score')
    }
  }]);

  app.controller('QuestionController', ['$scope', '$routeParams', '$location', 'storage',
    function($scope, $routeParams, $location, storage) {
      $scope.questionId = $routeParams.questionId;
      $scope.question = $.grep(storage.questions, function(e){ return e.number == $routeParams.questionId})[0];

      // register an answer
      $scope.answer = function(value) {
        storage.score = storage.score + value; // total score
        storage.parts[$scope.question.part].score = storage.parts[$scope.question.part].score + value; // per-part score

        if($routeParams.questionId=='18') {
          $location.path('/contact');
        } else {
          $location.path('/vraag/' + (parseInt($routeParams.questionId, 10)+1));
        }
      }
    }]);

  app.controller('ScoreController', ['$scope', 'storage',
    function($scope, storage){
      $scope.parts = storage.parts;

      $scope.smile = function(score) {
        if(score <= 6) {
          return "low";
        } else if (score >= 7 && score <= 11) {
          return "medium";
        } else if (score > 11) {
          return "high";
        }
      }
      $scope.totalSmile = function() {
        if(storage.score <= 18) {
          return "low";
        } else if (storage.score >= 19 && storage.score <= 34) {
          return "medium";
        } else if (storage.score > 34) {
          return "high";
        }
      }
    }]);

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/vraag/:questionId', {
        templateUrl: 'partials/question.html',
        controller: 'QuestionController'
      }).
      when('/score', {
        templateUrl: 'partials/score.html',
        controller: 'ScoreController'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
      }).
      otherwise({
        templateUrl: 'partials/welcome.html',
        controller: 'WelcomeController'
      });
  }]);

  // This stores the state of our application.
  app.factory('storage', function() {

    return {
      score: 0,

      parts: [
        {
          name: "Criminele risico's",
          score: 0
        }, {
          name: "Technische risico's",
          score: 0
        }, {
          name: "Economische risico's",
          score: 0
        }
      ],

      questions: [
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
      ]

    };

  });

})();
