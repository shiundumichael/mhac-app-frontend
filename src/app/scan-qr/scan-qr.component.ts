import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent implements OnInit {

  errorMsg = "";

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccess(result: string) {
    if (result.indexOf("www") > -1 || result.indexOf("http") > -1) {
      location.href = result;
    } else {
      console.log("QR Code scanned is not URL", result);
      this.errorMsg = result + " is not a valid URL. Please scan again";
    }
  }

}
