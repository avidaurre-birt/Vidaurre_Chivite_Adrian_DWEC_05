import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../modelos/Configuracion';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  public mostrarTexto: boolean = false;
  public nombre: string = ""
  public apellido: string = ""
  public rango: number = 0
  public intentos: number = 0
  public test: number = 0
  public numeroAleatorio: number = 0
  public listaIntentos: Array<number> = []
  public mostrarResultados: boolean = false
  public acierto: string = ""

  constructor() {

  }

  iniciarJuego(): void {
    this.getConfiguracion()
    this.numeroAleatorio = this.generarNumero(this.rango);
    console.log("El número generado es el " + this.numeroAleatorio)
    this.mostrarTexto = true;

  }

  getConfiguracion(): void {
    let config = new Configuracion(this.nombre, this.apellido, this.rango, this.intentos)
    console.log(config)
  }

  generarNumero(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  intentar(numeroAleatorio: number, test: number, rango: number): void {

    if (test > rango) {
      alert("El número introducido no está en el rango de números generados")

    }
    if (numeroAleatorio == test) {
      this.acierto = "si"
      //this.mostrarResultados = true

    } else this.acierto = "no"

    this.intentos = this.intentos - 1
    this.listaIntentos.push(this.test)

    if (this.intentos == 0 && this.acierto == "no") {
      this.mostrarResultados = true
    }
  }

}
