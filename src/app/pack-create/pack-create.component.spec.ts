import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCreateComponent } from './pack-create.component';

describe('PackCreateComponent', () => {
  let component: PackCreateComponent;
  let fixture: ComponentFixture<PackCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
