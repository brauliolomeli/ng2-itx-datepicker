import {Component, OnInit} from '@angular/core';

declare var require:any;
const normalSampleTpl: string = require('./sample-date-picker-normal.html');

@Component({
    selector: 'sample-date-picker-normal',
    template: normalSampleTpl
})

export class SampleDatePickerNormal implements OnInit {

    private myDatePickerNormalOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd.mm.yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '375px',
        selectionTxtFontSize: '18px',
        alignSelectorRight: false,
        indicateInvalidDate: true,
        showDateFormatPlaceholder: false,
        editableMonthAndYear: true,
        minYear: 1900
    };
    private selectedDateNormal:string = '';

    private selectedTextNormal: string = '';
    private border: string = 'none';

    constructor() {
        let date = new Date();
    }

    ngOnInit() {
        
    }

    onDateChanged(event:any) {
        console.log('onDateChanged(): ', event);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }
}