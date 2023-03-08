import { Direccion } from "./direccion";

export class Persona {
    nombre!: string; 
    apellido!: string; 
    documento!: string; 
    email!: string; 
    telefono!: string; 
    titular!: boolean;  
    direccion!: Direccion; 
}
