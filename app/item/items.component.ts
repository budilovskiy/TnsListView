import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";

import {ItemService} from "./item.service";
import {ListView} from "tns-core-modules/ui/list-view";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "items.component.html"
})
export class ItemsComponent implements OnInit {
    @ViewChild("listview") listViewElem: ElementRef;

    constructor(private itemService: ItemService) {
    }


    private scrollToBottom(lv: ListView) {
        console.log("listView exists: " + !!lv);
        console.log("listview.items.length: " + lv.items.length);
        if (lv && lv.items.length > 0) {
            lv.scrollToIndex(lv.items.length - 1);
            lv.refresh();
            console.log("scrolled");
        }
    }

    ngOnInit() {
        console.log("ngOnInit event");
        this.listViewElem.nativeElement.items = this.itemService.getItems();
    }

    public listviewLoaded(args){
        console.log("listview loaded");
        this.scrollToBottom(this.listViewElem.nativeElement);
    }

}
