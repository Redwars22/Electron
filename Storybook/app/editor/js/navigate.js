

class Navigator {
    route;

    setRoute(path){
        if(path == 'brainstorm') this.route = '../brainstorm/brainstorm.html';
        if(path == 'characters') this.route = '../characters/index.html';

        return undefined;
    }

    navigate(){
        window.location.replace(this.route);
    }
}

const nav = new Navigator();

function handleNavigate(path){
    nav.setRoute(path);
    nav.navigate();
}