import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quartocomponent } from './quartocomponent';

describe('Quartocomponent', () => {
  let component: Quartocomponent;
  let fixture: ComponentFixture<Quartocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quartocomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quartocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
