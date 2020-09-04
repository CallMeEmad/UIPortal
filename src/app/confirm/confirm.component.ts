import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { CreditCardService } from '../service/credit-card.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor( public creditCard : CreditCardService,public router: Router) {}

  ngOnInit(): void {
  }


  public Transmit() : void {
    this.router.navigate(['/receipt']);
  }
  public BackToPortal() : void {
    this.router.navigate(['/portal']);
  }

}
