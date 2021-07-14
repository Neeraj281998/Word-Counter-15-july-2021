import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-panel-input',
  templateUrl: './panel-input.component.html',
  styleUrls: ['./panel-input.component.css']
})
export class PanelInputComponent  {
  enteredValue=""
  newPost=""
  lengthOfInput=0
  numOfWords=0
  upperCaseString=""
  lowerCaseString=""
  clearData=""




  constructor(){}

  paraLength(){

    this.newPost=this.enteredValue;
    this.lengthOfInput=this.newPost.length
    console.log("Button is working")
  }
  paraWords(){

    this.newPost=this.enteredValue;
    this.numOfWords=this.newPost.split(' ').length
  }
  UPPERCASE(){
    this.newPost=this.enteredValue.toUpperCase();
    this.upperCaseString=this.newPost
  }
  lowerCase(){
    this.newPost=this.enteredValue.toLowerCase();
    this.lowerCaseString=this.newPost
  }
  clearInput(){
    location.reload()
  }
  speakText(){

  }

}
