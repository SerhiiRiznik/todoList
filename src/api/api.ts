import axios from "axios";


const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})



class api {
   static getTodos(page:number=1) {
     return instance.get(`/todos?_page=${page}`)
   }

}

export {api}