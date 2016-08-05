app.controller('mainController',['$scope','$state',
    function($scope,$state){
        var initializeCtrl = function () {
        $scope.leftMenu =[
            {"name":"Inbox","emailCount":40},
                {"name":"Starred","emailCount":20
                },
                {"name":"Important","emailCount":10
                },
                {"name":"Sent","emailCount":10
                },
                {"name":"Drafts","emailCount":20
                }


        ];
            $scope.loadView = function(viewname){
                $state.go(viewname);
            };
            $scope.selectAllEmail = function(){
                console.log($scope.checkAllEmail);
            };

            $scope.loadEmails =function(filterCriteria){
              $scope.$broadcast('loadEmail',filterCriteria);
            };
            $scope.composeEmail=function(){
                $('.modal').modal('show');
            }
        };

        initializeCtrl();
    }
]);