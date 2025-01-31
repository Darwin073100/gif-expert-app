import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { IsLoadingMessage } from "./IsLoadingMessage";

function GifGrid({ category }) {
    const {images, isLoading} = useFetchGifs( category  );

  return (
    <>
        <h3>{ category }</h3>
        
        <IsLoadingMessage isLoading = {isLoading} />

        <div className="card-grid">
            { images?.map( image => (
                <GifItem key={image.id} { ...image }/>
            ))}
        </div>
    </>
  )
}

export { GifGrid };