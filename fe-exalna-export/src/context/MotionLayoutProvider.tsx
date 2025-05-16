import { useState, ReactNode } from "react";
import { MotionLayoutContext } from "../hooks/useMotionLayout"

export const MotionLayoutProvider = ({ children }: { children: ReactNode }) => { 
    const [showSide, setShowSide] = useState<boolean | null>(true);

    return (
        <MotionLayoutContext.Provider value={{ showSide, setShowSide }}>
            {children}
        </MotionLayoutContext.Provider>
    )
}

