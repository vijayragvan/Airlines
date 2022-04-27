import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketUploadComponent } from './ticket-upload.component';

describe('TicketUploadComponent', () => {
  let component: TicketUploadComponent;
  let fixture: ComponentFixture<TicketUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
