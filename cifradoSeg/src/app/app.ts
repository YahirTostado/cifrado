import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encriptacion } from './encriptacion/encriptacion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encriptacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cifradoSeg');
}
