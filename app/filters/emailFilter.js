app.filter('filterByCategory',[function(){
    return function(emails,searchCritieria){
        var filteredEmails=[];
        if(searchCritieria==''||searchCritieria==undefined){
            return emails;
        }
        else{
            angular.forEach(emails,function(email){
                if(email.category===searchCritieria){
                    filteredEmails.push(email);
                }
            });
            return filteredEmails;
        }
    }
}]);