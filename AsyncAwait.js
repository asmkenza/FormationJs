const baseUrl = "https://jsonplaceholder.typicode.com"

// const getUsers = () => {
//     fetch(`${baseUrl}/users`)
//     .then((res)=> {
//         return res.json()
//     })
//     .then((data)=>{
    
//         console.log(data)
//     })
//     .catch((error)=>{
//        console.log(error, "Server Error")
//     })
// }

// getUsers()



const getComments = async () => {
    const response = await fetch(`${baseUrl}/comments`);
    const data= await response.json(); 
    console.log(data); 
}

getComments()