let dom = document.querySelector('#test')
dom.onsubmit = (e)=>{
    e.preventDefault()
    let idTeam = dom.id.value
    let room = dom.room.value
    localStorage.setItem('room',room)
    if(idTeam){
        data = {
            name: idTeam,
            timer: new Date().getTime()
        }
        addData(data,room)
        // let a = getData()
        // console.log(a)
    }
}



async function addData(data,p) {
    await firebase.firestore()
        .collection(p)
        .add(data)
}

async function getData(){
    let result = await firebase.firestore()
    .collection('p1')
    .get()
    let data = getDataFromDocs(result.docs)
    console.log(data)
}




let getDataFromDoc = (doc) =>{
    let data = doc.data()
    data.id = doc.id
    return data

}
let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}

