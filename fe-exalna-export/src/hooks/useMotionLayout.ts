import { useContext, createContext } from "react";

type LayoutContextType = {
    showSide: boolean | null;
    setShowSide: (showSide: boolean | null) => void;
}

export const MotionLayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useMotionLayout = () => { 
    const context = useContext(MotionLayoutContext);
    if (!context) throw new Error("useMotionLayout must be used with MotionLayoutProvider");
    return context;
}