import { InfoBannerConfig } from './info-banner.model';

export const BANNER_APP_DESCARGATE: InfoBannerConfig = {
  overline: 'DESCÁRGATE LA APP DE CETELEM',
  title: 'Tu Espacio Cliente siempre al alcance de tu mano',
  description: [
    'Tus préstamos y tarjetas, las cuotas pagadas y las que te quedan, así como toda la información que necesitas de tus contratos con nosotros, los puedes encontrar en la nueva APP de Cetelem.',
  ],
};

export const BANNER_SOBRE_CETELEM: InfoBannerConfig = {
  overline: 'SOBRE CETELEM',
  title: 'Más de 3,5 millones de personas ya confían en Cetelem',
  description: [
    'Con el respaldo y la solvencia del Grupo BNP Paribas, Cetelem es una entidad adherida al Fondo de Garantía de Depósitos de Entidades de Crédito Español, y tiene licencia bancaria desde hace más de 30 años.',
  ],
};

export const BANNER_APP_CETELEM: InfoBannerConfig = {
  overline: 'APP CETELEM',
  title: 'Tus gestiones cuándo y cómo decidas',
  description: [
    'Accede a tus Cuentas de una manera cómoda y sencilla desde tu móvil con la ',
    { text: 'App Cetelem', bold: true },
    '. Toda la operativa diaria que necesites está en nuestra app.',
  ],
};

export const INFO_BANNERS: InfoBannerConfig[] = [
  BANNER_APP_DESCARGATE,
  BANNER_SOBRE_CETELEM,
  BANNER_APP_CETELEM,
];
