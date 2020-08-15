const view = {};
view.setAtiveScreen = (screenName) => {
    switch (screenName) {
        case 'homeScreen':
            document.getElementById("app").innerHTML = compoments.homeScreen;
        break;
    }
}

