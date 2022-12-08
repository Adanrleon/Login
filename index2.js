let usuario = "adanrleon"
let contrasena = "123456"
let resultado_usua
let resultado_contra

//----------------------- Validacion Usuario --------------------------------

let validacion_user = prompt("Escriba su usuario")

do{
    if (validacion_user !== usuario){
        validacion_user = prompt("Usuario es incorrecto, intente nuevamente")
    }else{
        resultado_usua = validacion_user
    }
} while(resultado_usua !== validacion_user)

//--------------------- Validacion Contraseña --------------------------------

let validacion_contra = prompt("Escriba su contraseña")

do{
    if (validacion_contra !== contrasena){
        validacion_contra = prompt("Contraseña es incorrecta, intente nuevamente")
    }else{
        resultado_contra = validacion_contra
    }
} while(resultado_contra !== validacion_contra)

alert("Bienvenido Al Sistema")