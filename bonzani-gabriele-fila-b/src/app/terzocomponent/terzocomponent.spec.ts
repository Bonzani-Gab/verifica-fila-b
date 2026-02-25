import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terzocomponent } from './terzocomponent';

describe('Terzocomponent', () => {
  let component: Terzocomponent;
  let fixture: ComponentFixture<Terzocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terzocomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terzocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
