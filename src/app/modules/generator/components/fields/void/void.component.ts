import { Component, Input, OnInit } from '@angular/core';
import { ContainerConfigField } from '../../../models/container';

@Component({
    templateUrl: './void.component.html',
    styleUrls: ['./void.component.scss']
})
export class VoidComponent implements OnInit {

    @Input() field: ContainerConfigField;

    constructor() {
    }

    ngOnInit() {
    }

}
