import Route from '@ember/routing/route';

export default class RecipeRoute extends Route {
    model(params){
        console.log(params)
    }
}
