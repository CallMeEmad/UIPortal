import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../service/credit-card.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(public creditCard : CreditCardService) { }

  ngOnInit(): void {
  }

}
