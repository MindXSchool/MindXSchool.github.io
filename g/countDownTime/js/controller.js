const controller = {
  control: async () => {
    await controller.getData()
    controller.setUpListTeamChange()
    let data = model.listTeam
    view.showTimer(data)
    controller.removeControl()
  },
  getData: async () => {
    let room = await controller.getIdRoom()
    let result = await firebase.firestore()
      .collection(room)
      .get()
    let data = utils.getDataFromDocs(result.docs)
    await model.saveListTeam(data)
  },
  removeControl: () => {
    let data = model.listTeam
    for (let i in data) {
      let dom = document.querySelector(`#bt${data[i].id}`)
      dom.addEventListener('click', () => {
        controller.removeOnFB(model.listTeam[i].id)
      })
    }
  },
  removeOnFB: async (id) => {
    let room = await controller.getIdRoom()
    await firebase.firestore().collection(room).doc(id).delete()
  },
  setUpListTeamChange: async () => {
    let room = await controller.getIdRoom()
    let run = true;
    firebase.firestore().collection(room).onSnapshot(async (snapshot) => {
      if (run) {
        run = false
        return
      }
      await controller.getData()
     await view.showTimer(model.listTeam)


      
      // let docChanges = snapshot.docChanges()
      // for (let docChange of docChanges) {
      //   let type = docChange.type
      //   if (type == 'added' || type =="remove") {
      //     await controller.getData()
      //     view.showTimer(model.listTeam)
      //   }

      // }
    })
  },
  getIdRoom: ()=>{
    return localStorage.getItem('room')
  }
}