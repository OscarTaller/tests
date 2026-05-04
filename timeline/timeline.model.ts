export interface TimelineItem {
  number: string;
  title: string;
  paragraph: string;
  showMessageBox: boolean;
  message?: string;
  showButton: boolean;
  buttonText?: string;
  showLine: boolean;
}