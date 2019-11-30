import { Component, OnInit } from '@angular/core';
import { MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  SimpleSnackBar
} from '@angular/material'
  
@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  // actionButtonLabel: string = 'Retry';
  // action: boolean = true;
  // setAutoHide: boolean = true;
  // autoHide: number = 2000;
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  // snackBar:MatSnackBar
  constructor() { }

  ngOnInit() {
  }

  Open(Message:string) {
    // let config = new MatSnackBarConfig();
    // config.verticalPosition = this.verticalPosition;
    // config.horizontalPosition = this.horizontalPosition;
    // config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    // this.snackBar.open(Message, this.action ? this.actionButtonLabel : undefined, config);

    let snack: SimpleSnackBar
    snack.action()
  }

}
