import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit{

  @Input()
  chartData: Array<any>;
  count: 0;
  minValue = 0;
  maxValue = 100;
  chartOptions: any = {
    vAxis: {
      minValue: 0,
      maxValue: 400
    }
  };

  ngOnInit() {
  }

  newChangeChartValue() {
    this.chartOptions = {
      title: "Hello ",
      vAxis: {
        minValue: this.minValue,
        maxValue: this.maxValue
      }
    }
  }

  oldChangeChartValue(){
    this.chartOptions.title= "Hello ";
    this.chartOptions.vAxis.minValue= this.minValue,
      this.chartOptions.vAxis.maxValue= this.maxValue
  }

}
