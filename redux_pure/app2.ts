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

{
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

    console.log(countReducer(0, incrementAction));
    console.log(countReducer(10, incrementAction));
    console.log(countReducer(10, decrementAction));
    console.log(countReducer(10, plusAction));
}
