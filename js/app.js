
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

$scope.datosFormulario = {};

$scope.guardarDatos = function(valido) {

	if(!valido) {
		return; //Si el formulario no es válido, no se hace absolutamente nada.
	}


	console.log("Guardando los datos...");

};


	
}]);
