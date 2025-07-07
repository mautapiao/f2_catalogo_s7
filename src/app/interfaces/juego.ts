/**
 * Representa la estructura de un objeto Juego dentro del catálogo.
 */
export interface Juego {
  
  /** Identificador único del juego */
  id: number;

  /** Título o nombre del juego */
  titulo: string;

  /** Categoría del juego (por ejemplo: 'cooperativo', 'estrategia', etc.) */
  categoria: string;

  /** Descripción breve del juego, su temática o mecánica */
  descripcion: string;

  /** URL o ruta relativa de la imagen asociada al juego */
  imagen: string;

  /** Precio actual del juego (posiblemente con descuento aplicado) */
  precioActual: number;

  /** Precio original del juego antes de aplicar descuentos */
  precioOriginal: number;

  /** Porcentaje de descuento aplicado al precio original (ej: 20, 50, etc.) */
  descuento: number;
}
