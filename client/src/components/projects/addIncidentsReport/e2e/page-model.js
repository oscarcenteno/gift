import { Selector } from 'testcafe';

export default class Page {
    constructor() {
        this.reportDateInput = Selector('#reportDateInput');
        this.totalIncidentsInput = Selector('#totalIncidentsInputId');
        this.rationaleInput = Selector('#rationaleInputId');

        this.showFormButton = Selector('button').withText('Add incidents report');
        this.submitButton = Selector('button').withText('Add');
        this.closeButton = Selector('button span svg').withAttribute('aria-label', 'Close  Layer');
        this.cancelButton = Selector('button').withText('Cancel');
    }
}