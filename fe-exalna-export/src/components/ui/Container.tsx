import { ContainerProps } from "@type/components"

export const Container = ({ children, className }: ContainerProps) => { 
    return <div className={`containers ${className} `}>{children}</div>
}

export const ChatContainer = ({ children, className }: ContainerProps) => { 
    return <div className={`w-[800px] ${className} `}>{children}</div>
}