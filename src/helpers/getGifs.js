export const getGifs = async ( category )=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=Bbcq7X5Z4LuS5HB7M3BUOKwBPsbnH44x&q=${ category }&limit=10`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data?.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}