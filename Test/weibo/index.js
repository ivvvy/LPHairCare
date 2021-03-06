(function(){
 angular.module('app',[]);
    angular.module('app').controller('MainCtrl',function(){});
    angular.module('app').directive('myMaxlength',function(){
       return{
           restrict:'A',
           required:'ngModel',
           link:function(scope,elem,attrs,ctrl){
               var maxlength=parseInt(attrs.myMaxlength,10);
               ctrl.$parsers.push(function(value){
                  if(value.length>maxlength){
                      value=value.substr(0,maxlength);
                      ctrl.$setViewValue(value);
                      ctrl.render();
                  }
                   return value;
               });
           }
       };
    });
})();