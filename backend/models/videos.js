import fs from 'fs/promises'


// NOTE : This is not an actual ORM, but a mock used to demonstrate how we would write our code in a real life environment
// This file handles the read of the videos.json file and exports a get function for said file

const getVideos = async () => {
    // const ROUTE = '../../videos.json'
    const ROUTE = 'C:\\CodeProjects\\CodeInterview\\Peech\\videos.json'

    const moviesString = await fs.readFile(ROUTE,'utf-8')
    const moviesArray = await JSON.parse(moviesString)

    return moviesArray
}

export default getVideos