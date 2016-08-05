(function() {
  'use strict';

  var getData = function (fetchDataService) {
      this.fetchData = function(filePath) {
             
             return fetchDataService.getContent(filePath)
                .then(function (returnedData) {
                    return returnedData.data;
                  });
              };   
      };    
      angular.module('iisEmail')
        .service ('commonApiService', ['fetchDataService', getData]);
}());