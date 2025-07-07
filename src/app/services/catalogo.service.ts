import { Injectable } from '@angular/core';
/**
 * Servicio de Angular que contiene un catálogo de juegos.
 * Se puede inyectar en cualquier componente gracias a `providedIn: 'root'`.
 */
@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible de forma global
})
export class CatalogoService {
  /** Define el contructor */
  constructor() { }
 /**
   * Arreglo privado que simula un catálogo de juegos.
   * En una app real, esto podría venir desde una API o una base de datos.
   */
  private juegosCatalogos = [
    {
      id: 1,
      titulo: 'Pandemic',
      categoria: 'cooperativos',
      descripcion: 'Trabajen juntos para salvar al mundo de cuatro enfermedades mortales.',
      imagen: 'img/pandemic.png',
      precioActual: 48000,
      precioOriginal: 60000,
      descuento: 20,
    },
    {
      id: 2,
      titulo: 'Forbidden Island',
      categoria: 'cooperativos',
      descripcion: 'Explora la isla misteriosa y recuperen los terosos antes de que se hunda.',
      imagen: 'img/forbidden.png',
      precioActual: 35000,
      precioOriginal: 0,
      descuento: 0,
    },
    {
      id: 3,
      titulo: 'Flash Point',
      categoria: 'cooperativos',
      descripcion: 'Conviértanse en bomberos y salven vidas en edificios en llamas.',
      imagen: 'img/flashpoint.png',
      precioActual: 40050,
      precioOriginal: 45000,
      descuento: 11,
    },
    {
      id: 4,
      titulo: 'Catan',
      categoria: 'estrategia',
      descripcion: 'El clásico juego de construcción y comercio donde debes colonizar la isla de Catan.',
      imagen: 'img/catan.png',
      precioActual: 45100,
      precioOriginal: 55000,
      descuento: 18,
    },
    {
      id: 5,
      titulo: 'Risk',
      categoria: 'estrategia',
      descripcion: 'Conquista el mundo en este épico juego de estrategia militar y diplomacia.',
      imagen: 'img/risk.png',
      precioActual: 38000,
      precioOriginal: 0,
      descuento: 0,
    },
    {
      id: 6,
      titulo: 'Ticket to Ride',
      categoria: 'estrategia',
      descripcion: 'Construye rutas ferroviarias a través de América del Norte en esta aventura sobre rieles.',
      imagen: 'img/ride.png',
      precioActual: 42000,
      precioOriginal: 50000,
      descuento: 16,
    },
    {
      id: 7,
      titulo: 'Splendor',
      categoria: 'estrategia',
      descripcion: 'Conviértete en un próspero comerciante de gemas en el Renacimiento.',
      imagen: 'img/splendor.png',
      precioActual: 35000,
      precioOriginal: 0,
      descuento: 0,
    },

    {
      id: 8,
      titulo: 'Monopoly',
      categoria: 'familiares',
      descripcion: 'El clásico juego de bienes raíces que ha unido familias por generaciones.',
      imagen: 'img/monopoly.png',
      precioActual: 28000,
      precioOriginal: 35000,
      descuento: 20,
    },
    {
      id: 9,
      titulo: 'Scrabble',
      categoria: 'familiares',
      descripcion: 'Forma palabras y desarrolla tu vocabulario en este juego educativo y divertido.',
      imagen: 'img/scrabble.png',
      precioActual: 32000,
      precioOriginal: 0,
      descuento: 0,
    },
    {
      id: 10,
      titulo: 'Clue',
      categoria: 'familiares',
      descripcion: 'Resuelve el misterio del asesinato en esta emocionante aventura detectivesca.',
      imagen: 'img/clue.png',
      precioActual: 30000,
      precioOriginal: 40000,
      descuento: 25,
    },
    {
      id: 11,
      titulo: 'Uno',
      categoria: 'familiares',
      descripcion: 'El juego de cartas más popular del mundo, perfecto para toda la familia.',
      imagen: 'img/uno.png',
      precioActual: 15000,
      precioOriginal: 0,
      descuento: 0,
    },
    {
      id: 12,
      titulo: 'Taboo',
      categoria: 'party',
      descripcion: 'Haz que tu equipo adivine la palabra sin decir las palabras prohibidas.',
      imagen: 'img/taboo.png',
      precioActual: 24960,
      precioOriginal: 32000,
      descuento: 22,
    },
    {
      id: 13,
      titulo: 'Charades',
      categoria: 'party',
      descripcion: 'Actúa sin hablar y divierte a todos con tus mejores interpretaciones.',
      imagen: 'img/charades.png',
      precioActual: 20000,
      precioOriginal: 0,
      descuento: 0,
    },
    {
      id: 14,
      titulo: 'Exploding Kittens',
      categoria: 'party',
      descripcion: 'Un juego de cartas lleno de gatitos, explosiones y láser ocasional.',
      imagen: 'img/exploding.png',
      precioActual: 22120,
      precioOriginal: 28000,
      descuento: 21,
    },
    {
      id: 15,
      titulo: 'Uno',
      categoria: 'party',
      descripcion: 'El juego de cartas más popular del mundo, perfecto para toda la familia.',
      imagen: 'img/uno.png',
      precioActual: 15000,
      precioOriginal: 0,
      descuento: 0,
    }

  ];

  /** obtener todos los juegos */
  getJuegosCatalogos() {
    return this.juegosCatalogos;
  }
/** Obtener juego por Id */
  getJuegoPorId(id: number) {
    return this.juegosCatalogos.find(fila => fila.id === id);
  }


}
