import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    setupController(){
        // this.transitionTo('recipes')
    }
    beforeModel(){
         this.transitionTo('recipes')
    }
}
