import {Component, OnInit} from '@angular/core';

declare var require:any;
const inlineSampleTpl: string = require('./sample-date-picker-inline.html');

@Component({
    selector: 'sample-date-picker-inline',
    template: inlineSampleTpl
})

export class SampleDatePickerInline implements OnInit {
    // disableUntil: {year: 0, month: 0, day: 0}
    private myDatePickerInlineOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'su',
        sunHighlight: true,
        height: '34px',
        width: '375x',
        inline: true
    };
    private selectedDateInline: string = '';

    private selectedTextInline: string = '';
    private border: string = 'none';
    private locale:string = '';

    private locales:Array<string> = new Array('en', 'fr', 'ja', 'fi', 'es');
    
    constructor() {
        let date = new Date();
        this.selectedDateInline = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

        // Disable dates from 5th backward
        date.setDate(date.getDate() - 5);
        // this.myDatePickerInlineOptions.disableUntil = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    }

    ngOnInit() {
        
    }

    onChangeLocale(locale:string) {
        this.locale = locale;
    }

    onDateChanged(event:any) {
        console.log(event);
        if(event.formatted !== '') {
            this.selectedTextInline = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';
        }
        else {
            this.selectedTextInline = '';
            this.border = 'none';
        }
    }
}
