import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightmodeComponent } from './nightmode.component';

describe('NightmodeComponent', () => {
  let component: NightmodeComponent;
  let fixture: ComponentFixture<NightmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightmodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
