import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../types/item';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [MessageService]
})
export class ItemsComponent implements OnInit {

  items!: Item[]

  clonedItems: { [s: number]: Item } = {}

  constructor(private itemService: ItemsService, private messageService: MessageService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onRowEditInit(item: Item) {
    this.clonedItems[item.id] = { ...item }
  }

  onRowEditSave(item: Item) {
    if (item.ek > 0 && item.vk > 0) {
        delete this.clonedItems[item.id];
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }

  onRowEditCancel(item: Item, index: number) {
    this.items[index] = this.clonedItems[item.id];
    delete this.clonedItems[item.id];
  }
}
