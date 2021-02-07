(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\construction-works\src\main.ts */"zUnb");


/***/ }),

/***/ "0MQo":
/*!********************************************************!*\
  !*** ./src/app/modules/about-us/about-us.component.ts ***!
  \********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutUsComponent {
    constructor() {
        this.whg = { title: "World How Group (Pty) Ltd", description: "An organisation that specializes in Construction, Architectural Designs and Project Management. We provide new building construction services, Extensions, Renovations, productions houses and upscale buildings." };
        this.missionStatement = { title: "Mission Statement", description: "To render/deliver the highest level of quality services at fair and competitive prices , to maintain the highest level of professionalism, integrity, honest and fairness in our relationship with our suppliers and customers ." };
        this.visionStatement = { title: "Vision Statement", description: "Ensure that everyone is getting quality and fair for their payment .(Ensure value for money for every client) " };
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 19, vars: 6, consts: [[1, "jumbotron", "jumbotron-fluid", "p-3", "mb-2", "bg-info", "text-white"], [1, "container", "text-white", "py-4"], [1, "display-4", "text-center"], [1, "lead", "text-center"], [1, "container"], [1, "row"], [1, "col-6", "pr-2"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.whg.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.whg.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.missionStatement.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.missionStatement.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.visionStatement.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.visionStatement.description, " ");
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin-bottom: 30px;\r\n  height: 100vh;\r\n  \r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 5rem 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 1rem 1rem;\r\n  font-size: clamp(1rem, 2vw, 1rem);\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-left: 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n  border: 0;\r\n  border-radius: 15px;\r\n  padding: 0;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #f67438;\r\n  border: 1px solid #f67438;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0 2rem;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n  text-transform: uppercase;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  border-color: #f8844e;\r\n  background-color: #f67438;\r\n  color: #fff;\r\n}\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 5rem 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .swop[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztBQUN2QztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoiYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBtYXJnaW46IDZyZW0gMXJlbTsgKi9cclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBtYXgtaGVpZ2h0OiA1MHZoOyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDZyZW07ICovXHJcbn1cclxuXHJcbi53cmFwcGVyIC5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucGljc3VtLWltZy13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHtcclxuICBtYXJnaW46IDVyZW0gMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHAge1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxcmVtKTtcclxufVxyXG4uY29udGFpbmVyIC5yb3cgLmN1c3RvbSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmNjc0Mzg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2NzQzODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jb250YWluZXIgLnJvdyBidXR0b246aG92ZXIgYSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjg4NDRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjc0Mzg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAucm93IGgxIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgPiAucm93IGgxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnN3b3Age1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AKec":
/*!************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.component.ts ***!
  \************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactUsComponent {
    constructor() {
        this.contact = { title: "Contact Info", email: "worldhowgroup@gmail.com",
            address: ["07 lander Street", "Thulisa Park", "Johannesburg", "2197"],
            cell: "+27 78 414 2976 | +27 65 226 9412 | +27 65 272 5341",
            fName: "First Name",
            frmHeader: "Send Message",
            lName: "Last Name",
            emailAddress: "Email Address",
            mobileNumber: "Mobile Number",
            msg: "Write Your Message...",
            btnText: "Send",
            locationUrl: "../../../assets/location.png",
            mailUrl: "../../../assets/mail.png",
            callUrl: "./../../../assets/call-5.png",
            alt: "icon image",
            imgWidth: "20px"
        };
    }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 54, vars: 22, consts: [[1, "my-0"], [1, "container", "py-4"], [1, "container-info"], [1, "info"], [3, "src", "alt", "width"], [1, "contactForm"], [1, "formBox"], [1, "inputBox", "w50"], ["type", "text", "name", "", "required", ""], ["type", "email", "name", "", "required", ""], [1, "inputBox", "w100"], ["name", "", "required", ""], ["type", "submit", "value", "Send"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.locationUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.contact.alt)("width", ctx.contact.imgWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.address[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.address[1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.address[2], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.address[3], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.mailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.contact.alt)("width", ctx.contact.imgWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.callUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.contact.alt)("width", ctx.contact.imgWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.cell);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.frmHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.fName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.lName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.msg);
    } }, styles: [".custom[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(34, 33, 33, 0.5);\r\n  border-radius: 5px;\r\n  height: 80vh;\r\n  margin: 1rem auto;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 50vw;\r\n  align-items: center;\r\n  box-shadow: 0px 2px 2px 4px rgba(70, 69, 69, 0.5);\r\n}\r\n\r\n\r\n\r\n.section[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  \r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  background: #112d42;\r\n  top: -30px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  background: #03a9f4;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n  min-height: 550px;\r\n  display: flex;\r\n  z-index: 1000;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40px;\r\n  width: 350px;\r\n  height: calc(100% - 80px);\r\n  background: #0f3959;\r\n  z-index: 1;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 20px 0;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  list-style-type: none;\r\n  display: flex;\r\n  margin: 20px 0;\r\n  cursor: pointer;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  width: 30px;\r\n  min-width: 30px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1)   img[_ngcontent-%COMP%] {\r\n  min-width: 100%;\r\n  filter: invert(1);\r\n  opacity: 0.5;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  color: #fff;\r\n  margin-left: 10px;\r\n  font-weight: 300;\r\n  opacity: 0.5;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1)   img[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  opacity: 1;\r\n  \r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin-right: 15px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  filter: invert(1);\r\n  opacity: 0.5;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 90px 50px;\r\n  background: #fff;\r\n  margin-left: 150px;\r\n  padding-left: 250px;\r\n  width: calc(100% - 150px);\r\n  height: 100%;\r\n  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #0f3959;\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  padding-top: 30px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 0px 0px 35px 0px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w50[_ngcontent-%COMP%] {\r\n  width: 47%;\r\n  margin: 0 5px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w100[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100% !important;\r\n  padding: 5px 0;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  color: #333;\r\n  border: none;\r\n  border-bottom: 1px solid #777;\r\n  outline: none;\r\n  margin-bottom: 25px;\r\n  margin-top: 20px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  min-height: 120px;\r\n  padding: 15px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  padding: 5px 0;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  color: #333;\r\n  transition: 0.5s;\r\n  pointer-events: none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w100[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\r\n  transform: translateY(-20px);\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  letter-spacing: 1px;\r\n  color: #f67438;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background: #0f3959;\r\n  color: #fff;\r\n  border: none;\r\n  max-width: 150px;\r\n  padding: 12px;\r\n  border-radius: 20px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background: #f67438;\r\n}\r\n\r\n@media screen and (max-width: 986px) {\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n  }\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%] {\r\n    position: static;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    width: 100%;\r\n  }\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w50[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w100[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzMsIDMzLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCA0cHggcmdiYSg3MCwgNjksIDY5LCAwLjUpO1xyXG59XHJcblxyXG4vKiBpbnB1dCB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59ICovXHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogLTEwcHg7ICovXHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMTEyZDQyO1xyXG4gIHRvcDogLTMwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb246OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAzYTlmNDtcclxufVxyXG5cclxuc2VjdGlvbiAuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogbWluLXdpZHRoOiAxMTAwcHg7ICovXHJcbiAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIGJhY2tncm91bmQ6ICMwZjM5NTk7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIGgyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWluZXItaW5mbyAuaW5mbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIC5pbmZvIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIGxpIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB3aWR0aDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gbGkgc3BhbjpudGgtY2hpbGQoMSkgaW1nIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIGxpIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWluZXItaW5mbyBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKSBpbWcsXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogY29sb3I6ICNmNjc0Mzg7ICovXHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLnNjaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLnNjaSBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLnNjaSBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLnNjaSBsaSBhIGltZyB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIC5zY2kgbGk6aG92ZXIgYSBpbWcge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA5MHB4IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDUwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSBoMiB7XHJcbiAgY29sb3I6ICMwZjM5NTk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDBweCAwcHggMzVweCAwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94Lnc1MCB7XHJcbiAgd2lkdGg6IDQ3JTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveC53MTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dCxcclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhIHtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94LncxMDAgc3BhbiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgfiBzcGFuLFxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCB0ZXh0YXJlYTpmb2N1cyB+IHNwYW4sXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OnZhbGlkIH4gc3Bhbixcclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWE6dmFsaWQgfiBzcGFuIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6ICNmNjc0Mzg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzBmMzk1OTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNjc0Mzg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4NnB4KSB7XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveC53NTAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLnNjaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSBoMiB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzEwMCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhaW5lci1pbmZvIC5pbmZvIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFpbmVyLWluZm8gLmluZm8gbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LZPd":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/main/main.component.ts ***!
  \**********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainComponent {
    constructor() {
        this.btnText = "Find Out More";
        this.jumbotron = {
            title: "WORLD HOW GROUP (PTY) LTD.",
            subTitle: "Diversification | Innovation | Competitive",
            text: "An organization that specializes in Construction, Architectural Designs and Project Management. We provide new building construction services, Extensions, Renovations, productions houses and upscale buildings."
        };
        this.serviceSection = {
            title: "We Build Dreams",
            text: "Quality guaranteed building services through our vast experience and highly skilled personnel.",
            imgUrl: "./../../../../assets/thomas-bennie-kws8dJ9wfwc-unsplash.jpg"
        };
        this.experienceSection = {
            title: "Best experience guaranteed",
            text: "Get a call or an email from one of our highly qualified staff today",
            imgUrl: "../../../../assets/tebogo-losaba-ybjhQsdXxzY-unsplash.jpg"
        };
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 39, vars: 12, consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "custom"], [1, "mx-auto"], [1, "custom"], ["mat-stroked-button", "", "color", "primary"], ["routerLink", "/about"], [1, "col-xs-12", "col-sm-12", "col-md-6"], ["routerLink", "/services"], ["alt", "pic here", 3, "src"], [1, "row", "swop"], ["alt", "pic hear", "width", "500px", "height", "400px", 3, "src"], ["routerLink", "/contact"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jumbotron.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jumbotron.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jumbotron.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serviceSection.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serviceSection.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.serviceSection.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.experienceSection.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experienceSection.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experienceSection.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin-bottom: 30px;\r\n  height: 100vh;\r\n  \r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 5rem 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 1rem 1rem;\r\n  font-size: clamp(1rem, 2vw, 1rem);\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-left: 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n  border: 0;\r\n  border-radius: 15px;\r\n  padding: 0;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #f67438;\r\n  border: 1px solid #f67438;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0 2rem;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n  text-transform: uppercase;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  border-color: #f8844e;\r\n  background-color: #f67438;\r\n  color: #fff;\r\n}\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 5rem 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .swop[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogbWFyZ2luOiA2cmVtIDFyZW07ICovXHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogbWF4LWhlaWdodDogNTB2aDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiA2cmVtOyAqL1xyXG59XHJcblxyXG4ud3JhcHBlciAucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBpY3N1bS1pbWctd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ucGljc3VtLWltZy13cmFwcGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnJvdyB7XHJcbiAgbWFyZ2luOiA1cmVtIDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnJvdyBwIHtcclxuICBtYXJnaW46IDFyZW0gMXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMXJlbSk7XHJcbn1cclxuLmNvbnRhaW5lciAucm93IC5jdXN0b20ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmNjc0Mzg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2NzQzODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jb250YWluZXIgLnJvdyBidXR0b246aG92ZXIgYSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjg4NDRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjc0Mzg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAucm93IGgxIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciA+IC5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cmVtIDFyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyID4gLnJvdyBoMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgLnJvdyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zd29wIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hero/hero.component */ "e77x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'construction-works';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TXx3":
/*!****************************************************************!*\
  !*** ./src/app/modules/our-services/our-services.component.ts ***!
  \****************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function OurServicesComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r8, " ");
} }
function OurServicesComponent_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counterTop_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", counterTop_r9, " ");
} }
function OurServicesComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stone_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stone_r10, " ");
} }
function OurServicesComponent_ul_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const woodenFloor_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", woodenFloor_r11, " ");
} }
function OurServicesComponent_ul_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bedroomItem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bedroomItem_r12, " ");
} }
function OurServicesComponent_ul_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bathroomItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bathroomItem_r13, " ");
} }
function OurServicesComponent_ul_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const designAndDrawingItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", designAndDrawingItem_r14, " ");
} }
function OurServicesComponent_ul_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const designAndDrawingItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", designAndDrawingItem_r15, " ");
} }
class OurServicesComponent {
    constructor() {
        this.counterTop = {
            title: "Granite, Quartz & Caesarstone Counter tops",
            counterTops: [
                "We are the leaders in the provision of natural and engineered stone products at fair prices",
                "We have the capacity to meet the market demand at any time as we are always stocked with a wide range of the following stones",
            ]
        };
        this.ourService = {
            title: "Our services include",
            ourServicesInclude: [
                "Bricklaying",
                "Plastering",
                "Tiling",
                "Flooring",
                "Paving",
                "Roofing",
                "Ceiling"
            ]
        };
        this.header = "We Build Dreams";
        this.text = "Run and manage building projects from inception to completion within reasonably agreed time frames successfully Quality guaranteed building services through our vast experience and highly skilled personnel. Provide state of the art Refurbishment, Renovations and Building Extension Services. Our specific areas of specialty are: ";
        this.bedroom = { title: "BedRoom Fittings", bedrooms: ["For bathrooms we can build and install functional and stunning Vanity sets.",
                "We build it with the sink or around the sink as per your specification.", "It can be a contemporary floating design or a traditional fixed to the wall design.",
                "It is our technical abilities that allow us to complete the bathroom of your dreams."] };
        this.bathroom = { title: "Bathroom Fittings", bathrooms: [
                "For bathrooms we can build and install functional and stunning Vanity sets.",
                "We build it with the sink or around the sink as per your specification.",
                "It can be a contemporary floating design or a traditional fixed to the wall design. ",
                "It is our technical abilities that allow us to complete the bathroom of your dreams."
            ] };
        this.stone = { title: "We Offer A variety of stones", stones: ["Granite (different colours)", "Marble", "Quartz", "Caesarstone"] };
        this.drawingsAndDesign = { title: "Architectural Design and Drawing", designAndDrawings: ["We strive on innovative and creative modern 3-D designs", "We provide professional advice on client building plan designs that are tailor made for their tastes and preferences."] };
        this.woodenFlooring = { title: "Wooden Flooring", woodenFloorings: ["We pride ourselves on quality and only supply products that are manufactured to the highest standards in the following ranges", "Laminate flooring", "SPC and RCB Vinyl Flooring", "Engineered Wooden flooring", "Profiles and Skirting"] };
        this.builtInCupboard = { title: "Kitchen Fittings & Built-In-Cupboards",
            builtInCupboards: ["We offer a wide range of modern elegant kitchen designs and fittings", "We add value to homes and office spaces"]
        };
    }
    ngOnInit() {
    }
}
OurServicesComponent.ɵfac = function OurServicesComponent_Factory(t) { return new (t || OurServicesComponent)(); };
OurServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurServicesComponent, selectors: [["app-our-services"]], decls: 44, vars: 16, consts: [[1, "jumbotron", "jumbotron-fluid", "p-3", "mb-2", "bg-info", "text-white"], [1, "container", "text-white", "py-4"], [1, "display-4", "text-center"], [1, "lead", "text-center"], [1, "row", "p-5", "bg-img"], [1, "col-xs-12", "col-md-3"], [1, "display-4", "text-uppercase", "text-dark"], ["class", "list-group ", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-md-5"], [1, "row"], [1, "col-12"], [1, "col-xs-12", "col-md-4"], [1, "row", "p-5", "bg-img-second", "mt-2", "bg-info"], [1, "display-4", "text-uppercase", "text-white"], [1, "display-4", "text-uppercase", "text-light"], [1, "list-group"], [1, "list-group-item"]], template: function OurServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurServicesComponent_ul_10_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OurServicesComponent_ul_16_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OurServicesComponent_ul_20_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OurServicesComponent_ul_24_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bedroom.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OurServicesComponent_ul_29_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bathroom.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OurServicesComponent_ul_33_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OurServicesComponent_ul_39_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, OurServicesComponent_ul_43_Template, 3, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ourService.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ourService.ourServicesInclude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counterTop.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counterTop.counterTops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stone.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stone.stones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.woodenFlooring.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.woodenFlooring.woodenFloorings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bedroom.bedrooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bathroom.bathrooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.drawingsAndDesign.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drawingsAndDesign.designAndDrawings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.builtInCupboard.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.builtInCupboard.builtInCupboards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin-bottom: 30px;\r\n  height: 100vh;\r\n  \r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 5rem 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 1rem 1rem;\r\n  font-size: clamp(1rem, 2vw, 1rem);\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-left: 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n  border: 0;\r\n  border-radius: 15px;\r\n  padding: 0;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #f67438;\r\n  border: 1px solid #f67438;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0 2rem;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n  text-transform: uppercase;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  border-color: #f8844e;\r\n  background-color: #f67438;\r\n  color: #fff;\r\n}\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\r\n}\r\n.bg-img[_ngcontent-%COMP%] {\r\n  background: url('jeriden-villegas-niSnhfMjiMI-unsplash.jpg')\r\n    center center/cover fixed;\r\n}\r\n.bg-img-second[_ngcontent-%COMP%] {\r\n  background: url('scott-blake-x-ghf9LjrVg-unsplash.jpg')\r\n    center center/cover;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 5rem 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .swop[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFOzZCQUMyQjtBQUM3QjtBQUVBO0VBQ0U7dUJBQ3FCO0FBQ3ZCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJvdXItc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBtYXJnaW46IDZyZW0gMXJlbTsgKi9cclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBtYXgtaGVpZ2h0OiA1MHZoOyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDZyZW07ICovXHJcbn1cclxuXHJcbi53cmFwcGVyIC5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucGljc3VtLWltZy13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHtcclxuICBtYXJnaW46IDVyZW0gMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHAge1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxcmVtKTtcclxufVxyXG4uY29udGFpbmVyIC5yb3cgLmN1c3RvbSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmNjc0Mzg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2NzQzODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jb250YWluZXIgLnJvdyBidXR0b246aG92ZXIgYSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjg4NDRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjc0Mzg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAucm93IGgxIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xyXG59XHJcblxyXG4uYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2plcmlkZW4tdmlsbGVnYXMtbmlTbmhmTWppTUktdW5zcGxhc2guanBnKVxyXG4gICAgY2VudGVyIGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuLmJnLWltZy1zZWNvbmQge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2NvdHQtYmxha2UteC1naGY5TGpyVmctdW5zcGxhc2guanBnKVxyXG4gICAgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciA+IC5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cmVtIDFyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyID4gLnJvdyBoMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgLnJvdyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zd29wIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/default/default.module */ "mBqM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_0__["DefaultModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_0__["DefaultModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FooterComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", icon_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.social.alt);
} }
function FooterComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r5, "n");
} }
function FooterComponent_ul_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
} }
function FooterComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7, " ");
} }
class FooterComponent {
    constructor() {
        this.usefulLink = { title: "Products", usefulLinks: ["Theme Design", "Plugin Design", "Wordpress", "Joomla Template", "HTML Template"] };
        this.feature = { title: "Useful Links", features: ["Blog", "Pricing", "Sales", "Tickets", "Certification", "Customer Service"] };
        this.address = { title: "Address", addresses: ["07 lander Street", "Thulisa Park", "Johannesburg", "2197"] };
        this.allRights = "ALL Rights reserved by";
        this.created = "AvidCode";
        this.social = { title: "Follow Us", alt: "Social media icon",
            mediaUrl: [
                "./../../../../assets/facebook.svg",
                "./../../../../assets/Instagram_font_awesome.svg",
                "./../../../../assets/linkedin.png",
                "./../../../../assets/youtube.png",
                "./../../../../assets/tiktok.png"
            ]
        };
        this.footerProperties = { alt: "footer image", imgUrl: "./../../../../assets/thomas-bennie-kws8dJ9wfwc-unsplash.jpg" };
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 26, vars: 12, consts: [[1, "row"], [1, "footer-left", "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [3, "src", "alt"], [1, "socials"], [4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "footer-right"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "features"], [1, "footer-bottom"], [1, "box"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FooterComponent_a_7_Template, 2, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterComponent_ul_13_Template, 4, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FooterComponent_ul_17_Template, 4, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FooterComponent_ul_21_Template, 4, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.footerProperties.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.footerProperties.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.social.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.social.mediaUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usefulLink.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usefulLink.usefulLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feature.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feature.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.address.addresses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.allRights, " \u00A9 ", ctx.created, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: border-box;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n.mains[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #9b9b9b;\r\n  line-height: 3.8;\r\n  font-size: 80px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  font-family: poppins;\r\n  margin: 0;\r\n  display: grid;\r\n  font-size: 14px;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  padding: 50px;\r\n  color: #fff;\r\n  background-color: #011c39;\r\n}\r\n.footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  flex: 1 100%;\r\n}\r\n.footer-left[_ngcontent-%COMP%] {\r\n  margin-right: 1.25em;\r\n  margin-bottom: 2em;\r\n}\r\n.footer-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 17px;\r\n}\r\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n.footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  line-height: 2em;\r\n}\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n.footer-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.footer-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  flex: 1 50%;\r\n  margin-right: 1.5em;\r\n}\r\n.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #999;\r\n}\r\n.footer-bottom[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #999;\r\n  padding-top: 50px;\r\n  width: 100vw;\r\n}\r\n.footer-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: clamp(1rem, 2vw, 1rem);\r\n}\r\n.footer-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\r\n}\r\n.footer-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding-right: 20%;\r\n  color: #999;\r\n}\r\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  \r\n  width: 40px;\r\n  height: 40px;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n.socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  \r\n  padding: 10px 12px;\r\n  width: 40px;\r\n  z-index: 100;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n  filter: invert(1);\r\n}\r\n.footer-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n.socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n@media only screen and (min-width: 767px) {\r\n  .footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n  .footer-left[_ngcontent-%COMP%] {\r\n    flex: 1 0px;\r\n  }\r\n  .footer-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 2 0px;\r\n    flex-direction: row;\r\n    min-width: 0;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .footer[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n  footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .footer-right[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .footer-right[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin: 2rem;\r\n  }\r\n  .footer-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin: 0.5rem auto;\r\n    padding-right: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7OztFQUdFLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWlucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjOWI5YjliO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjg7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExYzM5O1xyXG59XHJcbi5mb290ZXIgPiAqIHtcclxuICBmbGV4OiAxIDEwMCU7XHJcbn1cclxuXHJcbi5mb290ZXItbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbi5mb290ZXItbGVmdCBpbWcge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5mb290ZXIgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmZvb3RlciBsaSB7XHJcbiAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmZvb3RlciBhIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZvb3Rlci1yaWdodCA+ICoge1xyXG4gIGZsZXg6IDEgNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbn1cclxuXHJcbi5ib3ggYSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uZm9vdGVyLXJpZ2h0IGxpIGEsXHJcbi5mb290ZXItYm90dG9tIHAsXHJcbi5mb290ZXItbGVmdCBwIHtcclxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMXJlbSk7XHJcbn1cclxuXHJcbi5mb290ZXItcmlnaHQgbGkgaDIge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgNHJlbSk7XHJcbn1cclxuLmZvb3Rlci1sZWZ0IHAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG4uc29jaWFscyBhIHtcclxuICAvKiBjb2xvcjogIzM2NGE2MjsgKi9cclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNvY2lhbHMgaW1nIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmMmY0OyAqL1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICB3aWR0aDogNDBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG4uZm9vdGVyLXJpZ2h0IHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zb2NpYWxzIGltZzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvb3RlciA+ICoge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgLmZvb3Rlci1sZWZ0IHtcclxuICAgIGZsZXg6IDEgMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAyIDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyLXJpZ2h0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5mb290ZXItcmlnaHQgPiBsaSB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgfVxyXG4gIC5mb290ZXItbGVmdCBwIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return { collapsed: a0 }; };
const _c1 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() {
        this.navItems = ["Home", "Services", "Contact", "About"];
        this.logo = "WHG";
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "ms-auto", 3, "ngClass"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item", 3, "click"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_8_listener() { return ctx.isCollapsed = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_11_listener() { return ctx.isCollapsed = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_14_listener() { return ctx.isCollapsed = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navItems[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navItems[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navItems[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navItems[3]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".collapsed[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100%;\r\n  \r\n  \r\n  border-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2VkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "e77x":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/hero/hero.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



function HeroComponent_ngb_carousel_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.slide[0].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.slide[0].header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.slide[0].text);
} }
function HeroComponent_ngb_carousel_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.slide[1].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.slide[1].header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.slide[1].text);
} }
function HeroComponent_ngb_carousel_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.slide[2].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.slide[2].header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.slide[2].text);
} }
function HeroComponent_ngb_carousel_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.slide[3].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.slide[3].header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.slide[3].text);
} }
function HeroComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeroComponent_ngb_carousel_3_ng_template_1_Template, 7, 3, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeroComponent_ngb_carousel_3_ng_template_2_Template, 7, 3, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeroComponent_ngb_carousel_3_ng_template_3_Template, 7, 3, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeroComponent_ngb_carousel_3_ng_template_4_Template, 7, 3, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeroComponent {
    constructor() {
        this.slide = [
            {
                header: "Humble beginnings",
                text: "Every race starts with a single step.Brick by brick, we get it done",
                imgUrl: "./../../../../assets/images/ricardo-gomez-angel-EqUFBrTIdeE-unsplash(1).jpg"
            },
            {
                header: "The best equipments necessary",
                text: "We use the right equipment for the right project",
                imgUrl: "./../../../../assets/images/martin-widenka-qZ1duL3ItDI-unsplash(1).jpg"
            },
            {
                header: "From smallest to the biggest",
                text: "There is no project too small or too big.",
                imgUrl: "./../../../../assets/images/anton-khmelnitsky-VoKiHzChrAc-unsplash.jpg"
            },
            {
                header: "All across africa",
                text: "There is no project too small or too big.",
                imgUrl: "./../../../../assets/images/matias-santana-2ykXqiKHNfk-unsplash.jpg"
            }
        ];
    }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 4, vars: 1, consts: [[1, "wrapper"], [1, "row"], [1, "col-12", "p-0"], [4, "ngIf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeroComponent_ngb_carousel_3_Template, 5, 0, "ngb-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  \r\n  \r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin-bottom: 30px;\r\n  height: 100vh;\r\n}\r\n.carousel-indicators[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 5rem 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 1rem 1rem;\r\n  font-size: clamp(1rem, 2vw, 1rem);\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-left: 1rem;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n  border: 0;\r\n  border-radius: 15px;\r\n  padding: 0;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #f67438;\r\n  border: 1px solid #f67438;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0 2rem;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n  text-transform: uppercase;\r\n}\r\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  border-color: #f8844e;\r\n  background-color: #f67438;\r\n  color: #fff;\r\n}\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  font-size: clamp(1.2rem, 2.5vw, 4rem);\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 5rem 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .swop[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n    justify-content: space-between;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgLyogbWFyZ2luOiA2cmVtIDFyZW07ICovXHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLndyYXBwZXIgLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4ucGljc3VtLWltZy13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHtcclxuICBtYXJnaW46IDVyZW0gMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHAge1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxcmVtKTtcclxufVxyXG4uY29udGFpbmVyIC5yb3cgLmN1c3RvbSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IGJ1dHRvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmNjc0Mzg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2NzQzODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jb250YWluZXIgLnJvdyBidXR0b246aG92ZXIgYSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjg4NDRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjc0Mzg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAucm93IGgxIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDRyZW0pO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgPiAucm93IGgxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAucm93IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnN3b3Age1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mBqM":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _modules_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modules/about-us/about-us.component */ "0MQo");
/* harmony import */ var _modules_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../modules/our-services/our-services.component */ "TXx3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _modules_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modules/contact-us/contact-us.component */ "AKec");
/* harmony import */ var _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/components/main/main.component */ "LZPd");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default.component */ "xS3V");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _modules_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
        _modules_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_1__["OurServicesComponent"],
        _modules_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__["AboutUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _modules_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/about-us/about-us.component */ "0MQo");
/* harmony import */ var _modules_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/our-services/our-services.component */ "TXx3");
/* harmony import */ var _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/main/main.component */ "LZPd");
/* harmony import */ var _modules_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-us/contact-us.component */ "AKec");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [{
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
        children: [{
                path: '',
                component: _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
            }, {
                path: 'contact',
                component: _modules_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
            }, {
                path: 'services',
                component: _modules_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_1__["OurServicesComponent"]
            }, {
                path: 'about',
                component: _modules_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__["AboutUsComponent"]
            }]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "xS3V":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/hero/hero.component */ "e77x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");





class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 4, vars: 0, template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map