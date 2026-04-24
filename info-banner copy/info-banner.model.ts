export interface TextSegment {
  text: string;
  bold?: boolean;
  underline?: boolean;
  href?: string;
}

export type RichText = Array<string | TextSegment>;

export interface InfoBannerConfig {
  /** Pretítulo pequeño en mayúsculas (opcional) */
  overline?: string;

  /** Titular principal (obligatorio) */
  title: string;

  /** Si el titular va en negrita. Por defecto: true */
  titleBold?: boolean;

  /** Párrafo descriptivo con soporte de negrita / subrayado / enlaces (opcional) */
  description?: RichText;
}
