// Definimos los interfaces
// para las action: los objetos que definiran las acciones
// para los reducers: las funciones puras que retornan un estado

interface Action {
    type: string;
    payload?: any;
}


// Se usan genericos para que el tipo quede definido dinámicamente
interface Reducer<T> {
    // tslint:disable-next-line: callable-types
    (oldState: T, action: Action): T;
}

// el Store recoge varios reducers
// proporciona metodos capaces de:
// acceder al Store
// ejecutar (dispatch) acciones

class Store<T> {
    private state: T;

    constructor(
        private reducer: Reducer<T>,
        initialState: T) {

        this.state = initialState;

    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
    }
}


const countReducer: Reducer<number>  =
    (state = 0, action: Action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case 'PLUS':
                    return state + action.payload;
            default:
                return state;
        }
};

const incrementAction: Action = {
    type: 'INCREMENT'
};

const decrementAction: Action = {
    type: 'DECREMENT'
};

const plusAction: Action = {
    type: 'PLUS',
    payload : 10
};

/*     console.log(countReducer(0, incrementAction));
    console.log(countReducer(10, incrementAction));
    console.log(countReducer(10, decrementAction));
    console.log(countReducer(10, plusAction)); */


const store = new Store(countReducer, 0);

console.log('Estado inicial', store.getState());
store.dispatch(plusAction);
console.log('Estado nuevo', store.getState());
