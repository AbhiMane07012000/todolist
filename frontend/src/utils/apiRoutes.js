export const host = "http://localhost:4000"
export const createTaskRoute= `${host}/api/v1/create`
export const getAllTaskRoute= `${host}/api/v1/getAllTask`
export const deleteTaskRoute = `${host}/api/v1/deleteTask/`

export const getAllTask = async() =>{
    try {
        const data = await fetch(getAllTaskRoute,{
          method:"get"
        })
        const Alltask = await data.json();
        return(Alltask);
              
      } catch (error) {
        console.log(error);
      }
}