import Route from '@ember/routing/route';
import recipes from '../config/recipes'

export default class RecipeRoute extends Route {
    model(params){
        return recipes.filter(recipe => recipe.id === Number(params.id))
    }
}
