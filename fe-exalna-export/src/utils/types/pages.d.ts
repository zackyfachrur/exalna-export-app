import { ReactNode } from "react";

export interface DataItem {
  prompt?: string;
  name?: string | undefined;
  url?: string | undfined;
}

export interface ChatResponse {
  explanation_ai: DataItem[];
  services: DataItem[];
}

export interface ListFeatureProps {
  logo?: ReactNode;
  text?: string;
}

export interface ModeItemProps {
  logo?: ReactNode;
  title?: string;
  desc?: string;
  isActive?: boolean;
  isReset?: boolean;
  onClick?: () => void;
}

export type ProductProps = {
  companyName?: string;
  userName?: string;
  thumbnailURL?: string;
  productName?: string;
  isImport?: boolean;
  isExport?: tboolean;
  productCategory?: string;
  quantity?: number;
  cost?: number;
};
