import { createClient } from "contentful";
import { useEffect, useState } from "react";

console.log('Getting Acc Toxen: ');
console.log(import.meta.env.VITE_API_KEY);

const client = createClient({
    accessToken: import.meta.env.VITE_API_KEY,
    space: 'cokoppvoy6ef'   
  })


export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])


const getData = async() => {
    try {
        const response = await client.getEntries({content_type: 'projects'})
        console.log('Response : ')
        console.log(response.items);
        console.log(response.items[0].fields);
        const fetchedProjects = response.items.map((item) => {
            const {title, url, image} = item.fields
            const id = item.sys.id
            const img = image?.fields?.file?.url
            return {title, url, id, img}
        })
        setProjects(fetchedProjects)
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
    
}

useEffect(() => {
    getData()
}, [])

return {loading, projects}

}
