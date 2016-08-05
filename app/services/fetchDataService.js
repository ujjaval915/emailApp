(function() {
  'use strict';

  var fetchDataService = function($http,$q) {
      this.getContent = function(path) {
         var defer = $q.defer();
          $http({
            method : 'get',
            url : path
          }).success(function(response){
              defer.resolve(response);
          }).error(function(response){
              defer.reject(response);
          });
          return defer.promise;
      };
  };
  
  angular.module('iisEmail')
    .service ('fetchDataService',['$http','$q', fetchDataService]);
}());