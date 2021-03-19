import Route from '@ember/routing/route';
import recipes from '../config/recipes'
export default class RecipesRoute extends Route {
    model() {
        return recipes
    }
}
