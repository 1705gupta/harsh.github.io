(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-loader></angular-loader>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-doc-viewer */ "./node_modules/ngx-doc-viewer/fesm2015/ngx-doc-viewer.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxDocViewerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".black{\r\n    color: black;\r\n}\r\n.red{\r\n    color: red;\r\n}\r\n.frame{\r\n    width: 500px;\r\n    height: 200px;\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFja3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ucmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZnJhbWV7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editor works!\n</p>\n<!-- <ngx-doc-viewer [url]=\"'https://files.fm/down.php?i=sdymh2y6'\" viewer=\"google\" style=\"width:100%;height:50vh;\"></ngx-doc-viewer> -->\n\n<div class='frame'  contenteditable (input)=\"onNameChange($event.target.innerHTML)\"> \n  <span  *ngFor='let obj of data; let i = index' id=\"demo1\"     class={{obj.property}} (click)=\"add(obj.name,i,xyz)\">\n   \n   {{obj.name}}\n   </span>\n   \n\n</div>\n<div class='frame'  contenteditable (input)=\"onNameChange($event.target.innerHTML)\"> \n  \n   \n\n</div>\n<!-- <p *ngFor='let data of pqr'><a style =\"    cursor: pointer;\n   color: #01beff;\n   \n   text-decoration-color: #01beff;\n\" (click)=\"add(data)\">{{data}}</a></p> -->\n\n\n\n<!-- <h1>Word Corrector</h1>\n\n<div id=\"t1\" (click)='submit(t1)' style=\"width:400px;height:100px;border: 1px solid black;\">\n</div>\n<br>\n\n<textarea id=\"t2\" style=\"width:400px;height:100px;\" (keyup)=\"updateT2($event,text2)\" [(ngModel)]=\"text2\">{{text2}}</textarea>\n<div>{{GT1Array}}</div>\n<div>{{GT2Array}}</div>\n\n\n\n<p>Click the button to replace \"Microsoft\" with \"W3Schools\" in the paragraph below:</p>\n\n<textarea id=\"demo\" [(ngModel)]=\"suggestion\" >{{suggestion}}</textarea>\n\n<button (click)=\"myFunction()\">Try it</button> -->\n\n<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Here are the suggestions</h4>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" (click)=\"changeword(suggestion)\">\n        {{ suggestion }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



var EditorComponent = /** @class */ (function () {
    function EditorComponent(service) {
        this.service = service;
        this.newData = '';
        this.title = 'testdoc';
        this.sampleData = [
            {
                '2': 'abc',
                '6': 'pqr'
            }
        ];
        this.xyz = 'He is gud person. I am in Indore. It is beautifl';
        this.result = this.xyz.split(' ');
        this.text1 = "I am don Ramarao";
        this.text2 = null;
        this.data = [];
        this.newHTML = this.text1;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // document.getElementById("t1").innerHTML = this.newHTML
        // this.showModal=true;
        console.log(this.sampleData);
        this.service.submitModel(this.xyz).pipe().subscribe(function (res) {
            console.log(res.replaced);
            _this.abc = res.corrected;
            _this.pqr = _this.abc.split(' ');
            console.log(_this.pqr);
            _this.demo();
        });
    };
    EditorComponent.prototype.demo = function () {
        console.log(this.pqr[2]);
        for (var i = 0; i < this.pqr.length; i++) {
            if (this.pqr[i] == this.result[i]) {
                console.log('fine');
                this.data.push({ "name": this.result[i], "property": "black" });
                //  this.pqr += "<span style='color:red;'>" + data1 + "&nbsp;</span>";
            }
            else {
                console.log('error');
                this.data.push({ "name": this.result[i], "property": "red" });
            }
        }
        console.log(this.data, 'hi');
    };
    EditorComponent.prototype.updateT2 = function (ev, abb) {
        console.log(ev, abb);
        if (ev.key != 'Shift') {
            this.newData = this.newData + ev.key;
        }
        else if (ev.key != 'Backspace') {
        }
        console.log(this.newData);
        // this.newHTML = '';
        // this.GT1Array = this.text1.split(" ");
        // this.GT2Array = this.text2.split(" ");
        // this.GT1Array.forEach(data1 => {
        //   let index = this.GT1Array.indexOf(data1)
        //   if(index > -1){
        //     if(this.GT2Array[index] != data1 ){
        //       this.newHTML += "<span style='color:blue;'>" + data1 + "&nbsp;</span>";
        //     } else{
        //       this.newHTML += "<span style='color:black;;'>" + data1 + "&nbsp;</span>";
        //     }
        //   }
        // })
        // document.getElementById("t1").innerHTML = this.newHTML;
        // this.text1 = this.GT1Array.join(" ")
        // this.text2 = this.GT2Array.join(" ");
    };
    EditorComponent.prototype.submit = function (t1) {
        console.log(t1);
    };
    EditorComponent.prototype.add = function (a, i, ab) {
        console.log(ab);
        var str = document.getElementById("demo1").innerHTML;
        console.log(str);
        // console.log(this.pqr[0])
        // $("#suggestion").modal("show");
        this.indexCorrection = i;
        this.showModal = true;
        console.log('hi', a, i);
        var corrected = this.pqr[i];
        console.log(corrected);
        this.suggestion = corrected;
        // this.result[i]=corrected;
    };
    EditorComponent.prototype.changeword = function (word) {
        this.result[this.indexCorrection] = word;
        this.data = [];
        this.demo();
        this.showModal = false;
    };
    EditorComponent.prototype.getFileDetails = function (e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
        console.log(this.myFiles);
    };
    EditorComponent.prototype.uploadFiles = function () {
        var frmData = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            console.log("fileUpload", this.myFiles[i]);
            frmData.append("fileUpload", this.myFiles[i]);
        }
        // this.service.submitModel(frmData).pipe().subscribe(res=>{
        //   console.log(res)
        //     });
    };
    // myFunction() {
    //   var str = document.getElementById("demo").innerHTML; 
    //   var res = str.replace("Microsoft", "W3Schools");
    //   document.getElementById("demo").innerHTML = res;
    // }
    EditorComponent.prototype.onNameChange = function (val) {
        var _this = this;
        console.log("Changed", val);
        this.service.submitModel(val).pipe().subscribe(function (res) {
            console.log(res.replaced);
            _this.abc = res.corrected;
            _this.result = val.split(' ');
            _this.pqr = _this.abc.split(' ');
            console.log(_this.pqr);
            _this.demo();
        });
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"form-group row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-10\">\n        <ng-container>\n          <input  type=\"file\" accept=\".docx\"  id=\"file\" multiple \n              (change)=\"getFileDetails($event)\">\n      \n          <button (click)=\"uploadFiles()\">Upload</button>\n      </ng-container>\n      <div  class=\"invalidfeedback\" *ngIf=\"isSubmitted && trainingForm.controls.upload.errors\">\n        <div *ngIf=\"trainingForm.controls.upload.errors.required \"></div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
        this.myFiles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getFileDetails = function (e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
        console.log(this.myFiles);
    };
    HomeComponent.prototype.uploadFiles = function () {
        var frmData = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            console.log("fileUpload", this.myFiles[i]);
            frmData.append("fileUpload", this.myFiles[i]);
        }
        this.service.submitText(frmData).pipe().subscribe(function (res) {
            console.log(res);
            if (res.message == true) {
                // this.popUpOpen_callback_success('File has been uploaded successfully. ', 'success',
                // (value) => {
                //   //console.log(value,'hey')
                //   if (value == true) {
                //     window.location.reload();
                //   }
                // });
            }
            else {
                // this.popUpOpen_callback_success('Incorrect column names. ', 'success',
                // (value) => {
                //   //console.log(value,'hey')
                //   if (value == true) {
                //     window.location.reload();
                //   }
                // });
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n.loader-overlay{\r\n\tposition: fixed;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 12;\r\n}\r\n\r\n.loader-overlay-new{\r\n  position: fixed;\r\n  bottom: 0;\r\n  background: rgba(0,0,0,0.5);\r\n  width: 100%;\r\n  top: 57px;\r\n  left: 0;\r\n  z-index: 11;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZGVyLW92ZXJsYXl7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuLmxvYWRlci1vdmVybGF5LW5ld3tcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDU3cHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"custom-loader\" *ngIf=\"isNewShow!=true\" [class.loader-hidden]=\"!show\">\n    <div class=\"loader-overlay\">\n        <div class=\"set-loader\">\n            <!--<md-progress-bar mode=\"indeterminate\" *ngIf=\"show\"></md-progress-bar>-->\n             <!-- <mat-progress-spinner mode=\"indeterminate\" *ngIf=\"show\" style=\"margin:0 auto;\" color=\"primary\"> </mat-progress-spinner>\n             <mat-progress-spinner mode=\"indeterminate\" id=\"tempJqueryLoader\" style=\"margin:0 auto;display: none;\" color=\"primary\"> </mat-progress-spinner> -->\n            <!--<md-spinner *ngIf=\"show\" class=\"example-margin\" [color]=\"warn\" [mode]=\"indeterminate\">\n            </md-spinner>-->\n\n            <div class=\"spinner-border color-white\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n\n        </div>\n    </div>\n</div>\n<div class=\"custom-loader\" [class.loader-hidden]=\"!isNewShow\">\n        <div class=\"loader-overlay-new\">\n            <div>\n                <!--<md-progress-bar mode=\"indeterminate\" *ngIf=\"show\"></md-progress-bar>-->\n                 <!-- <mat-progress-spinner mode=\"indeterminate\" *ngIf=\"isNewShow\" style=\"margin:0 auto;\" color=\"primary\"> </mat-progress-spinner> -->\n                <!--<md-spinner *ngIf=\"show\" class=\"example-margin\" [color]=\"warn\" [mode]=\"indeterminate\">\n                </md-spinner>-->\n\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                  </div>\n\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
        this.isNewShow = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(localStorage.getItem("pagetitle"));
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            console.log('hiiiiiii');
            _this.show = state.show;
            console.log(_this.show);
        });
        //New Loader for page wise show and hide only when page fully load with all data.
        this.subscriptionNew = this.loaderService.loaderStateNew
            .subscribe(function (state) {
            _this.isNewShow = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionNew.unsubscribe();
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'angular-loader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, loaderService) {
        this.http = http;
        this.router = router;
        this.loaderService = loaderService;
    }
    AuthenticationService.prototype.submitModel = function (text) {
        var _this = this;
        console.log(text);
        this.loaderService.show();
        return this.http.post("http://localhost:5000/get-suggestion", { 'text': text })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.loaderService.hide();
            return response;
        }));
    };
    AuthenticationService.prototype.submitText = function (files) {
        console.log(files);
        // this.loaderService.show();
        return this.http.post("http://localhost:5000/correct_doc_file", files)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // this.loaderService.hide();
            return response;
        }));
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderSubjectNew = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
        this.loaderStateNew = this.loaderSubjectNew.asObservable();
    }
    LoaderService.prototype.show = function () {
        //    console.log('hey')
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService.prototype.showNew = function () {
        this.loaderSubjectNew.next({ show: true });
        console.log('loader');
    };
    LoaderService.prototype.hideNew = function () {
        this.loaderSubjectNew.next({ show: false });
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\harsh\testdoc\testdoc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map