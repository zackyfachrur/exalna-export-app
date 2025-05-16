import { SidebarProps } from "@type/layouts";

export const SidebarList = ({ children, className, logo, text }: SidebarProps) => {
  return (
    <li className={className}>
      {children ? (
        children
      ) : (
        <div className="flex gap-2 items-center select-none">
          {logo}
          <span>{text}</span>
        </div>
      )}
    </li>
  );
};
