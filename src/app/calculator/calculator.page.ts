import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display = "";
  currentNum = "";
  previousNum = "";
  operator = "";

  clear() {
    this.display = "";
    this.currentNum = "";
    this.previousNum = "";
    this.operator = "";
  }

  inputNum(num: string) {
    this.display += num;
    this.currentNum += num;
  }

  inputOperator(op: string) {
    if (this.currentNum) {
      if (this.previousNum && this.operator) {
        this.calculateResult();
      }
    }
    this.operator = op;
    this.previousNum = this.currentNum;
    this.currentNum = "";
    this.display += `${op}`;
  }

  inputDecimal() {
    if (!this.currentNum.includes(".")) {
      this.display += ".";
      this.currentNum += ".";
    }
  }

  changeSign() {
    if (this.currentNum) {
      if (this.currentNum.startsWith("-")){
        this.currentNum = this.currentNum.substring(1);
      } else {
        this.currentNum = "-" + this.currentNum;
      }
      this.display = this.previousNum + this.operator + this.currentNum;
    }
  }

  createPercentage() {
    if (this.currentNum) {
      this.currentNum = (parseFloat(this.currentNum) / 100).toString();

      if (this.previousNum) {
        this.display = this.previousNum + this.operator + this.currentNum;
      } else {
        this.display = this.currentNum;
      }
    }
  }

  calculateResult() {
    let result: number | string | undefined;
    const numOne = parseFloat(this.previousNum);
    const numTwo = parseFloat(this.currentNum);

    if (!isNaN(numOne) && !isNaN(numTwo)) {
      switch(this.operator) {
        case "+":
          result = numOne + numTwo;
          break;
        case "-":
          result = numOne - numTwo;
          break;
        case "×":
          result = numOne * numTwo;
          break;
        case "÷":
          if (numTwo !== 0) {
            result = numOne / numTwo;
          } else {
            result = undefined;
          }
          break;
      }
      if (result !== undefined) {
        this.display = result.toString();
        this.currentNum = result.toString();
      } else {
        this.display = "Error";
        this.currentNum = "";
      }

      this.previousNum = "";
      this.operator = "";
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      this.inputNum(key);
    } else if (key === '.') {
      this.inputDecimal();
    } else if (['+', '-', '*', '/'].includes(key)) {
      let selectedOperator = key;

      if (key === "*") {
        selectedOperator = "×";
      } else if (key === "/") {
        selectedOperator = "÷";
      }
      
      this.inputOperator(selectedOperator);
    } else if (key === 'Enter' || key === '=') {
      this.calculateResult();
    } else if (key === 'Backspace') {
        this.clear();
    } else if (key === '%') {
      this.createPercentage();
    } else if (key === 'Escape') {
      this.clear();
    }
  }
}
