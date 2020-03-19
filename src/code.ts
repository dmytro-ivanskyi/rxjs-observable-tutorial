import { Observable } from 'rxjs/Observable';

const observable = Observable.create((observer: any) => {
    try {
    observer.next('Hey quys!');
    observer.next('How are you?');
    observer.complete();
    observer.next('This will not send');
    } catch(err) {
        observer.error(err)
    }
});

observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
    );

function addItem(val: any) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
