import { CarrinhoComponent } from './../carrinho/carrinho.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-NaviBar',
  templateUrl: './NaviBar.component.html',
  styleUrls: ['./NaviBar.component.css']
})
export class NaviBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }
    const dialogRef = this.dialog.open(CarrinhoComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
