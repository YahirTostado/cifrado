import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encriptacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encriptacion.html',
  styleUrl: './encriptacion.css',
})
export class Encriptacion {

  texto1: string = '';
  texto2: string = '';

  metodo: 'cesar' | 'atbash' = 'cesar';
  desplazamiento: number = 3;

  // caracteres ascii configurable
  conjuntoCaracteres: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

encriptar(accion: 'cifrar' | 'descifrar', usarResultado: boolean = false) {
  const textoBase = usarResultado ? this.texto2 : this.texto1;

  if (!textoBase) {
    alert("Ingresa un texto para procesar");
    return;
  }

  if (!this.conjuntoCaracteres || this.conjuntoCaracteres.length < 2) {
    return;
  }

  if (this.metodo === 'atbash') {
    this.texto2 = this.cifradoAtbash(textoBase);
  } else {
    const desplazamientoReal =
      accion === 'cifrar'
        ? this.desplazamiento
        : -this.desplazamiento;

    this.texto2 = this.cifradoCesar(textoBase, desplazamientoReal);
  }
}

limpiar() {
    this.texto1 = '';
    this.texto2 = '';
  }

  // cifrado atbash basado en el conjunto de caracteres 
  private cifradoAtbash(texto: string): string {
    const caracteres = this.conjuntoCaracteres;
    const longitud = caracteres.length;

    return texto.split('').map(char => {
      const indice = caracteres.indexOf(char);

      if (indice === -1) return char;

      const nuevoIndice = longitud - 1 - indice;
      return caracteres[nuevoIndice];
    }).join('');
  }

  // cifrado cesar basado en el conjunto de caracteres 
  private cifradoCesar(texto: string, desplazamiento: number): string {
    const caracteres = this.conjuntoCaracteres;
    const longitud = caracteres.length;

    return texto.split('').map(char => {
      const indice = caracteres.indexOf(char);

      if (indice === -1) return char;

      const nuevoIndice =
        (indice + desplazamiento % longitud + longitud) % longitud;

      return caracteres[nuevoIndice];
    }).join('');
  }
}