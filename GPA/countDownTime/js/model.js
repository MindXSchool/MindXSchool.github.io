const model = {
    listTeam: null,
    currentTem: null,
    saveListTeam(list){
        model.listTeam = list
    },
    saveCurrentteam(team){
        model.currentTem = team
    },
    pushDataToListTeam(data){
        model.listTeam.push(data)
    }
}