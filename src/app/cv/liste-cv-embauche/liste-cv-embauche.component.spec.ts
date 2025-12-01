import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCvEmbaucheComponent } from './liste-cv-embauche.component';

describe('ListeCvEmbaucheComponent', () => {
  let component: ListeCvEmbaucheComponent;
  let fixture: ComponentFixture<ListeCvEmbaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCvEmbaucheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCvEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
