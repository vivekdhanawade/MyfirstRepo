let array = [
    {
        name:"vivek",
        designation: "SDE"
    },
    {
        name: "Rohit",
        designation: "DEV"

    }
]
function showData(){
    setTimeout(() => {

        let data = "";
        array.forEach((newArray,index)=>{
          
            data+= `<li>${newArray.name}</li>`
        })
        document.body.innerHTML= data
        
    }, 1000);
}
showData();


function createData(x,y){
    setTimeout(() => {
        array.push(x)
        y();


    }, 9000);
}
createData({name:"surya",designation:"dev2"},showData)

        

