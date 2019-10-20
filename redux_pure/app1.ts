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


const reducer: Reducer<number>  =
    (state = 0, action: Action) => {
        switch (action) {
            /* case value:
                break; */
            default:
                return state;
                break;
        }
};

console.log(reducer(0, null));
