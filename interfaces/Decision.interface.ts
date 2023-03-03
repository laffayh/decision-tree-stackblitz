export interface IDecision {
  title?: string;
  description?: string;
  children?: IDecision[];
  finalDescription?: string;
}
