export const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7714cfdf32msh0b3a9ddabc22219p17efe5jsnb8fdaa68cce7',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1a0bd224b6msh6251d7fe90be911p196ab1jsndf97f7ecc3ec',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export default async (url, options) => {
    try {

        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            console.log('data obtained')
            return data
        }
        else {
            return
            throw new Error('there is a problem with the api')
        }
    }
    catch {
        console.log('error detected in the console')
    }
}