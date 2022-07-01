import {makeAutoObservable} from "mobx";

export default class ContactStore {
    constructor() {
        this._contacts = [];
        makeAutoObservable(this);
    }

    setContacts(contacts) {
        this._contacts = contacts;
    }

    get contacts() {
        return this._contacts;
    }

}