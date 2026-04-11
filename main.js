(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repos\github\loteria-angular\src\main.ts */"zUnb");


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

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Lzd+":
/*!**********************************!*\
  !*** ./src/app/LoteriaData.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"El Gallo\",\"imageName\":\"1_ElGallo.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que le cantó a San Pedro, no le volverá a cantar <b>!El Gallo¡</b>\",\"El que le cantó a San Pedro <b>!El Gallo¡</b>\"]},{\"id\":2,\"name\":\"El Diablo\",\"imageName\":\"2_ElDiablo.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Pórtate bien cuatito, si no te lleva el coloradito <b>!El Diablo¡</b>\"]},{\"id\":3,\"name\":\"La Dama\",\"imageName\":\"3_LaDama.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Puliendo el paso, por toda la calle real <b>!La Dama¡</b>\"]},{\"id\":4,\"name\":\"El Catrín\",\"imageName\":\"4_ElCatrin.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Don Ferruco el elegante su bastón quería tirar <b>!El Catrín¡</b>\"]},{\"id\":5,\"name\":\"El Paraguas\",\"imageName\":\"5_ElParaguas.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Para el sol y para el agua <b>!El Paraguas¡</b>\"]},{\"id\":6,\"name\":\"La Sirena\",\"imageName\":\"6_LaSirena.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Con los cantos de sirena no te vayas a marear <b>!La Sirena¡</b>\",\"Con los cantos de sirena hasta el marino se va a marear <b>!La Sirena¡</b>\",\"La que mita y mita, es la sirena de la mar <b>!La Sirena¡</b>\"]},{\"id\":7,\"name\":\"La Escalera\",\"imageName\":\"7_LaEscalera.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Súbeme paso a pasito, no quieras de un brinquito <b>!La Escalera¡</b>\",\"Súbeme paso a pasito, no quieras pegar brinquitos La escalera <b>!La Escalera¡</b>\"]},{\"id\":8,\"name\":\"La Botella\",\"imageName\":\"8_LaBotella.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La herramienta del borracho <b>!La Botella¡</b>\",\"La mujercita del borracho La botella <b>!La Botella¡</b>\"]},{\"id\":9,\"name\":\"El Barril\",\"imageName\":\"9_ElBarril.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Tanto bebió el albañil, que quedó como barril <b>!El Barril¡</b>\",\"Rueda, rueda, barrilito, no me tires el mezcal <b>!El Barril¡</b>\"]},{\"id\":10,\"name\":\"El Árbol\",\"imageName\":\"10_ElArbol.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que a buen árbol se arrima, buena sombra le cobija <b>!El Árbol¡</b>\",\"El que a gran árbol se arrima, que se cuide del pájaro mión <b>!El Árbol¡</b>\",\"El árbol de la noche triste, donde me iba a llorar El árbol <b>!El Árbol¡</b>\"]},{\"id\":11,\"name\":\"El Melón\",\"imageName\":\"11_ElMelon.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Me lo das o me lo quitas <b>!El Melón¡</b>\",\"O me lo das o me lo quitas o pa’ mejor melón, <b>!El Melón¡</b>\"]},{\"id\":12,\"name\":\"El Valiente\",\"imageName\":\"12_ElValiente.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Por qué le corres cobarde trayendo tan buen puñal <b>!El Valiente¡</b>\",\"¿Matas al tigre y le sales huyendo al cuero? <b>!El Valiente¡</b>\"]},{\"id\":13,\"name\":\"El Gorrito\",\"imageName\":\"13_ElGorrito.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Ponle su gorrito al nene, no se nos vaya a enfermar <b>!El Gorrito¡</b>\",\"Ponle su gorrito al nene, no se nos vaya a resfriar <b>!El Gorrito¡</b>\"]},{\"id\":14,\"name\":\"La Muerte\",\"imageName\":\"14_LaMuerte.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Aquí viene la señora muerte, la tilica y flaca <b>!La Muerte¡</b>\",\"La muerte siriquisiaca, sentada en su buena estaca <b>!La Muerte¡</b>\"]},{\"id\":15,\"name\":\"La Pera\",\"imageName\":\"15_Lapera.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que espera, desespera o se casa con doña Espera <b>!La Pera¡</b>\",\"El que espera desespera, en aquel camino real La pera <b>!La Pera¡</b>\"]},{\"id\":16,\"name\":\"La Bandera\",\"imageName\":\"16_LaBandera.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Verde, blanco y colorado, la bandera del soldado <b>!La Bandera¡</b>\"]},{\"id\":17,\"name\":\"El Bandolón\",\"imageName\":\"17_ElBandolon.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Tocando su bandolón, está el mariachi Simón <b>!El Bandolón¡</b>\"]},{\"id\":18,\"name\":\"El Violonchello\",\"imageName\":\"18_ElChello.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Como no fue violón, tuvo que ser violoncello <b>!El Violoncello¡</b>\",\"Creciendo se fue hasta el cielo, y como no fue violín, tuvo que ser violoncello, <b>!El Violoncello¡</b>\"]},{\"id\":19,\"name\":\"La Garza\",\"imageName\":\"19_LaGarza.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Al otro lado del río tengo mi banco donde se sienta mi chata, pico de garza morena <b>!La Garza¡</b>\",\"Ya vinieron picos largos, de la feria de San Juan <b>!La Garza¡</b>\"]},{\"id\":20,\"name\":\"El Pájaro\",\"imageName\":\"20_ElPajaro.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Tú me traes a puros brincos, como pájaro en la rama <b>!El Pájaro¡</b>\"]},{\"id\":21,\"name\":\"La Mano\",\"imageName\":\"21_LaMano.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La mano más larga es la de un criminal <b>!La Mano¡</b>\"]},{\"id\":22,\"name\":\"La Bota\",\"imageName\":\"22_LaBota.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Una bota es igual que l’otra <b>!La Bota¡</b>\"]},{\"id\":23,\"name\":\"La Luna\",\"imageName\":\"23_LaLuna.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El farol de los enamorados <b>!La Luna¡</b>\",\"La luna es tuerta de un ojo, y tu hermana de los dos <b>!La Luna¡</b>\"]},{\"id\":24,\"name\":\"El Cotorro\",\"imageName\":\"24_ElCotorro.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Cotorro, da acá la pata y empiézame a platicar <b>!El Cotorro¡</b>\"]},{\"id\":25,\"name\":\"El Borracho\",\"imageName\":\"25_ElBorracho.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"¡Ah, que borracho tan necio, ya no lo puedo aguantar! <b>!El Borracho¡</b>\"]},{\"id\":26,\"name\":\"El Negrito\",\"imageName\":\"26_ElNegrito.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que se comió el azúcar <b>!El Negrito¡</b>\",\"El negrito de La Habana, el que se llevó a tu hermana <b>!El Negrito¡</b>\"]},{\"id\":27,\"name\":\"El Corazón\",\"imageName\":\"27_ElCorazon.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"No me extrañes corazón, que regreso en el camión <b>!El Corazón¡</b>\"]},{\"id\":28,\"name\":\"La Sandía\",\"imageName\":\"28_LaSandia.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La barriga que Juan tenía, era empacho de sandía <b>!La Sandía¡</b>\"]},{\"id\":29,\"name\":\"El Tambor\",\"imageName\":\"29_ElTambor.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"No te arrugues cuero viejo que te quiero pa’ tambor <b>!El Tambor¡</b>\"]},{\"id\":30,\"name\":\"El Camarón\",\"imageName\":\"30_ElCamaron.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Camarón que se duerme, se lo lleva la corriente <b>!El Camarón¡</b>\"]},{\"id\":31,\"name\":\"Las Jaras\",\"imageName\":\"31_LasJaras.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Las jaras del indio Adán, donde pegan, dan <b>!Las Jaras¡</b>\"]},{\"id\":32,\"name\":\"El Músico\",\"imageName\":\"32_ElMusico.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El músico trompa de hule, ya no me quiere tocar <b>!El Músico¡</b>\"]},{\"id\":33,\"name\":\"La Araña\",\"imageName\":\"33_LaArana.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Atarántamela a palos, no me la dejes llegar <b>!La Araña¡</b>\"]},{\"id\":34,\"name\":\"El Soldado\",\"imageName\":\"34_ElSoldado.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Uno, dos y tres, el soldado p’al cuartel <b>!El Soldado¡</b>\"]},{\"id\":35,\"name\":\"La Estrella\",\"imageName\":\"35_LaEstrella.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La guía de los marineros <b>!La Estrella¡</b>\"]},{\"id\":36,\"name\":\"El Cazo\",\"imageName\":\"36_ElCazo.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El caso que te hago es poco <b>!El Cazo¡</b>\"]},{\"id\":37,\"name\":\"El Mundo\",\"imageName\":\"37_ElMundo.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Este mundo es una bola y nosotros un bolón <b>!El Mundo¡</b>\",\"El mundo se está acabando, arrímense a confesar <b>!El Mundo¡</b>\"]},{\"id\":38,\"name\":\"El Apache\",\"imageName\":\"38_ElApache.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"¡Ay Chihuahua! cuánto apache y yo sin flechas <b>!El Apache¡</b>\",\"¡Ay Chihuahua! cuánto apache con pantalón y huarache <b>!El Apache¡</b>\",\"El indio apache lloraba, de ver su suerte fatal <b>!El Apache¡</b>\"]},{\"id\":39,\"name\":\"El Nopal\",\"imageName\":\"39_ElNopal.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Al que todos van a ver, cuando tienen que comer <b>!El Nopal¡</b>\",\"Al nopal lo van a ver, nomás cuando tiene tunas El nopal <b>!El Nopal¡</b>\"]},{\"id\":40,\"name\":\"El Alacrán\",\"imageName\":\"40_ElAlacran.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que con la cola pica <b>!El Alacrán¡</b>\",\"El que con la cola pica, le dan una paliza El alacrán <b>!El Alacrán¡</b>\"]},{\"id\":41,\"name\":\"La Rosa\",\"imageName\":\"41_LaRosa.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Rosa, Rosita, Rosaura <b>!La Rosa¡</b>\",\"Rosita, Rosaura, ven que te quiero ahora <b>!La Rosa¡</b>\"]},{\"id\":42,\"name\":\"La Calavera\",\"imageName\":\"42_LaCalavera.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Al pasar por el panteón, me encontré un calaverón <b>!La Calavera¡</b>\",\"Cuatro dientes y una muela <b>!La Calavera¡</b>\"]},{\"id\":43,\"name\":\"La Campana\",\"imageName\":\"43_LaCampana.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La campana y tu debajo <b>!La Campana¡</b>\",\"La campana y tu debajo <b>!La Campana¡</b>\"]},{\"id\":44,\"name\":\"El Cantarito\",\"imageName\":\"44_ElCantaro.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Tanto va el cántaro al agua, que se quiebra y te moja las enaguas <b>!El Cantarito¡</b>\"]},{\"id\":45,\"name\":\"El Venado\",\"imageName\":\"45_ElVenado.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El venado no ve nada <b>!El Venado¡</b>\",\"Saltando va buscando, pero no ve nada <b>!El Venado¡</b>\"]},{\"id\":46,\"name\":\"El Sol\",\"imageName\":\"46_ElSol.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"La cobija para los pobres, <b>!El Sol¡</b>\",\"Solo te quedaste, de cobija de los pobres <b>!El Sol¡</b>\"]},{\"id\":47,\"name\":\"La Corona\",\"imageName\":\"47_LaCorona.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El sombrero de los reyes <b>!La Corona¡</b>\"]},{\"id\":48,\"name\":\"La Chalupa\",\"imageName\":\"48_LaChalupa.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Rema y rema va Lupita, sentada en su chalupita <b>!La Chalupa¡</b>\"]},{\"id\":49,\"name\":\"El Pino\",\"imageName\":\"49_ElPino.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Fresco, oloroso y en todo tiempo hermoso <b>!El Pino¡</b>\"]},{\"id\":50,\"name\":\"El Pescado\",\"imageName\":\"50_ElPescado.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que por la boca muere, aunque mudo fuere <b>!El Pescado¡</b>\"]},{\"id\":51,\"name\":\"La Palma\",\"imageName\":\"51_LaPalma.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Palmero sube a la palma y bájame un coco <b>!La Palma¡</b>\",\"Sube palmero a la palma, y bájame un coco <b>!La Palma¡</b>\"]},{\"id\":52,\"name\":\"La Maceta\",\"imageName\":\"52_LaMaceta.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El que nace pa’ maceta, no sale del corredor <b>!La Maceta¡</b>\"]},{\"id\":53,\"name\":\"El Arpa\",\"imageName\":\"53_ElArpa.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"El arpa vieja de mi suegra, ya no sirve p’a tocar <b>!El Arpa¡</b>\"]},{\"id\":54,\"name\":\"La Rana\",\"imageName\":\"54_LaRana.png\",\"imageUrl\":\"\",\"audioUrl\":\"\",\"script\":[\"Queeee saltos pegó tu hermana, <b>!La Rana¡</b>\",\"Al ver a la verde rana, ¡qué brinco pegó tu hermana! <b>!La Rana¡</b>\"]}]");

/***/ }),

/***/ "R8yp":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_LoteriaData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/LoteriaData.json */ "Lzd+");
var src_app_LoteriaData_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/LoteriaData.json */ "Lzd+", 1);
/* harmony import */ var src_app_LoteriaTables_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/LoteriaTables.json */ "SZie");
var src_app_LoteriaTables_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/LoteriaTables.json */ "SZie", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");

















const _c0 = ["maxTimeInput"];
function IndexComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cargando cartas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_main_1_nz_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_main_1_nz_card_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.funStartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Comenzar Juego! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExtra", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 24);
} }
function IndexComponent_main_1_nz_card_2_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 30);
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    let tmp_0_0 = null;
    let tmp_0_1 = null;
    let tmp_0_2 = null;
    let tmp_0_3 = null;
    let tmp_0_4 = null;
    let tmp_0_5 = null;
    let tmp_0_6 = null;
    let tmp_0_7 = null;
    let tmp_0_8 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzLabel", card_r13.name == null ? null : (tmp_0_0 = card_r13.name.replace("\u00E1", "a")) == null ? null : (tmp_0_1 = tmp_0_0.replace("\u00C1", "A")) == null ? null : (tmp_0_2 = tmp_0_1.replace("\u00E9", "e")) == null ? null : (tmp_0_3 = tmp_0_2.replace("\u00C9", "E")) == null ? null : (tmp_0_4 = tmp_0_3.replace("\u00ED", "i")) == null ? null : (tmp_0_5 = tmp_0_4.replace("\u00CD", "I")) == null ? null : (tmp_0_6 = tmp_0_5.replace("\u00F3", "o")) == null ? null : (tmp_0_7 = tmp_0_6.replace("\u00D3", "O")) == null ? null : (tmp_0_8 = tmp_0_7.replace("\u00FA", "u")) == null ? null : tmp_0_8.replace("\u00DA", "U"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", card_r13.id);
} }
function IndexComponent_main_1_nz_card_2_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_main_1_nz_card_2_div_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const table_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.evaluateTable(table_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r14 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r11.tableResults[table_r14.id] === true ? "#52c41a" : ctx_r11.tableResults[table_r14.id] === false ? "#ff4d4f" : "")("border-color", ctx_r11.tableResults[table_r14.id] === true ? "#52c41a" : ctx_r11.tableResults[table_r14.id] === false ? "#ff4d4f" : "")("color", ctx_r11.tableResults[table_r14.id] !== null && ctx_r11.tableResults[table_r14.id] !== undefined ? "white" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tablero ", table_r14.id, " ");
} }
function IndexComponent_main_1_nz_card_2_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 8)("nzMd", 4)("nzLg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/img/cards/", card_r17.imageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
const _c2 = function () { return [8, 8]; };
function IndexComponent_main_1_nz_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-progress", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_main_1_nz_card_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.showModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A1Loteria! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-modal", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function IndexComponent_main_1_nz_card_2_Template_nz_modal_nzVisibleChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.modalVisible = $event; })("nzOnCancel", function IndexComponent_main_1_nz_card_2_Template_nz_modal_nzOnCancel_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.handleCancel(); })("nzOnOk", function IndexComponent_main_1_nz_card_2_Template_nz_modal_nzOnOk_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buscar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IndexComponent_main_1_nz_card_2_nz_option_21_Template, 1, 2, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Verificar Tablero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IndexComponent_main_1_nz_card_2_div_27_Template, 3, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IndexComponent_main_1_nz_card_2_div_29_Template, 2, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExtra", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 12)("nzLg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.cardImgNameSelected, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 12)("nzLg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.cardNameSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx_r3.percent.toString())("nzWidth", 300)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1))("nzFormat", ctx_r3.formatProgressBarToSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.loteriaScript, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r3.modalVisible)("nzOkLoading", ctx_r3.isModalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 18)("nzMd", 12)("nzLg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.discoveredCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.loteriaTables);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.discoveredCards);
} }
function IndexComponent_main_1_nz_card_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 39);
} }
function IndexComponent_main_1_nz_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_main_1_nz_card_3_div_1_Template, 1, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A1Ganaste! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_main_1_nz_card_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.resetGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Volver a jugar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isCelebrating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzMd", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzMd", 12);
} }
function IndexComponent_main_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_main_1_ng_template_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.showSettingsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_main_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Duraci\u00F3n de segundos: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-input-number", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_main_1_ng_container_7_Template_nz_input_number_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.maxTime = $event; })("keyup.enter", function IndexComponent_main_1_ng_container_7_Template_nz_input_number_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.settingModalOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large")("ngModel", ctx_r7.maxTime)("nzMin", 1)("nzMax", 30)("nzStep", 1);
} }
function IndexComponent_main_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_main_1_nz_card_1_Template, 5, 5, "nz-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndexComponent_main_1_nz_card_2_Template, 30, 29, "nz-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndexComponent_main_1_nz_card_3_Template, 10, 5, "nz-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndexComponent_main_1_ng_template_4_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function IndexComponent_main_1_Template_nz_modal_nzVisibleChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.isModalSettingsVisible = $event; })("nzOnCancel", function IndexComponent_main_1_Template_nz_modal_nzOnCancel_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.settingModalCancel(); })("nzOnOk", function IndexComponent_main_1_Template_nz_modal_nzOnOk_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.settingModalOk(); })("nzAfterOpen", function IndexComponent_main_1_Template_nz_modal_nzAfterOpen_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.focusMaxTimeInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndexComponent_main_1_ng_container_7_Template, 7, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.startGame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.finishedGame && ctx_r1.startGame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.finishedGame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r1.isModalSettingsVisible);
} }
class IndexComponent {
    constructor() {
        this.isAppLoading = true;
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.isCelebrating = false;
        this.loteriaScript = "";
        this.i = 0;
        this.isModalSettingsVisible = false;
        this.startGame = false;
        this.finishedGame = false;
        this.modalVisible = false;
        this.isModalLoading = false;
        this.randomCards = this.randomizedCards(src_app_LoteriaData_json__WEBPACK_IMPORTED_MODULE_1__);
        //tablas de loteria
        this.loteriaTables = src_app_LoteriaTables_json__WEBPACK_IMPORTED_MODULE_2__;
        this.totalTables = src_app_LoteriaTables_json__WEBPACK_IMPORTED_MODULE_2__.length;
        this.discoveredCards = [];
        this.cardNameSelected = "";
        this.cardImgNameSelected = "";
        this.maxTime = 5;
        this.percent = 0;
        this.seconds = 0;
        this.end = 'Tiempo expirado';
        this.tableResults = {};
        this.formatProgressBarToSeconds = () => (this.seconds <= 1) ? `${this.seconds} Seg` : `${this.seconds} Segs`;
    }
    ngOnInit() {
        this.preloadImages(this.randomCards);
        if (this.i == 0) {
            this.cardNameSelected = this.randomCards[this.i].name;
            this.cardImgNameSelected = "./assets/img/cards/" + this.randomCards[this.i].imageName;
            const indexScript = randomIntFromInterval(0, this.randomCards[this.i].script.length > 0 ? this.randomCards[this.i].script.length - 1 : this.randomCards[this.i].script.length);
            this.loteriaScript = this.randomCards[this.i].script[indexScript];
        }
    }
    focusMaxTimeInput() {
        setTimeout(() => {
            var _a;
            (_a = this.maxTimeInput) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    preloadImages(cards) {
        this.totalImages = cards.length;
        this.imagesLoaded = 0;
        cards.forEach(card => {
            const img = new Image();
            img.onload = () => {
                this.imagesLoaded++;
                if (this.imagesLoaded === this.totalImages) {
                    this.isAppLoading = false;
                    console.log('Imágenes precargadas');
                }
            };
            img.onerror = () => {
                // Evita que una imagen rota bloquee la app
                this.imagesLoaded++;
                if (this.imagesLoaded === this.totalImages) {
                    this.isAppLoading = false;
                }
            };
            img.src = `./assets/img/cards/${card.imageName}`;
        });
    }
    startTimer() {
        if (this.startGame) {
            this.loteriaScript = "";
            const indexScript = randomIntFromInterval(0, this.randomCards[this.i].script.length > 0 ? this.randomCards[this.i].script.length - 1 : this.randomCards[this.i].script.length);
            //this.seconds = 0;
            this.interval = setInterval(() => {
                this.cardNameSelected = this.randomCards[this.i].name;
                this.cardImgNameSelected = "./assets/img/cards/" + this.randomCards[this.i].imageName;
                this.seconds++;
                this.loteriaScript = this.randomCards[this.i].script[indexScript];
                this.percent = (this.seconds * 100) / this.maxTime;
                if (this.seconds > this.maxTime) {
                    this.i++;
                    this.seconds = 0;
                    this.killTimer();
                    if (this.i < this.randomCards.length) {
                        this.startTimer();
                    }
                }
            }, 1000);
        }
    }
    killTimer() {
        clearInterval(this.interval);
    }
    randomizedCards(c) {
        return c.sort(() => Math.random() - 0.5);
    }
    showModal() {
        this.modalVisible = true;
        this.tableResults = {};
        this.killTimer();
        this.discoveredCards = [];
        const add = (this.seconds == 0) ? 0 : 1;
        for (let index = 0; index < this.i + add; index++) {
            this.discoveredCards.push(this.randomCards[index]);
        }
    }
    evaluateTable(table) {
        const discoveredIds = new Set(this.discoveredCards.map(c => c.id));
        const allMatch = table.cardIds.every((id) => discoveredIds.has(id));
        this.tableResults[table.id] = allMatch;
    }
    handleOk() {
        this.isCelebrating = true;
        console.log("CELENRATING:" + this.isCelebrating);
        this.isModalLoading = true;
        setTimeout(() => {
            this.modalVisible = false;
            this.isModalLoading = false;
        }, 3000);
        this.finishedGame = true;
        this.killTimer();
    }
    funStartGame() {
        this.startGame = true;
        this.finishedGame = false;
        this.startTimer();
    }
    handleCancel() {
        this.modalVisible = false;
        this.startTimer();
    }
    resetGame() {
        this.isCelebrating = false;
        this.i = 0;
        this.seconds = 0;
        this.percent = 0;
        this.killTimer();
        this.randomCards = [];
        this.discoveredCards = [];
        this.randomCards = this.randomizedCards(src_app_LoteriaData_json__WEBPACK_IMPORTED_MODULE_1__);
        this.startTimer();
        this.finishedGame = false;
        this.modalVisible = false;
        this.cardImgNameSelected = "";
        this.cardNameSelected = "";
    }
    showSettingsModal() {
        this.killTimer();
        this.isModalSettingsVisible = true;
    }
    settingModalOk() {
        const tempCounterSeconds = this.seconds;
        this.settingModalCancel();
    }
    settingModalCancel() {
        this.startTimer();
        this.isModalSettingsVisible = false;
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], viewQuery: function IndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maxTimeInput = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "app-loading", 4, "ngIf"], ["class", "main-container", 4, "ngIf"], [1, "app-loading"], [1, "spinner"], [2, "color", "white"], [1, "main-container"], ["class", "card-start", 3, "nzExtra", 4, "ngIf"], ["class", "card-game", 3, "nzExtra", 4, "ngIf"], ["class", "card-finish", 4, "ngIf"], ["extraTemplate", ""], ["nzTitle", "Settings", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk", "nzAfterOpen"], [4, "nzModalContent"], [1, "card-start", 3, "nzExtra"], ["nz-row", ""], ["nz-col", "", 2, "text-align", "center", 3, "nzXs", "nzSm", "nzMd", "nzLg"], ["nz-button", "", "nzType", "primary", 1, "btn", "second", 3, "click"], [1, "card-game", 3, "nzExtra"], ["nz-col", "", 3, "nzXs", "nzSm", "nzMd", "nzLg"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "card-name"], ["nzType", "circle", 1, "img-fluid", 3, "nzPercent", "nzWidth", "nzStrokeColor", "nzFormat"], [2, "text-align", "center", "margin-top", "25px", "font-size", "27px", 3, "innerHTML"], ["nz-col", "", 2, "text-align", "center", 3, "nzXs"], ["nzTitle", "\u00A1Loteria!", "nzWidth", "95vw", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [2, "font-weight", "bold"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Escribe el nombre de la carta", 2, "width", "100%"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzXs", "nzSm", "nzMd", "nzLg", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-col", ""], ["nz-button", "", 3, "click"], [1, "card-finish"], ["class", "celebration-container", 4, "ngIf"], [1, "text-center", "card-name"], ["nz-col", "", 3, "nzXs", "nzMd"], ["src", "./assets/img/celebrate3.gif", "alt", "", 1, "img-fluid", 2, "border-radius", "16px"], ["nz-col", "", 1, "centerHV", 3, "nzXs", "nzMd"], [1, "celebration-container"], ["nz-icon", "", "nzType", "setting", "nzTheme", "twotone", 2, "cursor", "pointer", "font-size", "36px", 3, "click"], ["nz-form", ""], [3, "nzSpan"], ["name", "maxTime", 2, "width", "100%", 3, "nzSize", "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange", "keyup.enter"], ["maxTimeInput", ""]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IndexComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_main_1_Template, 8, 4, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAppLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAppLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalContentDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__["NzProgressComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormLabelComponent"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 16px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.card-start[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  border-radius: 25px;\r\n}\r\n.card-game[_ngcontent-%COMP%], .card-finish[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 1100px;\r\n  border-radius: 25px;\r\n}\r\n\r\n.card-name[_ngcontent-%COMP%] {\r\n  font-size: clamp(32px, 5vw, 60px);\r\n  text-align: center;\r\n  margin-bottom: 16px;\r\n}\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 350px;\r\n  height: auto;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.centerHV[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  background-color: transparent;\r\n  border: 2px solid #e74c3c;\r\n  border-radius: 0.6em;\r\n  color: #e74c3c;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  margin: 20px auto;\r\n  padding: 1.2em 2.8em;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-family: 'Montserrat', sans-serif;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: black;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n  color: #fff;\r\n  outline: 0;\r\n}\r\n\r\n.second[_ngcontent-%COMP%] {\r\n  border-radius: 3em;\r\n  border-color: #1abc9c;\r\n  color: #fff;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgba(26, 188, 156, 0.6) 0%,\r\n    rgba(26, 188, 156, 0.6) 5%,\r\n    #1abc9c 5%,\r\n    #1abc9c 10%,\r\n    rgba(26, 188, 156, 0.6) 10%,\r\n    rgba(26, 188, 156, 0.6) 15%,\r\n    #1abc9c 15%,\r\n    #1abc9c 20%,\r\n    rgba(26, 188, 156, 0.6) 20%,\r\n    rgba(26, 188, 156, 0.6) 25%,\r\n    #1abc9c 25%,\r\n    #1abc9c 30%,\r\n    rgba(26, 188, 156, 0.6) 30%,\r\n    rgba(26, 188, 156, 0.6) 35%,\r\n    #1abc9c 35%,\r\n    #1abc9c 40%,\r\n    rgba(26, 188, 156, 0.6) 40%,\r\n    rgba(26, 188, 156, 0.6) 45%,\r\n    #1abc9c 45%,\r\n    #1abc9c 50%,\r\n    rgba(26, 188, 156, 0.6) 50%,\r\n    rgba(26, 188, 156, 0.6) 55%,\r\n    #1abc9c 55%,\r\n    #1abc9c 60%,\r\n    rgba(26, 188, 156, 0.6) 60%,\r\n    rgba(26, 188, 156, 0.6) 65%,\r\n    #1abc9c 65%,\r\n    #1abc9c 70%,\r\n    rgba(26, 188, 156, 0.6) 70%,\r\n    rgba(26, 188, 156, 0.6) 75%,\r\n    #1abc9c 75%,\r\n    #1abc9c 80%,\r\n    rgba(26, 188, 156, 0.6) 80%,\r\n    rgba(26, 188, 156, 0.6) 85%,\r\n    #1abc9c 85%,\r\n    #1abc9c 90%,\r\n    rgba(26, 188, 156, 0.6) 90%,\r\n    rgba(26, 188, 156, 0.6) 95%,\r\n    #1abc9c 95%,\r\n    #1abc9c 100%\r\n  );\r\n  background-size: 100%;\r\n  transition: background 300ms ease-in-out;\r\n}\r\n.second[_ngcontent-%COMP%]:hover {\r\n  background-position: 100px;\r\n}\r\n\r\n.celebration-container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('/././assets/img/confetti.svg');\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .main-container[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .img-fluid[_ngcontent-%COMP%] {\r\n    max-width: 280px;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    padding: 0.8em 1.6em;\r\n  }\r\n\r\n}\r\n\r\n\r\n.app-loading[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.spinner[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n  border: 6px solid #ddd;\r\n  border-top: 6px solid #1890ff;\r\n  border-radius: 50%;\r\n  animation: spin 1s linear infinite;\r\n}\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzJCQUUyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7OzJCQUUyQjtBQUMzQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTs7MkJBRTJCO0FBQzNCO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBOzsyQkFFMkI7QUFDM0I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7OzJCQUUyQjtBQUMzQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7OzJCQUUyQjtBQUMzQjtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQztBQUVBOztFQUVFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENDO0VBQ0QscUJBQXFCO0VBQ3JCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7OzJCQUUyQjtBQUMzQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscURBQXFEO0VBQ3JELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7OzJCQUUyQjtBQUMzQjs7RUFFRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0FBRUY7QUFHQSw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQSw2QkFBNkIiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ09OVEVORURPUiBQUklOQ0lQQUxcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ0FSRFNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uY2FyZC1zdGFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1nYW1lLFxyXG4uY2FyZC1maW5pc2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVEVYVE9cclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uY2FyZC1uYW1lIHtcclxuICBmb250LXNpemU6IGNsYW1wKDMycHgsIDV2dywgNjBweCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIElNw4FHRU5FU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDRU5UUkFET1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jZW50ZXJIViB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEJPVE9ORVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uYnRuIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICBib3JkZXItcmFkaXVzOiAwLjZlbTtcclxuICBjb2xvcjogI2U3NGMzYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAxLjJlbSAyLjhlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG46aG92ZXIsXHJcbi5idG46Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8qIEJvdMOzbiB2ZXJkZSAqL1xyXG4uc2Vjb25kIHtcclxuICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWFiYzljO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgMCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSA1JSxcclxuICAgICMxYWJjOWMgNSUsXHJcbiAgICAjMWFiYzljIDEwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDEwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDE1JSxcclxuICAgICMxYWJjOWMgMTUlLFxyXG4gICAgIzFhYmM5YyAyMCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSAyMCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSAyNSUsXHJcbiAgICAjMWFiYzljIDI1JSxcclxuICAgICMxYWJjOWMgMzAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgMzAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgMzUlLFxyXG4gICAgIzFhYmM5YyAzNSUsXHJcbiAgICAjMWFiYzljIDQwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDQwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDQ1JSxcclxuICAgICMxYWJjOWMgNDUlLFxyXG4gICAgIzFhYmM5YyA1MCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSA1MCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSA1NSUsXHJcbiAgICAjMWFiYzljIDU1JSxcclxuICAgICMxYWJjOWMgNjAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgNjAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgNjUlLFxyXG4gICAgIzFhYmM5YyA2NSUsXHJcbiAgICAjMWFiYzljIDcwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDcwJSxcclxuICAgIHJnYmEoMjYsIDE4OCwgMTU2LCAwLjYpIDc1JSxcclxuICAgICMxYWJjOWMgNzUlLFxyXG4gICAgIzFhYmM5YyA4MCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSA4MCUsXHJcbiAgICByZ2JhKDI2LCAxODgsIDE1NiwgMC42KSA4NSUsXHJcbiAgICAjMWFiYzljIDg1JSxcclxuICAgICMxYWJjOWMgOTAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgOTAlLFxyXG4gICAgcmdiYSgyNiwgMTg4LCAxNTYsIDAuNikgOTUlLFxyXG4gICAgIzFhYmM5YyA5NSUsXHJcbiAgICAjMWFiYzljIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2Vjb25kOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDBweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDRUxFQlJBQ0nDk05cclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uY2VsZWJyYXRpb24tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4vLi9hc3NldHMvaW1nL2NvbmZldHRpLnN2ZycpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBSRVNQT05TSVZFIChNw5NWSUwpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5pbWctZmx1aWQge1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjZlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi8qICAgU1BJTiBMT0FESU5HICAgICAqL1xyXG4uYXBwLWxvYWRpbmcge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgI2RkZDtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgIzE4OTBmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09Ki8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css'],
            }]
    }], function () { return []; }, { maxTimeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['maxTimeInput']
        }] }); })();
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/***/ }),

/***/ "SZie":
/*!************************************!*\
  !*** ./src/app/LoteriaTables.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"cardIds\":[1,2,3,4,10,11,12,13,19,20,21,22,28,29,30,31]},{\"id\":2,\"cardIds\":[6,7,8,9,15,16,17,18,24,25,26,27,33,34,35,36]},{\"id\":3,\"cardIds\":[2,3,4,5,7,8,9,10,12,13,14,15,17,18,19,20]},{\"id\":4,\"cardIds\":[43,44,45,21,52,53,54,26,7,8,9,31,16,17,18,36]},{\"id\":5,\"cardIds\":[22,23,24,25,27,28,29,30,32,33,34,35,37,38,39,40]},{\"id\":6,\"cardIds\":[21,22,23,24,30,31,32,33,39,40,41,42,48,49,50,51]},{\"id\":7,\"cardIds\":[25,26,27,41,34,35,36,46,43,44,45,51,52,53,54,32]},{\"id\":8,\"cardIds\":[42,43,44,45,47,48,49,50,52,53,54,1,40,10,19,20]},{\"id\":9,\"cardIds\":[41,42,37,38,50,51,46,47,5,6,1,2,14,15,10,11]},{\"id\":10,\"cardIds\":[40,23,4,5,27,28,9,30,32,13,34,35,37,18,39,22]}]");

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
        this.isCollapsed = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".layout[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 31px;\r\n    background: rgba(255, 255, 255, 0.30);\r\n    margin: 16px 24px 16px 0;\r\n    float: left;\r\n  }\r\n\r\n  nz-header[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n  }\r\n\r\n  [nz-menu][_ngcontent-%COMP%] {\r\n    line-height: 64px;\r\n  }\r\n\r\n  nz-content[_ngcontent-%COMP%] {\r\n    background-image: url('horizontal-lines.svg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    padding: 0 50px;\r\n    margin-top: 64px;\r\n  }\r\n\r\n  nz-breadcrumb[_ngcontent-%COMP%] {\r\n    margin: 16px 0;\r\n  }\r\n\r\n  .inner-content[_ngcontent-%COMP%] {\r\n    background: rgb(216, 3, 3);\r\n    padding: 24px;\r\n    min-height: 380px;\r\n  }\r\n\r\n  nz-footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw2Q0FBMkQ7SUFDM0Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCk7XHJcbiAgICBtYXJnaW46IDE2cHggMjRweCAxNnB4IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIG56LWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIFtuei1tZW51XSB7XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICB9XHJcblxyXG4gIG56LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2hvcml6b250YWwtbGluZXMuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuICBuei1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIxNiwgMywgMyk7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgfVxyXG5cclxuICBuei1mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/index/index.component */ "R8yp");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "HSCc");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");



























Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["es_ES"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzGridModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__["NzCardModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__["NzSelectModule"],
            ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_23__["NzPipesModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__["NzInputNumberModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzGridModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__["NzCardModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__["NzSelectModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_23__["NzPipesModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__["NzInputNumberModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzGridModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_19__["NzCardModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__["NzSelectModule"],
                    ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_23__["NzPipesModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__["NzInputNumberModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["es_ES"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 21, vars: 0, consts: [[1, "header-area"], [1, "navbar-area"], [1, "container"], [1, "site-navbar"], ["href", "#home", 1, "site-logo"], ["href", "#"], [1, "nav-toggler"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n  }\r\n  .header-area[_ngcontent-%COMP%] {\r\n    background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)),\r\n    url(https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80);\r\n    background-position: center center;\r\n    background-size: cover;\r\n  }\r\n  \r\n  \r\n  .navbar-area[_ngcontent-%COMP%] {\r\n    background: rgba(0,0,0,.6);\r\n    border-bottom: 1px solid #000;\r\n  }\r\n  .site-navbar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  a.site-logo[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: flex;\r\n  }\r\n  .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    padding: 20px;\r\n    display: block;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n  }\r\n  .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255,255,255,.1);\r\n  }\r\n  \r\n  \r\n  .nav-toggler[_ngcontent-%COMP%] {\r\n    border: 3px solid #fff;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    height: 39px;\r\n    display: none;\r\n  }\r\n  .nav-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .nav-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    width: 28px;\r\n    height: 3px;\r\n    background-color: #fff;\r\n    display: block;\r\n    transition: .3s;\r\n  }\r\n  .nav-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    transform: translateY(-9px);\r\n  }\r\n  .nav-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    transform: translateY(6px);\r\n  }\r\n  .nav-toggler.toggler-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n  }\r\n  .nav-toggler.toggler-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n    transform: translateY(0px) rotate(45deg);\r\n  }\r\n  .nav-toggler.toggler-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    transform: translateY(-3px) rotate(-45deg);\r\n  }\r\n  \r\n  \r\n  .intro-area[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 61px);\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n  .intro-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-weight: 300;\r\n    line-height: 50px;\r\n    margin-bottom: 25px;\r\n  }\r\n  .intro-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n  \r\n  \r\n  @media screen and (max-width: 767px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 720px;\r\n    }\r\n    \r\n    .nav-toggler[_ngcontent-%COMP%]{\r\n      display: block;\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%] {\r\n      min-height: 60px;\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      width: 100%;\r\n      height: calc(100vh - 60px);\r\n      left: 0;\r\n      top: 60px;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      border-top: 1px solid #444;\r\n      background-color: rgba(0,0,0,.75);\r\n      max-height: 0;\r\n      overflow: hidden;\r\n      transition: .3s;\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      padding: 25px;\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      background-color: rgba(255,255,255,.1);\r\n    }\r\n    .site-navbar[_ngcontent-%COMP%]   ul.open[_ngcontent-%COMP%] {\r\n      max-height: 100vh;\r\n      overflow: visible;\r\n    }\r\n    .intro-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 36px;\r\n      margin-bottom: 15px;\r\n    }  \r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFOytJQUMySTtJQUMzSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0VBQ3hCO0VBQ0Esb0JBQW9CO0VBR3BCLDZCQUE2QjtFQUM3QjtJQUNFLDBCQUEwQjtJQUMxQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBLDJCQUEyQjtFQUczQiwwQkFBMEI7RUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBOzs7SUFHRSxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsV0FBVztJQUNYLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztFQUNBLDBCQUEwQjtFQUcxQix5QkFBeUI7RUFDekI7SUFDRSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQSx1QkFBdUI7RUFHdkIsNEJBQTRCO0VBQzVCO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQSxnQ0FBZ0M7SUFDaEM7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsMEJBQTBCO01BQzFCLE9BQU87TUFDUCxTQUFTO01BQ1Qsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQiwwQkFBMEI7TUFDMUIsaUNBQWlDO01BQ2pDLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxzQ0FBc0M7SUFDeEM7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGVBQWU7TUFDZixtQkFBbUI7SUFDckI7SUFDQSw4QkFBOEI7RUFDaEM7RUFDQSwwQkFBMEIiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLmhlYWRlci1hcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4zKSwgcmdiYSgwLDAsMCwuNSkpLFxyXG4gICAgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI4MzUzNTE4MTA0LWRiZDQ4YmVlN2JjND9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA4OSZxPTgwKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAvKiBkZWZhdWx0IGNzcyBlbmQgKi9cclxuICBcclxuICBcclxuICAvKiBuYXZiYXIgcmVndWxhciBjc3Mgc3RhcnQgKi9cclxuICAubmF2YmFyLWFyZWEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgLnNpdGUtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBhLnNpdGUtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2l0ZS1uYXZiYXIgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuc2l0ZS1uYXZiYXIgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5zaXRlLW5hdmJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG4gIH1cclxuICAvKiBuYXZiYXIgcmVndWxhciBjc3MgZW5kICovXHJcbiAgXHJcbiAgXHJcbiAgLyogbmF2LXRvZ2dsZXIgY3NzIHN0YXJ0ICovXHJcbiAgLm5hdi10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXYtdG9nZ2xlciBzcGFuLCBcclxuICAubmF2LXRvZ2dsZXIgc3BhbjpiZWZvcmUsIFxyXG4gIC5uYXYtdG9nZ2xlciBzcGFuOmFmdGVyIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgfVxyXG4gIC5uYXYtdG9nZ2xlciBzcGFuOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KTtcclxuICB9XHJcbiAgLm5hdi10b2dnbGVyIHNwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcclxuICB9XHJcbiAgLm5hdi10b2dnbGVyLnRvZ2dsZXItb3BlbiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAubmF2LXRvZ2dsZXIudG9nZ2xlci1vcGVuIHNwYW46YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIC5uYXYtdG9nZ2xlci50b2dnbGVyLW9wZW4gc3BhbjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gIC8qIG5hdi10b2dnbGVyIGNzcyBzdGFydCAqL1xyXG4gIFxyXG4gIFxyXG4gIC8qIGludHJvLWFyZWEgY3NzIHN0YXJ0ICovXHJcbiAgLmludHJvLWFyZWEge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjFweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuaW50cm8tYXJlYSBoMiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAuaW50cm8tYXJlYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLyogaW50cm8tYXJlYSBjc3MgZW5kICovXHJcbiAgXHJcbiAgXHJcbiAgLyogbW9iaWxlIGJyZWFrcG9pbnQgc3RhcnQgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICB9XHJcbiAgICAvKiBuYXZiYXIgY3NzIGZvciBtb2JpbGUgc3RhcnQgKi9cclxuICAgIC5uYXYtdG9nZ2xlcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXZiYXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2YmFyIHVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2YmFyIHVsIGxpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdmJhciB1bCBsaSBhIHtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdmJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXZiYXIgdWwub3BlbiB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC5pbnRyby1hcmVhIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfSAgXHJcbiAgICAvKiBuYXZiYXIgY3NzIGZvciBtb2JpbGUgZW5kICovXHJcbiAgfVxyXG4gIC8qIG1vYmlsZSBicmVha3BvaW50IGVuZCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "R8yp");





const routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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