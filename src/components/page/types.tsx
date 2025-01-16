import { ReactNode } from "react";

export type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};
