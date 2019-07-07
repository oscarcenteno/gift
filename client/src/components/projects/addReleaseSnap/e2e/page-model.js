import { Selector } from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';

export default class Page {
    constructor() {
        this.nameInput = Selector('#releaseNameInput');
        this.dateInput = Selector('#releaseDate');

        this.showFormButton = Selector('button').withText('Add release snap');
        this.submitButton = Selector('button').withText('Add');
        this.closeButton = Selector('button span svg').withAttribute('aria-label', 'Close  Layer');
        this.cancelButton = Selector('button').withText('Cancel');
    }
}