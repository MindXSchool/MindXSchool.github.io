const controller = {
  control: async () => {
    await controller.getData()
    controller.setUpListTeamChange()
    let data = model.listTeam
    view.showTimer(data)
    controller.removeControl()
  },
  getData: async () => {
    let result = await firebase.firestore()
      .collection('p1')
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
    await firebase.firestore().collection('p1').doc(id).delete()
  },
  setUpListTeamChange: async () => {
    let run = true;
    firebase.firestore().collection('p1').onSnapshot(async (snapshot) => {
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
  }
}