import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
    declarations: [PaginationComponent],
    imports: [CommonModule, RouterModule],
    exports: [PaginationComponent]
})

export class PaginationModule { }