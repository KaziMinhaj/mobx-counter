import { makeAutoObservable } from "mobx"

class Counter {
    
    constructor() {
        this.count = 0;
        makeAutoObservable(this);
    }

    increaseCount()
    {
        this.count++;
    }

    decreaseCount()
    {
        this.count--;
    }
}

export default Counter;