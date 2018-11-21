
var app = angular.module('bonusApp', ['jcs-autoValidate']);

angular.module('jcs-autoValidate').run([
	'defaultErrorMessageResolver',
	function (defaultErrorMessageResolver) {
/*
1) Esto que se ha añadido es una forma de pode adjuntar los nuevos idiomas que se incluyen en la carpeta.
*/
		defaultErrorMessageResolver.setI18nFileRootPath('js/lib');
		defaultErrorMessageResolver.setCulture('es-CO');
/*
2) Aquí hay que indicar dónde está el archivo donde se pueden ver las traducciones (setI18nFileRootPath).
3) También, hay que setear la cultura para que sepa a qué archivo tiene que apuntar. En este caso, es el español de Colombia, pero se podría crear un archivo con el español de España. Ojo con las mayúsculas.
*/
		
		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			errorMessages['edadMinima'] = 'Debe de ser mayor a {0} años de edad.';
			errorMessages['edadMaxima'] = 'Debe de ser menor a {0} años de edad.';
		});
/*
3) .
*/
	}
]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};

	$scope.guardar_datos = function(){
		console.log("Posteando...");
	}
	
}]);



