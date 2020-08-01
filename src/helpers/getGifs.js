
export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=z81qkwb6SXbdL46DE2Hd3loJtAJ5kYpb&q=${encodeURI( category)}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}