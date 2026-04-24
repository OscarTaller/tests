// info-banner.model.ts

export interface InfoBannerConfig {
  /** Determina qué template se va a renderizar en el ngSwitch */
  showMode: 'full' | 'simple'; 
  
  /** El H2 (opcional) */
  overline?: string;
  
  /** El H3 (obligatorio) */
  title: string;
  
  /** El párrafo (opcional) */
  description?: string;
}