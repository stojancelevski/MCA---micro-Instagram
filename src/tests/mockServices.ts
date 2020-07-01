import { of } from 'rxjs';

export const httpClientMock = jasmine.createSpyObj(
  'HttpClient', [
    'get',
    'post',
    'put',
    'delete'
  ]
);

export const apiServiceMock = jasmine.createSpyObj('ApiService', [
  'getItems',
  'createItem',
  'updateItem',
  'deleteItem',
  'resolveHeaders'
])

export class MdDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of([true])
    };
  }
}
