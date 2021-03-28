import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class RecipesController extends Controller {
    value = ''
    @computed('value')
    get data() {
        return this.value === '' ? this.model : this.model.filter(recipe => recipe.name.includes(this.value));
    }
}
