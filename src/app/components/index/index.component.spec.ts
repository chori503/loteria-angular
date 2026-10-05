import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => component.killTimer());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the first card on init', () => {
    expect(component.cardNameSelected).not.toBe('');
  });

  it('should mark a table as winner only when all its cards were discovered', () => {
    const table = { id: 99, cardIds: [1, 2] };
    component.discoveredCards = [{ id: 1 }, { id: 2 }] as any;
    component.evaluateTable(table);
    expect(component.tableResults[99]).toBe(true);

    component.discoveredCards = [{ id: 1 }] as any;
    component.evaluateTable(table);
    expect(component.tableResults[99]).toBe(false);
  });
});
