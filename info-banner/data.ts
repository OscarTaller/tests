// info-banner.data.ts

import { InfoBannerConfig } from './path/to/info-banner.model';

// Puedes exportar un objeto individual...
export const BANNER_PROTECCION_DATA: InfoBannerConfig = {
  showMode: 'full',
  overline: 'PROTECCIÓN',
  title: 'Tu dinero más seguro que nunca',
  description: 'Protección financiera total 24/7, respaldada por un equipo de expertos y tecnología de seguridad avanzada.'
};

export const BANNER_APP_DATA: InfoBannerConfig = {
  showMode: 'full',
  overline: 'DESCÁRGATE LA APP DE CETELEM',
  title: 'Tu Espacio Cliente siempre al alcance de tu mano',
  description: 'Tus préstamos y tarjetas, las cuotas pagadas y las que te quedan...'
};

// ... o puedes exportar un array (ideal si vas a recorrerlos con un @for en el HTML)
export const HOME_BANNERS: InfoBannerConfig[] = [
  BANNER_PROTECCION_DATA,
  BANNER_APP_DATA
];