import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../../services/ReportService';


@Component({
    selector: 'newCR-start',
    templateUrl: './newCR.start.component.html',
    styleUrls: ['./newCR.css'],
    providers: [ReportService]

})

export class NewCRStartComponent implements OnInit {
    title = 'Enter Report Details';
    @Input() reportFormData: any;

    constructor(private reportService: ReportService) {

    }

    ngOnInit() {
        this.reportFormData = this.reportService.getFormData();
    }

}