angular.module('editText')
.directive('makeEditable', function() {
	return {
		restrict: 'A',
		transclude: true,
		templateUrl: './components/edit.html',
		scope: true,
	}
});