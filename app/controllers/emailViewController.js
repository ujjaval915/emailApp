(function() {
    'use strict';

    var emailViewController = function (fetchDataService,
                                        $scope,$filter) {
        var url = 'app/mock/emails.json';
        fetchDataService.getContent(url)
            .then(function(response){
                $scope.emails = response.data;
                $scope.loadEmails('Primary');
            });
         $scope.loadEmails = function(searchCriteria){
             //filter the emails based on the search
             $scope.filteredEmails =  $filter('filterByCategory')
                                            ($scope.emails,searchCriteria);
         };

        $scope.$on('loadEmail',function(event,data){
          $scope.loadEmails(data);
        });
    };
    angular.module('iisEmail')
        .controller ('emailViewController',
        ['fetchDataService', '$scope','$filter', emailViewController]);
}());