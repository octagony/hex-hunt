import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexGeneratorComponent } from './hex-generator.component';

describe('HexGeneratorComponent', () => {
  let component: HexGeneratorComponent;
  let fixture: ComponentFixture<HexGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
