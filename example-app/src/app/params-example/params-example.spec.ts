import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsExample } from './params-example';

describe('ParamsExample', () => {
  let component: ParamsExample;
  let fixture: ComponentFixture<ParamsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
