import { ReactNode } from "react";

export type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  showBorder?: boolean;
};
