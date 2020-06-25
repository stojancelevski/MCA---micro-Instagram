import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditItemComponent } from '../../components/edit-item/edit-item.component';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanDeactivate<EditItemComponent> {
  canDeactivate(component: EditItemComponent): Observable<boolean> | Promise<boolean> | boolean {
    if ( component.itemForm.dirty ) {
      const title = component.itemForm.get('title').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${title}?`);
    }
    return true;
  }

}
