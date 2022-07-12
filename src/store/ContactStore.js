import {makeAutoObservable} from "mobx";

export default class ContactStore {
    constructor() {
        this._users = [];
        this._isLoading = false;
        makeAutoObservable(this);
    }

    setUsers(contacts) {
        this._users = contacts;
    }

    setIsLoading(bool){
        this._isLoading = bool;
    }

    get getUsers() {
        return this._users;
    }

}