/* import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
    subscriber.next('Valor 1');
    subscriber.next('Valor 2');
    setTimeout(() => {
        subscriber.next('Valor 3');
        subscriber.complete(); // Finaliza la emisión
    }, 2000);
});

observable.subscribe({
    next: value => console.log("Es: " + value),
    complete: () => console.log('Observable finalizado')
}); */

// OF
/* import { of } from 'rxjs';

const obs = of(10, 20, 30);
console.log(obs);
obs.subscribe(console.log); */

// FROM
/* import { from } from 'rxjs';

const obs = from([1, 2, 3, 4]); // Desde un array
console.log(obs);
obs.subscribe(console.log);
const obsPromise = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
obsPromise.subscribe(res => res.json().then(console.log)) */

// INTERVAL
/* import { interval } from 'rxjs';
const obs = interval(1000); // Emite cada segundo
obs.subscribe(console.log); */

// FROM EVENT
/* import { fromEvent } from 'rxjs';
const clickObservable = fromEvent(window.document, 'click');
clickObservable.subscribe(() => console.log('Clic detectado!')); */

// MAP (transformar)
/* import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(
    map(num => num * 10)
).subscribe(console.log); */

// FILTER (filtrar)
/* import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6).pipe(
    filter(num => num % 2 === 0)
).subscribe(console.log); */

// MERGEMAP (combinar datos)
/* import { fromEvent, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
    mergeMap(() => interval(500))
).subscribe(console.log); */

// Manejo de errores en observables
/* import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Capturar Errores
const obs = throwError(() => new Error('¡Ocurrió un error!')).pipe(
    catchError(err => {
        console.error(err.message);
        return of('Valor alternativo'); // Retorna un valor seguro
    })
);
obs.subscribe(console.log); */

// Desuscripción de un Observer
/* import { interval } from 'rxjs';

const subscription = interval(1000).subscribe(console.log);
setTimeout(() => {
    subscription.unsubscribe(); // Detiene la suscripción tras 5s
    console.log('Observador cancelado');
}, 5000); */

//Con take() take(n) detiene la emisión tras n valores.
/* import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interval(1000).pipe(take(5)).subscribe(console.log); */

// Creando un Mutation Observer básico
// Seleccionar el nodo a observar
const targetNode = document.getElementById('observed');

// Crear un nuevo observador
/* const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.log('Cambio detectado:', mutation);

        if (mutation.type === 'attributes') {
            console.log(`Atributo cambiado: ${mutation.attributeName}`);
        }

        if (mutation.type === 'childList') {
            console.log('Nodos agregados o eliminados:', mutation);
        }
    });
});

// Configurar opciones de observación
const config = { childList: true, subtree: true, attributes: true };

// Iniciar la observación
observer.observe(targetNode, config);

// Simular cambio en el DOM
setTimeout(() => {
    targetNode.textContent = 'Nuevo contenido inyectado desde JS!';
}, 3000);

// Simular cambio en atributo
setTimeout(() => {
    targetNode.setAttribute('class', 'container my-5 bg-light p-5');
}, 4000);

// Agregar un nuevo elemento al DOM
setTimeout(() => {
    const newElement = document.createElement('p');
    newElement.innerHTML = 'Nuevo párrafo agregado desde JS! <span class="badge text-bg-danger">Nuevo</span></h1>';
    newElement.className = "alert alert-primary"
    targetNode.appendChild(newElement);
}, 5500);

// Cancelación del Observer
setTimeout(() => {
    observer.disconnect();
    console.log('Observación detenida');
}, 5000); */


// Definimos un observer más avanzado
/* const observer = new MutationObserver(mutations =>
    mutations.forEach(({ type, attributeName, addedNodes, removedNodes }) => {
        console.log(
            type === 'attributes' ? `Atributo cambiado: ${attributeName}` :
            type === 'childList' ? `Nodos agregados/eliminados: ${addedNodes} ${removedNodes}` :
            'Cambio en el contenido del nodo de texto'
        );
    })
);

observer.observe(targetNode, { attributes: true, childList: true, characterData: true, subtree: true });
setTimeout(() => {
    targetNode.setAttribute('class', 'nueva-clase');
    targetNode.appendChild(Object.assign(document.createElement('div'), { textContent: 'Elemento nuevo' }));
}, 2000); */