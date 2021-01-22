export interface RegistroUsuarioBody {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string;
    dni: string;
    sexo: string;
    rol: string;
    codigo?: string;
    clave: string;
    fechaNacimiento: string;
}