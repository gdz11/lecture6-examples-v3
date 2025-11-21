import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticExample } from './static-example';

describe('StaticExample', () => {
  let component: StaticExample;
  let fixture: ComponentFixture<StaticExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
