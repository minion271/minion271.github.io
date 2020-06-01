function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main-page/main-page.component */
    "./src/app/components/main-page/main-page.component.ts");
    /* harmony import */


    var _components_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/video_detail/video_detail.component */
    "./src/app/components/video_detail/video_detail.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/logout/logout.component */
    "./src/app/components/logout/logout.component.ts");
    /* harmony import */


    var _components_video_detail_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/video_detail/main-view/main-view.component */
    "./src/app/components/video_detail/main-view/main-view.component.ts");
    /* harmony import */


    var _components_video_detail_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/video_detail/post-comment/post-comment.component */
    "./src/app/components/video_detail/post-comment/post-comment.component.ts");
    /* harmony import */


    var _components_video_detail_social_share_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/video_detail/social_share/social-share/social-share.component */
    "./src/app/components/video_detail/social_share/social-share/social-share.component.ts");
    /* harmony import */


    var _components_video_detail_video_description_video_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/video_detail/video-description/video-description.component */
    "./src/app/components/video_detail/video-description/video-description.component.ts");
    /* harmony import */


    var _components_video_detail_comment_area_comment_area_comment_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/video_detail/comment_area/comment-area/comment-area.component */
    "./src/app/components/video_detail/comment_area/comment-area/comment-area.component.ts");
    /* harmony import */


    var _components_main_page_list_video_list_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/main-page/list-video/list-video.component */
    "./src/app/components/main-page/list-video/list-video.component.ts");
    /* harmony import */


    var _components_main_page_main_video_main_video_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/main-page/main-video/main-video.component */
    "./src/app/components/main-page/main-video/main-video.component.ts");

    var routes = [{
      path: 'video/:id',
      component: _components_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__["VideoDetailComponent"]
    }, {
      path: '',
      component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        declarations: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], _components_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__["VideoDetailComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], _components_video_detail_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_10__["MainViewComponent"], _components_video_detail_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__["PostCommentComponent"], _components_video_detail_social_share_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_12__["SocialShareComponent"], _components_video_detail_video_description_video_description_component__WEBPACK_IMPORTED_MODULE_13__["VideoDescriptionComponent"], _components_video_detail_comment_area_comment_area_comment_area_component__WEBPACK_IMPORTED_MODULE_14__["CommentAreaComponent"], _components_main_page_main_video_main_video_component__WEBPACK_IMPORTED_MODULE_16__["MainVideoComponent"], _components_main_page_list_video_list_video_component__WEBPACK_IMPORTED_MODULE_15__["ListVideoComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], _components_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__["VideoDetailComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], _components_video_detail_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_10__["MainViewComponent"], _components_video_detail_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__["PostCommentComponent"], _components_video_detail_social_share_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_12__["SocialShareComponent"], _components_video_detail_video_description_video_description_component__WEBPACK_IMPORTED_MODULE_13__["VideoDescriptionComponent"], _components_video_detail_comment_area_comment_area_comment_area_component__WEBPACK_IMPORTED_MODULE_14__["CommentAreaComponent"], _components_main_page_main_video_main_video_component__WEBPACK_IMPORTED_MODULE_16__["MainVideoComponent"], _components_main_page_list_video_list_video_component__WEBPACK_IMPORTED_MODULE_15__["ListVideoComponent"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/checklogin.service */
    "./src/app/services/checklogin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(checkLoginService) {
        _classCallCheck(this, AppComponent);

        this.checkLoginService = checkLoginService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('username')) this.checkLoginService.updateLoginStatus(sessionStorage.getItem('username'));else this.checkLoginService.updateLoginStatus(" ");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__["CheckLoginService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__["CheckLoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.current_year = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 54,
      vars: 1,
      consts: [[1, "footer"], [1, "grid"], [1, "wide", "wrapper"], [1, "c-3"], [1, "footer-label"], [1, "footer-list"], [1, "footer-item"], ["href", "", 1, "footer-item--link"], [1, "author"], [1, "author-detail"], [1, "author-name"], [1, "fa", "fa-heart"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Li\xEAn l\u1EA1c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "89 Ho\xE0ng V\u0103n Th\xE1i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0110i\u1EC7n tho\u1EA1i:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ch\u0103m s\xF3c kh\xE1ch h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hotline:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fanpage:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ch\xEDnh s\xE1ch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ch\xEDnh s\xE1ch b\u1EA3o h\xE0nh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ch\xEDnh s\xE1ch \u0111\u1ED5i tr\u1EA3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ch\xEDnh s\xE1ch giao h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "T\u1EA3i xu\u1ED1ng \u1EE9ng d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " by minionbee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \xA9 ", ctx.current_year, " This page is made with ");
        }
      },
      styles: [".footer[_ngcontent-%COMP%]{\r\n  background-color: #191C1D;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.footer-label[_ngcontent-%COMP%]{\r\n  padding-top: 25px;\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n  color: white;\r\n  margin: 0;\r\n}\r\n.footer-list[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  padding: 0;\r\n  margin: 20px 0 25px 0;\r\n}\r\n.footer-item[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.footer-item--link[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color:var(--header-color);\r\n}\r\n.author[_ngcontent-%COMP%]{\r\n  background-color: #0a0a0a;\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\n.author-detail[_ngcontent-%COMP%]{\r\n  color: var(--header-color);\r\n  font-size: 1.6rem;\r\n  height: 100%;\r\n  line-height: 50px;\r\n\r\n}\r\n.author-name[_ngcontent-%COMP%]{\r\n  color:seagreen;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFDMUQ7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZm9vdGVyLWxhYmVse1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZm9vdGVyLWxpc3R7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMjBweCAwIDI1cHggMDtcclxufVxyXG4uZm9vdGVyLWl0ZW17XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb290ZXItaXRlbS0tbGlua3tcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG4uYXV0aG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXV0aG9yLWRldGFpbHtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblxyXG59XHJcbi5hdXRob3ItbmFtZXtcclxuICBjb2xvcjpzZWFncmVlbjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/checklogin.service */
    "./src/app/services/checklogin.service.ts");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/control.login.modal.service */
    "./src/app/services/control.login.modal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(checkLoginService, storageService, controlLoginModalService) {
        _classCallCheck(this, HeaderComponent);

        this.checkLoginService = checkLoginService;
        this.storageService = storageService;
        this.controlLoginModalService = controlLoginModalService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.checkLoginService.loginStream$.subscribe(function (isLogin) {
            if (isLogin === " ") _this.isLogined = false;else _this.isLogined = true;
          });
          this.checkLoginService.loginStream$.subscribe(function (user) {
            return _this.username = user;
          });
        }
      }, {
        key: "openLogin",
        value: function openLogin() {
          this.controlLoginModalService.setLoginModalStatus(true);
        }
      }, {
        key: "closeLoginModal",
        value: function closeLoginModal(name) {
          console.log('close modal');
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__["CheckLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_3__["ControlLoginModalService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 58,
      vars: 5,
      consts: [[1, "header"], [1, "grid"], [1, "wide", "header_navbar"], [1, "header_nav-list"], [1, "header_nav-item", "header_nav-top-news"], [1, "header_news"], [1, "header_news-new"], ["href", "", 1, "header_nav-item--link", "header_news-link"], [1, "header_nav-list", "header_nav-list--main"], [1, "header_nav-item"], ["href", "", 1, "header_nav-item--link"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-youtube"], [1, "header_search-container"], [1, "header_search-input"], ["type", "text", "placeholder", "Nh\u1EADp t\xEAn b\xE0i h\xE1t", 1, "header_search-input--text"], [1, "header_search-recommended"], [1, "header_search-btn"], [1, "header_search-btn--main"], [1, "fas", "fa-search"], [1, "header_nav-item--link", "auth"], [1, "fas", "fa-user"], [1, "header_nav-item--link", "auth", 3, "click"], [1, "header-main"], [1, "container"], [1, "header_main-logo"], ["src", "../../../assets/images/logo.png", "alt", "image not found!", 1, "logo"], [1, "header_main-option"], [1, "header_main-option-item"], ["routerLink", "/", 1, "header_main-option-item--link"], ["href", "#", 1, "header_main-option-item--link"], [1, "fas", "fa-chevron-down"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Breaking news:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New album'Drake will be release in July");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_33_listener() {
            return ctx.openLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0110\u0103ng nh\u1EADp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Archives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Features ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-login");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isLogined", ctx.isLogined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isLogined", !ctx.isLogined);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      styles: [".header[_ngcontent-%COMP%]{\r\n  height: var(--header-height);\r\n  background-color: var(--primary-color);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n}\r\n.header_navbar[_ngcontent-%COMP%]{\r\n\theight: var(--header-navbar-height);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n.header_nav-list[_ngcontent-%COMP%]{\r\n\tlist-style: none;\r\n\tpadding-left: 0;\r\n\tmargin: 0;\r\n  display: flex;\r\n  line-height: 50px;\r\n}\r\n.header_nav-list--main[_ngcontent-%COMP%]{\r\n  \r\n}\r\n.header_nav-top-news[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.header_nav-item[_ngcontent-%COMP%]{\r\n\tmargin: 0 8px;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.header_nav-item[_ngcontent-%COMP%], .header_nav-item--link[_ngcontent-%COMP%]{\r\n\tcolor: var(--white-color);\r\n\tfont-size: 1.4rem;\r\n\ttext-decoration: none;\r\n  font-weight: 300;\r\n  margin:0 15px;\r\n  background-color: transparent;\r\n  border:none;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.fa-user[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n}\r\n.header_nav-item--link[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.8;\r\n}\r\n.header_nav-item[_ngcontent-%COMP%]:last-child{\r\n  margin:0 0 0 15px;\r\n}\r\n.header_nav-item[_ngcontent-%COMP%]:first-child{\r\n  margin:0 15px 0 0;\r\n}\r\n.header_news[_ngcontent-%COMP%]{\r\n  color:var(--header-main-color);\r\n  text-transform: uppercase;\r\n}\r\n.header_nav-item--link[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color:var(--header-color);\r\n}\r\n.header_nav-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n  color:var(--header-main-color);\r\n}\r\n\r\n.header_search-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.header_search-container[_ngcontent-%COMP%]::before{\r\n  content: \"\";\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 15px;\r\n  border-left: 1px solid var(--header-color);\r\n}\r\n.header_search-container[_ngcontent-%COMP%]::after{\r\n  content: \"\";\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 15px;\r\n  border-right: 1px solid var(--header-color);\r\n}\r\n.header_search-input--text[_ngcontent-%COMP%]{\r\n  border:none;\r\n  background-color: var(--primary-color);\r\n  height: 65%;\r\n  color:var(--header-color);\r\n  outline: none;\r\n}\r\n.header_search-btn--main[_ngcontent-%COMP%]{\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  color:#fff;\r\n  font-size: 1.5rem;\r\n}\r\n.header_search-btn--main[_ngcontent-%COMP%]:hover{\r\n  color:var(--header-main-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.header-main[_ngcontent-%COMP%]{\r\n  height: var(--header-main-height);\r\n  background-color: var(--header-main-color);\r\n}\r\n.header-main[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{\r\n  width: 1200px;\r\n  margin:0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  line-height: 100%;\r\n}\r\n.header_main-option[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.header_main-option-item[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.header_main-option-item--link[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  padding: 0 15px;\r\n  position: relative;\r\n}\r\n.header_main-option-item--link[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n}\r\n.header_main-option-item--link[_ngcontent-%COMP%]::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -32px;\r\n  left: 0;\r\n  right: 0;\r\n  border-bottom: 3px solid #fff;\r\n  display: none;\r\n}\r\n.header_main-option-item[_ngcontent-%COMP%]:hover   .header_main-option-item--link[_ngcontent-%COMP%]::after{\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtDQUNDLG1DQUFtQztDQUNuQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFNBQVM7RUFDUixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0NBQ0MsYUFBYTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBR0EsaUJBQWlCO0FBQ2pCO0VBQ0UsaUNBQWlDO0VBQ2pDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbi5oZWFkZXJfbmF2YmFye1xyXG5cdGhlaWdodDogdmFyKC0taGVhZGVyLW5hdmJhci1oZWlnaHQpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkZXJfbmF2LWxpc3R7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmhlYWRlcl9uYXYtbGlzdC0tbWFpbntcclxuICAvKiBmbGV4OjE7ICovXHJcbn1cclxuLmhlYWRlcl9uYXYtdG9wLW5ld3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaGVhZGVyX25hdi1pdGVte1xyXG5cdG1hcmdpbjogMCA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyX25hdi1pdGVtLCAuaGVhZGVyX25hdi1pdGVtLS1saW5re1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcblx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOjAgMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6bm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZhLXVzZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX25hdi1pdGVtLS1saW5rOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4uaGVhZGVyX25hdi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgbWFyZ2luOjAgMCAwIDE1cHg7XHJcbn1cclxuLmhlYWRlcl9uYXYtaXRlbTpmaXJzdC1jaGlsZHtcclxuICBtYXJnaW46MCAxNXB4IDAgMDtcclxufVxyXG4uaGVhZGVyX25ld3N7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLW1haW4tY29sb3IpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmhlYWRlcl9uYXYtaXRlbS0tbGlua3tcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG4uaGVhZGVyX25hdi1pdGVtOmhvdmVyIGF7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4vKiBoZWFkZXIgc2VhcmNoICovXHJcbi5oZWFkZXJfc2VhcmNoLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5oZWFkZXJfc2VhcmNoLWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG4uaGVhZGVyX3NlYXJjaC1jb250YWluZXI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1jb2xvcik7XHJcbn1cclxuLmhlYWRlcl9zZWFyY2gtaW5wdXQtLXRleHR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5oZWFkZXJfc2VhcmNoLWJ0bi0tbWFpbntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmhlYWRlcl9zZWFyY2gtYnRuLS1tYWluOmhvdmVye1xyXG4gIGNvbG9yOnZhcigtLWhlYWRlci1tYWluLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBoZWFkZXI6IG1haW4gKi9cclxuLmhlYWRlci1tYWlue1xyXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLW1haW4taGVpZ2h0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItbWFpbi1jb2xvcik7XHJcbn1cclxuLmhlYWRlci1tYWluPi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9nb3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlcl9tYWluLW9wdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5oZWFkZXJfbWFpbi1vcHRpb24taXRlbXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyX21haW4tb3B0aW9uLWl0ZW0tLWxpbmt7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJfbWFpbi1vcHRpb24taXRlbS0tbGluazpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmhlYWRlcl9tYWluLW9wdGlvbi1pdGVtLS1saW5rOjphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0zMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaGVhZGVyX21haW4tb3B0aW9uLWl0ZW06aG92ZXIgLmhlYWRlcl9tYWluLW9wdGlvbi1pdGVtLS1saW5rOjphZnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_1__["CheckLoginService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }, {
          type: src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_3__["ControlLoginModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/authen.service */
    "./src/app/services/authen.service.ts");
    /* harmony import */


    var src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/control.login.modal.service */
    "./src/app/services/control.login.modal.service.ts");
    /* harmony import */


    var src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/checklogin.service */
    "./src/app/services/checklogin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authenService, controlLoginModalService, checkLoginService) {
        _classCallCheck(this, LoginComponent);

        this.authenService = authenService;
        this.controlLoginModalService = controlLoginModalService;
        this.checkLoginService = checkLoginService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.controlLoginModalService.loginModalStatus$.subscribe(function (status) {
            return _this2.openLoginModal = status;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.authenService.authenticate(this.username, this.password).subscribe(function (userData) {
            sessionStorage.setItem('username', _this3.username);
            var tokenS = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenS);
          }, function (error) {
            console.log(error);
          });
          this.controlLoginModalService.setLoginModalStatus(false);
          this.checkLoginService.updateLoginStatus(this.username);
        }
      }, {
        key: "cancelLoginProcess",
        value: function cancelLoginProcess() {
          this.controlLoginModalService.setLoginModalStatus(false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// console.log('destroy login component');
          // this.controlLoginModalService.completeSubject;
          // this.checkLoginService.isLogin.complete;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_2__["ControlLoginModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_3__["CheckLoginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 40,
      vars: 4,
      consts: [[1, "modal_container"], [1, "modal_overlay"], [1, "modal_body"], [1, "auth_form"], ["ngNativeValidate", "", 1, "auth_form-container", 3, "ngSubmit"], [1, "auth_form-header"], [1, "auth_form-header-text"], ["href", "#", "id", "sign_up--a", 1, "auth_form-switch-btn"], [1, "auth_form-form"], ["for", "username", 1, "auth_form-group"], ["type", "text", "name", "username", "placeholder", "T\xEAn \u0111\u0103ng nh\u1EADp", "required", "", 1, "auth_form-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "auth_form-group"], ["type", "password", "name", "password", "placeholder", "M\u1EADt kh\u1EA9u", "required", "", 1, "auth_form-input", 3, "ngModel", "ngModelChange"], [1, "auth_form-aside"], [1, "auth_form-aside-help"], [1, "auth_form-aside-help-link", "auth_form-aside-help-btn"], [1, "auth_form-aside-help-separate"], ["href", "#", 1, "auth_form-aside-help-link"], [1, "auth_form-button"], [1, "btn", "btn--margin", 3, "click"], [1, "btn", "btn--primary"], [1, "auth_form-social"], ["href", "", 1, "btn", "btn-icon", "btn-icon-sms"], [1, "far", "fa-comment-dots"], [1, "auth_form-social-text-margin"], ["href", "", 1, "btn", "btn-icon", "btn-icon-facebook"], [1, "fab", "fa-facebook"], ["href", "", 1, "btn", "btn-icon", "btn-icon-google"], [1, "fab", "fa-google"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u0103ng nh\u1EADp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0110\u0103ng k\xFD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Qu\xEAn M\u1EADt Kh\u1EA9u ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " C\u1EA7n Tr\u1EE3 Gi\xFAp?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
            return ctx.cancelLoginProcess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Tr\u1EDF L\u1EA1i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0110\u0103ng Nh\u1EADp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " SMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.openLoginModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_authen_service__WEBPACK_IMPORTED_MODULE_1__["AuthenService"]
        }, {
          type: src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_2__["ControlLoginModalService"]
        }, {
          type: src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_3__["CheckLoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/logout/logout.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/logout/logout.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)();
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-page/list-video/list-video.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/main-page/list-video/list-video.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ListVideoComponent */

  /***/
  function srcAppComponentsMainPageListVideoListVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListVideoComponent", function () {
      return ListVideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListVideoComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListVideoComponent_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var video_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectItem(video_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("video_list-item--active", ctx_r0.item_active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r1.comment.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r1.total_view, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r1.total_like, " ");
      }
    }

    var ListVideoComponent = /*#__PURE__*/function () {
      function ListVideoComponent(videoService) {
        _classCallCheck(this, ListVideoComponent);

        this.videoService = videoService;
        this.item_active = false;
      }

      _createClass(ListVideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.videoService.getAllVideo().subscribe(function (all_video) {
            return _this4.videos = all_video;
          });
        }
      }, {
        key: "selectItem",
        value: function selectItem(video) {
          this.item_active = true;
          this.videoService.videoInMainPage.next(video);
        }
      }]);

      return ListVideoComponent;
    }();

    ListVideoComponent.ɵfac = function ListVideoComponent_Factory(t) {
      return new (t || ListVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]));
    };

    ListVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListVideoComponent,
      selectors: [["app-list-video"]],
      decls: 2,
      vars: 1,
      consts: [[1, "video_list"], ["class", "video_list-item", 3, "video_list-item--active", "click", 4, "ngFor", "ngForOf"], [1, "video_list-item", 3, "click"], [1, "video_list-item--link"], [1, "video_list-item--img"], ["src", "../../../assets/images/hi.jpg", "alt", "", 1, "video_img"], [1, "video_description"], [1, "video_title"], [1, "video_interactive"], [1, "video_interactive-slide"], [1, "far", "fa-comments", "icon"], [1, "fas", "fa-eye", "icon"], [1, "fas", "fa-thumbs-up", "icon"]],
      template: function ListVideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListVideoComponent_li_1_Template, 17, 6, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  color:white;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.video_list[_ngcontent-%COMP%]{\r\n  background-color: #393C3D;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.video_list[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n  width: 12px;\r\n}\r\n.video_list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.6);\r\n}\r\n.video_list-item[_ngcontent-%COMP%]{\r\n  max-height: 110px;\r\n  width: 100%;\r\n}\r\n.video_list-item--link[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  padding: 15px 20px;\r\n}\r\n.video_list-item--link[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n.video_list-item--img[_ngcontent-%COMP%]{\r\n  max-width: 100px;\r\n}\r\n.video_img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.video_description[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  padding:5px 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.video_title[_ngcontent-%COMP%]{\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n.video_interactive[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.video_interactive-slide[_ngcontent-%COMP%]{\r\n  font-size: 1rem;\r\n  color: var(--header-color);\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n  color: var(--header-color);\r\n}\r\n.video_list-item--active[_ngcontent-%COMP%]{\r\n  background-color: #4D5051;\r\n  border-left: 5px solid var(--header-main-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbGlzdC12aWRlby9saXN0LXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBLEtBQUs7QUFDTDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLCtDQUErQztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL2xpc3QtdmlkZW8vbGlzdC12aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4vKiAgKi9cclxuLnZpZGVvX2xpc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0MzRDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnZpZGVvX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gIHdpZHRoOiAxMnB4O1xyXG59XHJcbi52aWRlb19saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbn1cclxuLnZpZGVvX2xpc3QtaXRlbXtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udmlkZW9fbGlzdC1pdGVtLS1saW5re1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG59XHJcbi52aWRlb19saXN0LWl0ZW0tLWxpbms6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udmlkZW9fbGlzdC1pdGVtLS1pbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4udmlkZW9faW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udmlkZW9fZGVzY3JpcHRpb257XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnZpZGVvX3RpdGxle1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnZpZGVvX2ludGVyYWN0aXZle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi52aWRlb19pbnRlcmFjdGl2ZS1zbGlkZXtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XHJcbn1cclxuLmljb257XHJcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XHJcbn1cclxuXHJcblxyXG4udmlkZW9fbGlzdC1pdGVtLS1hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENTA1MTtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWhlYWRlci1tYWluLWNvbG9yKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-video',
          templateUrl: './list-video.component.html',
          styleUrls: ['./list-video.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppComponentsMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _main_video_main_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-video/main-video.component */
    "./src/app/components/main-page/main-video/main-video.component.ts");
    /* harmony import */


    var _list_video_list_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-video/list-video.component */
    "./src/app/components/main-page/list-video/list-video.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(videoService) {
        _classCallCheck(this, MainPageComponent);

        this.videoService = videoService;
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.videoService.getAllVideo().subscribe(function (all_video) {
            _this5.videos = all_video;

            _this5.videoService.videoInMainPage.next(_this5.videos[0]);
          });
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 9,
      vars: 0,
      consts: [[1, "grid", "wrapper"], [1, "wide"], [1, "container"], [1, "c-8"], [1, "c-4"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-main-video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-list-video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _main_video_main_video_component__WEBPACK_IMPORTED_MODULE_3__["MainVideoComponent"], _list_video_list_video_component__WEBPACK_IMPORTED_MODULE_4__["ListVideoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  color:white;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  background-color: var(--primary-color);\r\n  padding-top: 160px;\r\n  padding-bottom: 30px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFHQSxLQUFLIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi53cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHBhZGRpbmctdG9wOiAxNjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuXHJcbi8qICAqL1xyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-page/main-video/main-video.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/main-page/main-video/main-video.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MainVideoComponent */

  /***/
  function srcAppComponentsMainPageMainVideoMainVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainVideoComponent", function () {
      return MainVideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainVideoComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.videoActive.comment.length, " ");
      }
    }

    var MainVideoComponent = /*#__PURE__*/function () {
      function MainVideoComponent(videoService) {
        _classCallCheck(this, MainVideoComponent);

        this.videoService = videoService;
      }

      _createClass(MainVideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.videoService.videoInMainPage.subscribe(function (video) {
            _this6.videoActive = video;
          });
        }
      }]);

      return MainVideoComponent;
    }();

    MainVideoComponent.ɵfac = function MainVideoComponent_Factory(t) {
      return new (t || MainVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]));
    };

    MainVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainVideoComponent,
      selectors: [["app-main-video"]],
      decls: 21,
      vars: 5,
      consts: [[1, "video--current", "bg-img", 2, "background-image", "url(./../../../../assets/images/hi.jpg)"], [1, "video--button"], [1, "video--link", 3, "routerLink"], [1, "fas", "fa-play"], [1, "video--description"], [1, "video--type"], [1, "video--title"], ["href", "", 1, "video--link"], [1, "video--react"], [1, "video--interactive"], ["class", "video_interactive-item", 4, "ngIf"], [1, "video_interactive-item"], [1, "fas", "fa-eye"], [1, "fas", "fa-thumbs-up"], [1, "video-timeline"], [1, "far", "fa-comments"]],
      template: function MainVideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainVideoComponent_span_12_Template, 3, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 5:30 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/video/", ctx.videoActive.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.videoActive.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoActive.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.videoActive.total_view, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.videoActive.total_like, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  color:white;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.video--current[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.bg-img[_ngcontent-%COMP%]{\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-repeat:no-repeat ;\r\n}\r\n.video--button[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 225px;\r\n  left: 375px;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  background-color: var(--header-main-color);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.video--button[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--primary-color);\r\n}\r\n.video--link[_ngcontent-%COMP%]{\r\n  display: block;\r\n  cursor: pointer;\r\n  font-size: 2.2rem;\r\n}\r\n.video--description[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  right: 25px;\r\n}\r\n.video--type[_ngcontent-%COMP%]{\r\n  background-color: var(--header-main-color);\r\n  border-radius: 2.5px;\r\n  padding: 5px 15px;\r\n  font-size: 1.8rem;\r\n  cursor: pointer;\r\n}\r\n.video--title[_ngcontent-%COMP%]{\r\n  font-size: 2.2rem;\r\n  font-weight: 600;\r\n  margin:20px 0;\r\n}\r\n.video--react[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.video_interactive-item[_ngcontent-%COMP%]{\r\n  margin-right: 18px;\r\n  font-size: 1.3rem;\r\n}\r\n.video-timeline[_ngcontent-%COMP%]{\r\n  padding: 2px 13px;\r\n  font-size: 1.5rem;\r\n  background-color: #0F1112;\r\n  border-radius: 2.5px;\r\n  font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi12aWRlby9tYWluLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBLEtBQUs7QUFDTDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tdmlkZW8vbWFpbi12aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4vKiAgKi9cclxuLnZpZGVvLS1jdXJyZW50e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJnLWltZ3tcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0IDtcclxufVxyXG4udmlkZW8tLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMjVweDtcclxuICBsZWZ0OiAzNzVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1tYWluLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnZpZGVvLS1idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuLnZpZGVvLS1saW5re1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG4udmlkZW8tLWRlc2NyaXB0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiAgbGVmdDogMjVweDtcclxuICByaWdodDogMjVweDtcclxufVxyXG5cclxuLnZpZGVvLS10eXBle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1tYWluLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAyLjVweDtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnZpZGVvLS10aXRsZXtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjoyMHB4IDA7XHJcbn1cclxuLnZpZGVvLS1yZWFjdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnZpZGVvX2ludGVyYWN0aXZlLWl0ZW17XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi52aWRlby10aW1lbGluZXtcclxuICBwYWRkaW5nOiAycHggMTNweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYxMTEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-video',
          templateUrl: './main-video.component.html',
          styleUrls: ['./main-video.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/comment_area/comment-area/comment-area.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/video_detail/comment_area/comment-area/comment-area.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CommentAreaComponent */

  /***/
  function srcAppComponentsVideo_detailComment_areaCommentAreaCommentAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentAreaComponent", function () {
      return CommentAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommentAreaComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Reply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.user_username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, comment_r1.gen_time, "short"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.message, " ");
      }
    }

    var CommentAreaComponent = /*#__PURE__*/function () {
      function CommentAreaComponent(videoService) {
        _classCallCheck(this, CommentAreaComponent);

        this.videoService = videoService;
      }

      _createClass(CommentAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.videoService.commentsSubject.subscribe(function (cs) {
            _this7.comments = cs;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.videoService.commentsSubject.complete();
        }
      }]);

      return CommentAreaComponent;
    }();

    CommentAreaComponent.ɵfac = function CommentAreaComponent_Factory(t) {
      return new (t || CommentAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]));
    };

    CommentAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentAreaComponent,
      selectors: [["app-comment-area"]],
      decls: 3,
      vars: 1,
      consts: [[1, "video--comment"], [1, "comment-list"], ["class", "comment-item", 4, "ngFor", "ngForOf"], [1, "comment-item"], [1, "user-icon-container"], ["src", "../../../assets/images/logo.png", "alt", "", 1, "user-icon"], [1, "comment--info"], [1, "comment--info-release"], [1, "user--name"], [1, "release--on"], [1, "comment-description"], [1, "feedback-comment"], [1, "feedback-comment-list"], [1, "feedback-comment-item"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"]],
      template: function CommentAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentAreaComponent_li_2_Template, 20, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".video--comment[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  \r\n}\r\n.comment-list[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  color: var(--header-color);\r\n  padding: 0;\r\n  margin-top: 15px;\r\n}\r\n.comment-item[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.comment--info[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n}\r\n.comment--info-release[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.user--name[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 1.7rem;\r\n}\r\n.feedback-comment-list[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  display: flex;\r\n}\r\n.feedback-comment-item[_ngcontent-%COMP%]{\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n}\r\n.feedback-comment-item[_ngcontent-%COMP%]:hover{\r\n  opacity: .8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvY29tbWVudF9hcmVhL2NvbW1lbnQtYXJlYS9jb21tZW50LWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvY29tbWVudF9hcmVhL2NvbW1lbnQtYXJlYS9jb21tZW50LWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby0tY29tbWVudHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItY29sb3IpOyAqL1xyXG59XHJcbi5jb21tZW50LWxpc3R7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmNvbW1lbnQtaXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29tbWVudC0taW5mb3tcclxuICBmbGV4OiAxO1xyXG59XHJcbi5jb21tZW50LS1pbmZvLXJlbGVhc2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnVzZXItLW5hbWV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcbi5mZWVkYmFjay1jb21tZW50LWxpc3R7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mZWVkYmFjay1jb21tZW50LWl0ZW17XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mZWVkYmFjay1jb21tZW50LWl0ZW06aG92ZXJ7XHJcbiAgb3BhY2l0eTogLjg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-area',
          templateUrl: './comment-area.component.html',
          styleUrls: ['./comment-area.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/main-view/main-view.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/video_detail/main-view/main-view.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MainViewComponent */

  /***/
  function srcAppComponentsVideo_detailMainViewMainViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViewComponent", function () {
      return MainViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var MainViewComponent = /*#__PURE__*/function () {
      function MainViewComponent(videoService, sanitizer) {
        _classCallCheck(this, MainViewComponent);

        this.videoService = videoService;
        this.sanitizer = sanitizer;
      }

      _createClass(MainViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.videoService.videoUrlSubject.subscribe(function (url) {
            return _this8.videoUrl = _this8.sanitizer.bypassSecurityTrustResourceUrl(url);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.videoService.videoUrlSubject.complete();
        }
      }]);

      return MainViewComponent;
    }();

    MainViewComponent.ɵfac = function MainViewComponent_Factory(t) {
      return new (t || MainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainViewComponent,
      selectors: [["app-main-view"]],
      decls: 2,
      vars: 1,
      consts: [[1, "video-container"], ["allow", "picture-in-picture;autoplay", "allowfullscreen", ""]],
      template: function MainViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: [".video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 600px !important;\r\n  border: none;\r\n  margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNvbnRhaW5lciBpZnJhbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-view',
          templateUrl: './main-view.component.html',
          styleUrls: ['./main-view.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/post-comment/post-comment.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/video_detail/post-comment/post-comment.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PostCommentComponent */

  /***/
  function srcAppComponentsVideo_detailPostCommentPostCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function () {
      return PostCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_comment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/comment.model */
    "./src/app/model/comment.model.ts");
    /* harmony import */


    var src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/checklogin.service */
    "./src/app/services/checklogin.service.ts");
    /* harmony import */


    var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/comment.service */
    "./src/app/services/comment.service.ts");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/control.login.modal.service */
    "./src/app/services/control.login.modal.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PostCommentComponent = /*#__PURE__*/function () {
      function PostCommentComponent(checkLoginService, commentService, videoService, controlLoginModalService) {
        _classCallCheck(this, PostCommentComponent);

        this.checkLoginService = checkLoginService;
        this.commentService = commentService;
        this.videoService = videoService;
        this.controlLoginModalService = controlLoginModalService;
      }

      _createClass(PostCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.checkLoginService.loginStream$.subscribe(function (isLogin) {
            if (isLogin === " ") _this9.isLogined = false;else _this9.isLogined = true;
          });
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this10 = this;

          var user = "";
          var time_gen = new Date();
          var message = this.feedback_text;
          this.checkLoginService.loginStream$.subscribe(function (username) {
            return user = username;
          }); // from current href to determine id video

          var id = window.location.href.split('/')[4]; // post comment

          this.commentService.postComment(user, message, time_gen, id);
          this.videoService.getVideoById(window.location.href.split('/')[4]).subscribe(function (video) {
            var comment = video.commentDTOS;
            comment.push(new src_app_model_comment_model__WEBPACK_IMPORTED_MODULE_1__["Comment"](user, message, time_gen));

            _this10.videoService.commentsSubject.next(comment);

            _this10.videoService.videoSubject.next(video);
          });
          this.videoService.commentsSubject.subscribe(function (cs) {
            return _this10.comments = cs;
          });
          this.feedback_text = "";
        }
      }, {
        key: "openLoginModal",
        value: function openLoginModal() {
          this.controlLoginModalService.setLoginModalStatus(true);
        }
      }, {
        key: "closePostComment",
        value: function closePostComment() {
          this.feedback_text = "";
          var time_gen = new Date();
          console.log(time_gen.getDay() + '/' + time_gen.getMonth() + '/' + time_gen.getFullYear());
        }
      }, {
        key: "openPostCommentModal",
        value: function openPostCommentModal() {
          console.log('open');
        }
      }]);

      return PostCommentComponent;
    }();

    PostCommentComponent.ɵfac = function PostCommentComponent_Factory(t) {
      return new (t || PostCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_2__["CheckLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_5__["ControlLoginModalService"]));
    };

    PostCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostCommentComponent,
      selectors: [["app-post-comment"]],
      decls: 14,
      vars: 5,
      consts: [["ngNativeValidate", "", 1, "feedback_video", "auth", 3, "ngSubmit"], [1, "user-icon-container"], ["src", "../../../assets/images/logo.png", "alt", "", 1, "user-icon"], [1, "post-comment-container"], ["for", "feedback_text", 1, "post-comment--input", 3, "click"], ["type", "text", "name", "feedback_text", "placeholder", "Nh\u1EADp b\xECnh lu\u1EADn...", "autocomplete", "off", 1, "post-comment--text", 3, "ngModel", "ngModelChange"], [1, "post-comment-btn"], [1, "btn", 3, "click"], [1, "btn", "btn--primary"], [1, "auth"], [1, "btn", "btn--primary", "post-comment--logined", 3, "click"]],
      template: function PostCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostCommentComponent_Template_form_ngSubmit_0_listener() {
            return ctx.postComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCommentComponent_Template_label_click_4_listener() {
            return ctx.openPostCommentModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostCommentComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.feedback_text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCommentComponent_Template_a_click_7_listener() {
            return ctx.closePostComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G\u1EEDi b\xECnh lu\u1EADn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCommentComponent_Template_button_click_12_listener() {
            return ctx.openLoginModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0110\u0103ng nh\u1EADp \u0111\u1EC3 g\u1EEDi b\xECnh lu\u1EADn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isLogined", ctx.isLogined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.feedback_text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isLogined", !ctx.isLogined);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".post-comment-container[_ngcontent-%COMP%]{\r\n  flex:1;\r\n}\r\n\r\n\r\n.auth[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.post-comment--logined[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 150px;\r\n}\r\n\r\n\r\n.post-comment--text[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  line-height: 50px;\r\n\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  background-color: var(--primary-color);\r\n  outline: none;\r\n  color: var(--header-color);\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.post-comment--text[_ngcontent-%COMP%]:focus{\r\n  border-bottom: 1px solid var(--header-color);\r\n}\r\n\r\n\r\n.post-comment-btn[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvcG9zdC1jb21tZW50L3Bvc3QtY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLE1BQU07QUFDUjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjs7RUFFakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOzs7QUFDQTtFQUNFLDRDQUE0QztBQUM5Qzs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvX2RldGFpbC9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBvc3QtY29tbWVudC1jb250YWluZXJ7XHJcbiAgZmxleDoxO1xyXG59XHJcblxyXG5cclxuLmF1dGh7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucG9zdC1jb21tZW50LS1sb2dpbmVke1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5wb3N0LWNvbW1lbnQtLXRleHR7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnBvc3QtY29tbWVudC0tdGV4dDpmb2N1c3tcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLnBvc3QtY29tbWVudC1idG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-comment',
          templateUrl: './post-comment.component.html',
          styleUrls: ['./post-comment.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_checklogin_service__WEBPACK_IMPORTED_MODULE_2__["CheckLoginService"]
        }, {
          type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]
        }, {
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]
        }, {
          type: src_app_services_control_login_modal_service__WEBPACK_IMPORTED_MODULE_5__["ControlLoginModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/social_share/social-share/social-share.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/video_detail/social_share/social-share/social-share.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SocialShareComponent */

  /***/
  function srcAppComponentsVideo_detailSocial_shareSocialShareSocialShareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function () {
      return SocialShareComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocialShareComponent = /*#__PURE__*/function () {
      function SocialShareComponent() {
        _classCallCheck(this, SocialShareComponent);
      }

      _createClass(SocialShareComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialShareComponent;
    }();

    SocialShareComponent.ɵfac = function SocialShareComponent_Factory(t) {
      return new (t || SocialShareComponent)();
    };

    SocialShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialShareComponent,
      selectors: [["app-social-share"]],
      decls: 18,
      vars: 0,
      consts: [[1, "nav_social-list"], [1, "title"], [1, "nav_social-item"], ["href", "", 1, "nav_social-item--link"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-snapchat-ghost"]],
      template: function SocialShareComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".nav_social-list[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 5px;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 1.6rem;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]{\r\n  margin: 10px 0;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  font-size: 1.6rem;\r\n  color: #fff;\r\n}\r\n.nav_social-item--link[_ngcontent-%COMP%]{\r\n  display: block;\r\n  border-radius: 50%;\r\n  height: 45px;\r\n  width: 45px;\r\n  text-align: center;\r\n  line-height: 45px;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]:nth-child(2)   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  background-color: #4c65a8;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]:nth-child(3)   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  background-color: #41a1f6;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]:nth-child(4)   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  background-color: #f43535;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]:nth-child(5)   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  background-color: #8f6247;\r\n}\r\n.nav_social-item[_ngcontent-%COMP%]:nth-child(6)   .nav_social-item--link[_ngcontent-%COMP%]{\r\n  background-color: #f0c605;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvc29jaWFsX3NoYXJlL3NvY2lhbC1zaGFyZS9zb2NpYWwtc2hhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvX2RldGFpbC9zb2NpYWxfc2hhcmUvc29jaWFsLXNoYXJlL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdl9zb2NpYWwtbGlzdHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG4ubmF2X3NvY2lhbC1pdGVte1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5uYXZfc29jaWFsLWl0ZW0gLm5hdl9zb2NpYWwtaXRlbS0tbGlua3tcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2X3NvY2lhbC1pdGVtLS1saW5re1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5uYXZfc29jaWFsLWl0ZW06bnRoLWNoaWxkKDIpIC5uYXZfc29jaWFsLWl0ZW0tLWxpbmt7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjVhODtcclxufVxyXG4ubmF2X3NvY2lhbC1pdGVtOm50aC1jaGlsZCgzKSAubmF2X3NvY2lhbC1pdGVtLS1saW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MWExZjY7XHJcbn1cclxuLm5hdl9zb2NpYWwtaXRlbTpudGgtY2hpbGQoNCkgLm5hdl9zb2NpYWwtaXRlbS0tbGlua3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzNTM1O1xyXG59XHJcbi5uYXZfc29jaWFsLWl0ZW06bnRoLWNoaWxkKDUpIC5uYXZfc29jaWFsLWl0ZW0tLWxpbmt7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmNjI0NztcclxufVxyXG4ubmF2X3NvY2lhbC1pdGVtOm50aC1jaGlsZCg2KSAubmF2X3NvY2lhbC1pdGVtLS1saW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGM2MDU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-share',
          templateUrl: './social-share.component.html',
          styleUrls: ['./social-share.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/video-description/video-description.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/video_detail/video-description/video-description.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: VideoDescriptionComponent */

  /***/
  function srcAppComponentsVideo_detailVideoDescriptionVideoDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoDescriptionComponent", function () {
      return VideoDescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var VideoDescriptionComponent = /*#__PURE__*/function () {
      function VideoDescriptionComponent(videoService) {
        _classCallCheck(this, VideoDescriptionComponent);

        this.videoService = videoService;
      }

      _createClass(VideoDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.videoService.videoSubject.subscribe(function (video) {
            _this11.video = video;
            console.log(_this11.video);
          });
        }
      }, {
        key: "increaseLike",
        value: function increaseLike(id) {}
      }]);

      return VideoDescriptionComponent;
    }();

    VideoDescriptionComponent.ɵfac = function VideoDescriptionComponent_Factory(t) {
      return new (t || VideoDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]));
    };

    VideoDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoDescriptionComponent,
      selectors: [["app-video-description"]],
      decls: 24,
      vars: 9,
      consts: [[1, "video--type"], [1, "video--title"], [1, "video--info"], [1, "video-release--on"], [1, "video-attention--info"], [1, "video-interactive--item"], [1, "fas", "fa-eye"], [1, "qty-like"], [1, "video-interactive--item", "sub_like", 3, "click"], [1, "fas", "fa-thumbs-up"], [1, "qty-view"], [1, "far", "fa-comments"], [1, "qty-comment"], [1, "video--description"], [1, "description-text"]],
      template: function VideoDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDescriptionComponent_Template_li_click_13_listener() {
            return ctx.increaseLike(ctx.video.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.video.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, ctx.video.date_public, "short"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.video.total_view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.video.total_like);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.video.commentDTOS.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.video.description, " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".video--type[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  font-size: 1.1rem;\r\n  color:white;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  width: 45px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  background-color: var(--header-main-color);\r\n  text-align: center;\r\n  margin-bottom: 45px;\r\n  cursor: pointer;\r\n}\r\n.video--title[_ngcontent-%COMP%]{\r\n  font-size: 2rem;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n.video--info[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: var(--header-color);\r\n  font-size: 1.5rem;\r\n}\r\n.video-attention--info[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.video-interactive--item[_ngcontent-%COMP%]{\r\n  margin: 0 10px;\r\n}\r\n.video-interactive--item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n  margin-left: 3px;\r\n}\r\n.video--description[_ngcontent-%COMP%]{\r\n  margin: 45px 0;\r\n  color: var(--header-color);\r\n  font-size: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvdmlkZW8tZGVzY3JpcHRpb24vdmlkZW8tZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9fZGV0YWlsL3ZpZGVvLWRlc2NyaXB0aW9uL3ZpZGVvLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tLXR5cGV7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItbWFpbi1jb2xvcik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi52aWRlby0tdGl0bGV7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi52aWRlby0taW5mb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi52aWRlby1hdHRlbnRpb24tLWluZm97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4udmlkZW8taW50ZXJhY3RpdmUtLWl0ZW17XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLnZpZGVvLWludGVyYWN0aXZlLS1pdGVtID4gc3BhbntcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4udmlkZW8tLWRlc2NyaXB0aW9ue1xyXG4gIG1hcmdpbjogNDVweCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-description',
          templateUrl: './video-description.component.html',
          styleUrls: ['./video-description.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/video_detail/video_detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/video_detail/video_detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VideoDetailComponent */

  /***/
  function srcAppComponentsVideo_detailVideo_detailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoDetailComponent", function () {
      return VideoDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/video.service */
    "./src/app/services/video.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-view/main-view.component */
    "./src/app/components/video_detail/main-view/main-view.component.ts");
    /* harmony import */


    var _social_share_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./social_share/social-share/social-share.component */
    "./src/app/components/video_detail/social_share/social-share/social-share.component.ts");
    /* harmony import */


    var _video_description_video_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-description/video-description.component */
    "./src/app/components/video_detail/video-description/video-description.component.ts");
    /* harmony import */


    var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post-comment/post-comment.component */
    "./src/app/components/video_detail/post-comment/post-comment.component.ts");
    /* harmony import */


    var _comment_area_comment_area_comment_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comment_area/comment-area/comment-area.component */
    "./src/app/components/video_detail/comment_area/comment-area/comment-area.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var VideoDetailComponent = /*#__PURE__*/function () {
      function VideoDetailComponent(videoService, route) {
        _classCallCheck(this, VideoDetailComponent);

        this.videoService = videoService;
        this.route = route;
      }

      _createClass(VideoDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.paramMap.subscribe(function (params) {
            _this12.videoService.getVideoById(params.get('id')).subscribe(function (video) {
              _this12.videoService.videoUrlSubject.next(video.url);

              _this12.videoService.commentsSubject.next(video.commentDTOS);

              _this12.videoService.videoSubject.next(video);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.videoService.complete; // console.log('complete');
        }
      }]);

      return VideoDetailComponent;
    }();

    VideoDetailComponent.ɵfac = function VideoDetailComponent_Factory(t) {
      return new (t || VideoDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    VideoDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoDetailComponent,
      selectors: [["app-video-detail"]],
      decls: 27,
      vars: 0,
      consts: [[1, "grid", "wrapper"], [1, "wide"], [1, "listed-view"], [1, "container"], [1, "view-item"], ["href", "", 1, "view-item--link"], [1, "fas", "fa-home"], [1, "fas", "fa-chevron-right", "fa-custom-right"], [1, "main-area"], [1, "row"], [1, "c-1"], [1, "c-6"]],
      template: function VideoDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Archives ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Drake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-main-view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-social-share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-video-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-post-comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-comment-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__["MainViewComponent"], _social_share_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_5__["SocialShareComponent"], _video_description_video_description_component__WEBPACK_IMPORTED_MODULE_6__["VideoDescriptionComponent"], _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["PostCommentComponent"], _comment_area_comment_area_comment_area_component__WEBPACK_IMPORTED_MODULE_8__["CommentAreaComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
      styles: [".wrapper[_ngcontent-%COMP%]{\r\n  background-color: var(--primary-color);\r\n  padding-top: 140px;\r\n  padding-bottom: 30px;\r\n}\r\n.listed-view[_ngcontent-%COMP%]{\r\n  height: 80px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.view-item[_ngcontent-%COMP%]{\r\n  padding-left: 5px;\r\n}\r\n.view-item[_ngcontent-%COMP%]:hover    > .view-item--link[_ngcontent-%COMP%]{\r\n  color:var(--header-main-color);\r\n}\r\n.view-item--link[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n}\r\n.view-item[_ngcontent-%COMP%]:last-child    > .view-item--link[_ngcontent-%COMP%]{\r\n  color: var(--header-color);\r\n}\r\n.fa-custom-right[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem;\r\n  color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlb19kZXRhaWwvdmlkZW9fZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvX2RldGFpbC92aWRlb19kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHBhZGRpbmctdG9wOiAxNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4ubGlzdGVkLXZpZXd7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi52aWV3LWl0ZW17XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnZpZXctaXRlbTpob3ZlciA+IC52aWV3LWl0ZW0tLWxpbmt7XHJcbiAgY29sb3I6dmFyKC0taGVhZGVyLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4udmlldy1pdGVtLS1saW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4udmlldy1pdGVtOmxhc3QtY2hpbGQgPiAudmlldy1pdGVtLS1saW5re1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG59XHJcbi5mYS1jdXN0b20tcmlnaHR7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-detail',
          templateUrl: './video_detail.component.html',
          styleUrls: ['./video_detail.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/comment.model.ts":
  /*!****************************************!*\
    !*** ./src/app/model/comment.model.ts ***!
    \****************************************/

  /*! exports provided: Comment */

  /***/
  function srcAppModelCommentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });

    var Comment = function Comment(user_username, message, gen_time) {
      _classCallCheck(this, Comment);

      this.user_username = user_username;
      this.message = message;
      this.gen_time = gen_time;
    };
    /***/

  },

  /***/
  "./src/app/model/user.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/user.model.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = /*#__PURE__*/function () {
      function User(username, password) {
        _classCallCheck(this, User);

        this.username = username;
        this.password = password;
      }

      _createClass(User, [{
        key: "getUsername",
        get: function get() {
          return this.username;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/services/authen.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/authen.service.ts ***!
    \********************************************/

  /*! exports provided: AuthenService */

  /***/
  function srcAppServicesAuthenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenService", function () {
      return AuthenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenService = /*#__PURE__*/function () {
      function AuthenService(httpClient) {
        _classCallCheck(this, AuthenService);

        this.httpClient = httpClient;
      }

      _createClass(AuthenService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          return this.httpClient.post('http://localhost:8080/login', {
            username: username,
            password: password
          });
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('username');
          return !(user === null);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('username');
        }
      }]);

      return AuthenService;
    }();

    AuthenService.ɵfac = function AuthenService_Factory(t) {
      return new (t || AuthenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenService,
      factory: AuthenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/checklogin.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/checklogin.service.ts ***!
    \************************************************/

  /*! exports provided: CheckLoginService */

  /***/
  function srcAppServicesCheckloginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckLoginService", function () {
      return CheckLoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CheckLoginService = /*#__PURE__*/function () {
      function CheckLoginService() {
        _classCallCheck(this, CheckLoginService);

        this.isLogin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](" ");
        this.loginStream$ = this.isLogin.asObservable();
      }

      _createClass(CheckLoginService, [{
        key: "updateLoginStatus",
        value: function updateLoginStatus(username) {
          this.isLogin.next(username);
        }
      }]);

      return CheckLoginService;
    }();

    CheckLoginService.ɵfac = function CheckLoginService_Factory(t) {
      return new (t || CheckLoginService)();
    };

    CheckLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CheckLoginService,
      factory: CheckLoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/comment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/comment.service.ts ***!
    \*********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppServicesCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommentService = /*#__PURE__*/function () {
      function CommentService(httpClient) {
        _classCallCheck(this, CommentService);

        this.httpClient = httpClient;
      }

      _createClass(CommentService, [{
        key: "postComment",
        value: function postComment(user_username, message, gen_time, id) {
          console.log(message);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': sessionStorage.getItem('token')
            })
          };
          return this.httpClient.post('http://localhost:8080/api/videos/' + id + '/comment', {
            user_username: user_username,
            message: message,
            gen_time: gen_time
          }, httpOptions).subscribe(function (data) {
            return console.log(data);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CommentService;
    }();

    CommentService.ɵfac = function CommentService_Factory(t) {
      return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommentService,
      factory: CommentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/control.login.modal.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/control.login.modal.service.ts ***!
    \*********************************************************/

  /*! exports provided: ControlLoginModalService */

  /***/
  function srcAppServicesControlLoginModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlLoginModalService", function () {
      return ControlLoginModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ControlLoginModalService = /*#__PURE__*/function () {
      function ControlLoginModalService() {
        _classCallCheck(this, ControlLoginModalService);

        this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.loginModalStatus$ = this.loginStatusSubject.asObservable();
      }

      _createClass(ControlLoginModalService, [{
        key: "setLoginModalStatus",
        value: function setLoginModalStatus(status) {
          this.loginStatusSubject.next(status);
        }
      }, {
        key: "completeSubject",
        value: function completeSubject() {
          this.loginStatusSubject.complete;
        }
      }]);

      return ControlLoginModalService;
    }();

    ControlLoginModalService.ɵfac = function ControlLoginModalService_Factory(t) {
      return new (t || ControlLoginModalService)();
    };

    ControlLoginModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ControlLoginModalService,
      factory: ControlLoginModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlLoginModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/user.model */
    "./src/app/model/user.model.ts");

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      } // get user in storage


      _createClass(StorageService, [{
        key: "getUserInfoInStorage",
        value: function getUserInfoInStorage() {
          this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](sessionStorage.getItem('username'), '');
          return this.user;
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/video.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/video.service.ts ***!
    \*******************************************/

  /*! exports provided: VideoService */

  /***/
  function srcAppServicesVideoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoService", function () {
      return VideoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var VideoService = /*#__PURE__*/function () {
      function VideoService(httpClient) {
        _classCallCheck(this, VideoService);

        this.httpClient = httpClient; // in video detail page

        this.commentsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.videoUrlSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.videoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); // in home page

        this.videoInMainPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(VideoService, [{
        key: "getAllVideo",
        value: function getAllVideo() {
          return this.httpClient.get('http://localhost:8080/api/videos');
        }
      }, {
        key: "getVideoById",
        value: function getVideoById(id) {
          return this.httpClient.get('http://localhost:8080/api/videos/' + id);
        }
      }, {
        key: "complete",
        value: function complete() {
          this.commentsSubject.complete;
          this.videoUrlSubject.complete;
        }
      }]);

      return VideoService;
    }();

    VideoService.ɵfac = function VideoService_Factory(t) {
      return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VideoService,
      factory: VideoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular-tut\demo-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map