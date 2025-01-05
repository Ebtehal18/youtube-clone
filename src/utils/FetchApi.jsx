import axios from "axios";

const Base_Url='https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '7e9896be63mshf467dbf8aec9978p185a42jsn68355a23bcb8',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

export  const FetchApi= async(url)=>{
const {data}= await axios.get(`${Base_Url}/${url}`,options)
return data
} 