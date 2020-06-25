import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateItemComponent } from '../../components/create-item/create-item.component';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanDeactivate<CreateItemComponent> {
  canDeactivate(component: CreateItemComponent): Observable<boolean> | Promise<boolean> | boolean {
    if ( component.createForm.dirty ) {
      const title = component.createForm.get('title').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${title}?`);
    }
    return true;
  }

}
