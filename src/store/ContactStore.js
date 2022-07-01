import {makeAutoObservable} from "mobx";

export default class ContactStore {
    constructor() {
        this._users = [];
        makeAutoObservable(this);
    }

    setUsers(contacts) {
        this._users = contacts;
    }

    get getUsers() {
        return this._users;
    }

}