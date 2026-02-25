import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondocomponent } from './secondocomponent';

describe('Secondocomponent', () => {
  let component: Secondocomponent;
  let fixture: ComponentFixture<Secondocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondocomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
