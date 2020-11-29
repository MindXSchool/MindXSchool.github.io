const utils ={
    getDataFromDoc(doc){
        let data = doc.data()
        data.id = doc.id
        return data
   
   },
   getDataFromDocs(docs){
       let result =[]
       for(let doc of docs){
           let data = utils.getDataFromDoc(doc)
           result.push(data)
        }
       return result
   },
   sweetAlert(icon, content) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: icon,
        title: content
    })
}
}