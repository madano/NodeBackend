/**
 * Created by Adam on 8/21/2015.
 */
myApp.directive('printThis', function() {
    /** https://docs.angularjs.org/guide/directive **/

    var directiveDefinitionObject = {
        restrict: 'EA',
        template: '<input ng-model="data" placeholder="Type here"/> {{ data }}'
    };

    return directiveDefinitionObject;
});