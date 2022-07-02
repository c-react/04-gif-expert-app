export const getGifs = async (_category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=YAVjGUKfkAChg3gzFLETkTp7mD2Va4WT&q=${_category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;

}