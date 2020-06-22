import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ['./custom-mini-cart.component.scss']
})
export class CustomMiniCartComponent implements OnInit {
  iconTypes = ICON_TYPE;

  quantity$: Observable<number> = this.activeCartService.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string> = this.activeCartService.getActive().pipe(
    filter((cart) => !!cart.totalPrice),
    map((cart) => cart.totalPrice.formattedValue)
  );

  constructor(protected activeCartService: ActiveCartService) {}

  ngOnInit(): void {
  }
}
