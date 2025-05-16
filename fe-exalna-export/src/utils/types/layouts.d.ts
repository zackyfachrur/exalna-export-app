export interface NavigationProps {
  children: ReactNode;
}

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
}

export type InputChatProps = {
  onSend: (prompt: string, mode?: string) => void;
  loading: boolean;
};

export interface NavigateProps {
  icon: ReactNode;
  to: string;
  text: string;
}

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
  logo?: ReactNode;
  text?: string;
}


