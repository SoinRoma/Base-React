import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._isLoading = false;
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setLoading(bool){
        this._isLoading = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

}