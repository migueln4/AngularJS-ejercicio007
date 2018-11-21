var app = angular.module('bonusApp',['jcs-autoValidate']);

angular.module('bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'Debes tener más de {0} años';
          errorMessages['edadMaxima'] = 'Debes tener menos de {0} años';
        });
    }
]);

/*
3) Hay que introducir esto, que viene de la web http://jonsamwell.github.io/angular-auto-validate/, bajo el epígrafe Error Message Resolver. Hay que cambiar el nombre de la aplicación en angular.module('nombreApp'). Esto sirve para crear errores personalizados.
4) En la parte de errorMessages se pueden ir introduciendo los diferentes mensajes personalizados de error que se quieran introducir. Cuandos se haga referencia a un número del formulario en la parte de edad, hay que poner {0}.
*/

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};


	$scope.guardar_datos = function( valido ){

		if( !valido ){
			return;
		}

		console.log("Posteando...");


	}


	
}]);
