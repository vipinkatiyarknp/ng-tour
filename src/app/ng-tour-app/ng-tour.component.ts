import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-page-tour',
  templateUrl: './ng-tour.component.html',
  styleUrls: ['./ng-tour.component.scss']
})
export class AppTourComponent implements OnInit, OnChanges {
  public inputPageTourConfig: any;
  public inputPanelWidth: any;
  public inputPopPadding: any;
  public inputSideBarWidth: any;
  public allTourElemsWithPos: any;
  public selectedTourElem: any;
  public index = 0;
  public showHideNext = true;
  public showHidePrev = false;
  constructor() {
  }
  @Input('pageTourConfig')
  set pageTourConfig(val: any) {
    this.inputPageTourConfig = val;
  }
  get pageTourConfig(): any {
    return this.inputPageTourConfig;
  }
  @Input('panelwidth')
  set panelwidth(val: any) {
    this.inputPanelWidth = val;
  }
  get panelwidth(): any {
    return this.inputPanelWidth;
  }
  @Input('sideBarWidth')
  set sideBarWidth(val: any) {
    this.inputSideBarWidth = val;
  }
  get sideBarWidth(): any {
    return this.inputSideBarWidth;
  }
  @Input('topPadding')
  set topPadding(val: any) {
    this.inputPopPadding = val;
  }
  get topPadding(): any {
    return this.inputPopPadding;
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.initData();
    }
  }

  initData() {
    setTimeout(() => {
      this.allTourElemsWithPos = this.inputPageTourConfig.map(item => {
        item.pos = $('#' + item.id).offset();
        return item;
      });
      console.log(this.allTourElemsWithPos);
      if (this.index === 0) {
        debugger;
        this.selectedTourElem = this.allTourElemsWithPos[0];
        const outSidePart = this.checkIfPopupGoingOutSideBrowserBoundaries(this.selectedTourElem.pos.left, this.inputPanelWidth);
        const desiredLeftPos = this.selectedTourElem.pos.left - this.inputSideBarWidth - outSidePart + 'px';
        const desiredTopPos = this.selectedTourElem.pos.top + this.inputPopPadding + 'px';
        $('.triangle').css('left', desiredLeftPos).css('top', '-10px');
        $('.panel-popup-tour').css('left', desiredLeftPos).css('top', desiredTopPos);
      }
      $('.panel-popup-tour').css('width', this.inputPanelWidth + 'px');
      $('.panel-popup-tour').show();
      $('.backdrop-tour-popup').show();
    }, 1000);
  }
  gotoNext() {
    this.showHidePrev = true;
    this.index++;
    if (this.allTourElemsWithPos[this.index] === undefined) {
      this.index++;
    }
    this.selectedTourElem = this.allTourElemsWithPos[this.index];
    const outSidePart = this.checkIfPopupGoingOutSideBrowserBoundaries(this.selectedTourElem.pos.left, this.inputPanelWidth);
    const desiredLeftPos = this.selectedTourElem.pos.left - this.inputSideBarWidth - outSidePart + 'px';
    const desiredTopPos = this.selectedTourElem.pos.top + this.inputPopPadding + 'px';

    const desiredLeftPosForTriangle = this.checkTrainglePos(this.selectedTourElem.pos.left, this.inputPanelWidth);

    $('.triangle').css('left', (desiredLeftPosForTriangle === 0 ? 10 : desiredLeftPosForTriangle) + 'px').css('top', '-10px');
    $('.panel-popup-tour').css('left', desiredLeftPos).css('top', desiredTopPos);
    if (this.index === this.allTourElemsWithPos.length - 1) {
      this.showHideNext = false;
    }

  }
  gotoPrev() {
    this.showHideNext = true;
    this.index--;
    if (this.allTourElemsWithPos[this.index] === undefined) {
      this.index--;
    }
    this.selectedTourElem = this.allTourElemsWithPos[this.index];

    const outSidePart = this.checkIfPopupGoingOutSideBrowserBoundaries(this.selectedTourElem.pos.left, this.inputPanelWidth);
    const desiredLeftPos = this.selectedTourElem.pos.left - this.inputSideBarWidth - outSidePart + 'px';
    const desiredTopPos = this.selectedTourElem.pos.top + this.inputPopPadding + 'px';

    const desiredLeftPosForTriangle = this.checkTrainglePos(this.selectedTourElem.pos.left, this.inputPanelWidth);

    $('.triangle').css('left', (desiredLeftPosForTriangle === 0 ? 10 : desiredLeftPosForTriangle) + 'px').css('top', '-10px');
    $('.panel-popup-tour').css('left', desiredLeftPos).css('top', desiredTopPos);
    if (this.index === 0) {
      this.showHidePrev = false;
    }
  }
  gotoClose() {
    $('.panel-popup-tour').hide();
    $('.backdrop-tour-popup').hide();
    this.index = 0;
    // this.dashboardService.showHideHelpPanel.next(false);
  }

  checkIfPopupGoingOutSideBrowserBoundaries(leftPost, width) {
    const BrowserWidth = $(document).width();
    const totalPopUpWidth = leftPost + width;

    if (totalPopUpWidth > BrowserWidth) {
      const partWhichIsOutside = totalPopUpWidth - BrowserWidth;
      return partWhichIsOutside + 20;
    } else {
      return 0;
    }
  }

  checkTrainglePos(leftPost, width) {
    const BrowserWidth = $(document).width();
    const totalPopUpWidth = leftPost + width;
    if (totalPopUpWidth > BrowserWidth) {
      const partWhichIsOutside = totalPopUpWidth - BrowserWidth;
      return partWhichIsOutside + 27;
    } else {
      return 0;
    }
  }
}
