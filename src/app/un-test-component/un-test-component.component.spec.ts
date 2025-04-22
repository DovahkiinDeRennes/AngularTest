import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnTestComponentComponent } from './un-test-component.component';

describe('UnTestComponentComponent', () => {
  let component: UnTestComponentComponent;
  let fixture: ComponentFixture<UnTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnTestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
