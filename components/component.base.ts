export class ComponentBase 
{
    _showContainerCreate: Boolean;
    _showContainerEdit: Boolean;
    _showContainerDetails: Boolean;
    _showContainerFilters: Boolean;
    _showContainerImport: Boolean;

    constructor() {
        this.hideComponents();
    }

    hideComponents(): void {
        this._showContainerCreate = false;
        this._showContainerEdit = false;
        this._showContainerDetails = false;
        this._showContainerImport = false;
    }

    hideContainerCreate() {
        this._showContainerCreate = false;
    }

    hideContainerEdit() {
        this._showContainerEdit = false;
    }

    showContainerCreate() {
        this._showContainerCreate = true;
    }

    showContainerEdit() {
        this._showContainerEdit = true;
    }

    showContainerDetails() {
        this._showContainerDetails = true;
    }

    showContainerFilters() {
        this._showContainerFilters = true;
    }

    showContainerImport() {
        this._showContainerImport = true;
    }

}