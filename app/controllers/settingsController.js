(function() {
    'use strict';

    var settingController = function (fetchDataService, $scope) {
        var url = 'app/mock/settings.json';
        fetchDataService.getContent(url)
            .then(function(response){
                $scope.contacts = response.data.contacts;
                $scope.languages = response.data.languages;
                $scope.conversations = response.data.conversations;
                $scope.undoSend = response.data.undoSend;
            });
    };

    angular.module('iisEmail')
        .controller ('settingsController',
        ['fetchDataService', '$scope', settingController]);
}());