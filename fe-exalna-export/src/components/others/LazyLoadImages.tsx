import { Suspense } from "react";
import { LazyLoadImageType } from "@type/components";


const Images = ({ src, alt, className }: LazyLoadImageType) => { 
    return <img src={src} alt={alt} className={className}></img>
}

const LazyLoadImages = ({src, alt, className}: LazyLoadImageType) => { 
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Images src={src} alt={alt} className={className} />
        </Suspense>
    )
}

export default LazyLoadImages