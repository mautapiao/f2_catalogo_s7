import { RenderMode, ServerRoute } from '@angular/ssr';
/**
 * Define las rutas del lado del servidor para Angular SSR.
 * Estas rutas indican cómo deben renderizarse las páginas cuando son solicitadas por el servidor.
 */
export const serverRoutes: ServerRoute[] = [
  {
    /** 
     * Ruta comodín que captura todas las rutas que no hayan sido definidas previamente.
     * Se utiliza comúnmente para renderizar cualquier página desde el servidor.
     */
    path: '**',
    /**
     * Modo de renderizado: Prerender.
     * - Renderiza la página de forma estática en tiempo de construcción (build).
     * - Ideal para contenido que no cambia frecuentemente (mejora SEO y rendimiento).
     * Otros modos posibles: 'RenderMode.Full' (renderizado dinámico en tiempo real).
     */
    renderMode: RenderMode.Prerender
  }
];
