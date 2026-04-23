export interface TextSegment {
  text: string;
  bold?: boolean;
  underline?: boolean;
  href?: string;
}

export type Paragraph = Array<string | TextSegment>;

export interface LegalNote {
  paragraphs: Paragraph[];
  bullets?: Paragraph[];
}
