import { Persona } from "./persona";

export class Reserva {
    titular!: Persona; 
    nroAcompanantes!: number; 
    acompanantes!: Array<Persona>; 
    documentacion!: string; 
    fechaLlegada!: Date; 
    fechaSalida!: Date; 
    medioTransporte!: string; 
    frecuenciaLimpieza!: string; 
    notas!: string; 
    firma!: string; 
}
