import { async, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  interface Suite {
    component: NotFoundComponent;
  }

  let suite: Suite = {} as any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    })
      .compileComponents();
    suite.component = TestBed.createComponent(NotFoundComponent).componentInstance;
  }));

  it('should create', () => {
    expect(suite.component).toBeTruthy();
  });
});
