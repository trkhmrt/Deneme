"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/emails/route";
exports.ids = ["app/api/emails/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femails%2Froute&page=%2Fapi%2Femails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femails%2Froute.ts&appDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femails%2Froute&page=%2Fapi%2Femails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femails%2Froute.ts&appDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_codding_WebstormProjects_NaciFoto_naciphoto_app_api_emails_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/emails/route.ts */ \"(rsc)/./app/api/emails/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/emails/route\",\n        pathname: \"/api/emails\",\n        filename: \"route\",\n        bundlePath: \"app/api/emails/route\"\n    },\n    resolvedPagePath: \"/Users/codding/WebstormProjects/NaciFoto/naciphoto/app/api/emails/route.ts\",\n    nextConfigOutput,\n    userland: _Users_codding_WebstormProjects_NaciFoto_naciphoto_app_api_emails_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/emails/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmVtYWlscyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmVtYWlscyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNvZGRpbmclMkZXZWJzdG9ybVByb2plY3RzJTJGTmFjaUZvdG8lMkZuYWNpcGhvdG8lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGY29kZGluZyUyRldlYnN0b3JtUHJvamVjdHMlMkZOYWNpRm90byUyRm5hY2lwaG90byZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1leHBvcnQmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYWNpcGhvdG8vPzZmOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2NvZGRpbmcvV2Vic3Rvcm1Qcm9qZWN0cy9OYWNpRm90by9uYWNpcGhvdG8vYXBwL2FwaS9lbWFpbHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiZXhwb3J0XCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2VtYWlscy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2VtYWlsc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZW1haWxzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2NvZGRpbmcvV2Vic3Rvcm1Qcm9qZWN0cy9OYWNpRm90by9uYWNpcGhvdG8vYXBwL2FwaS9lbWFpbHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2VtYWlscy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femails%2Froute&page=%2Fapi%2Femails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femails%2Froute.ts&appDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/emails/route.ts":
/*!*********************************!*\
  !*** ./app/api/emails/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var _email_Welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/email/Welcome */ \"(rsc)/./email/Welcome.tsx\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"(rsc)/./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* .env.local içinde tanımladık böylece API anahtarımızı Github'a pushladığımızda herkes göremiyor. Çünkü .env.local pushlanmıyor. */ const resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(\"re_Az5avQSK_34TusgLQ4KC73LX65JMYVuJS\");\nconst cors = cors__WEBPACK_IMPORTED_MODULE_3___default()({\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"OPTIONS\"\n    ],\n    origin: \"*\"\n});\nfunction runCors(req) {\n    return new Promise((resolve, reject)=>{\n        cors(req, {}, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            resolve(result);\n        });\n    });\n}\nasync function POST(request) {\n    try {\n        // İstekten gelen JSON verilerini ayıkla\n        const { email, firstname, message } = await request.json();\n        // E-posta gönderme işlemi\n        await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: \"trkhamarat@gmail.com\",\n            subject: \"Hello World\",\n            react: (0,_email_Welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n                firstname,\n                message\n            })\n        });\n        // Başarılı olduğunda 200 yanıtı döndür\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            message: \"Email sent successfully.\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error sending email:\", error);\n        // Hata durumunda 500 yanıtı döndür\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            error: \"Failed to send email.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VtYWlscy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDTTtBQUNLO0FBQ25CO0FBRXhCLG1JQUFtSSxHQUNuSSxNQUFNSSxTQUFTLElBQUlKLDBDQUFNQSxDQUFDO0FBRTFCLE1BQU1LLE9BQU9GLDJDQUFJQSxDQUFDO0lBQ2RHLFNBQVM7UUFBQztRQUFPO1FBQVE7S0FBVTtJQUNuQ0MsUUFBUTtBQUNaO0FBRUEsU0FBU0MsUUFBUUMsR0FBWTtJQUN6QixPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDekJQLEtBQUtJLEtBQVksQ0FBQyxHQUFVLENBQUNJO1lBQ3pCLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDekIsT0FBT0YsT0FBT0M7WUFDbEI7WUFDQUYsUUFBUUU7UUFDWjtJQUNKO0FBQ0o7QUFHTyxlQUFlRSxLQUFLQyxPQUFnQjtJQUd2QyxJQUFJO1FBQ0Esd0NBQXdDO1FBQ3hDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1ILFFBQVFJLElBQUk7UUFFeEQsMEJBQTBCO1FBQzFCLE1BQU1oQixPQUFPaUIsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDckJDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTO1lBQ1RDLE9BQU96QiwwREFBT0EsQ0FBQztnQkFBRWlCO2dCQUFXQztZQUFRO1FBRXhDO1FBRUEsdUNBQXVDO1FBQ3ZDLE9BQU9qQixxREFBWUEsQ0FBQ2tCLElBQUksQ0FDcEI7WUFBRU8sU0FBUztZQUFNUixTQUFTO1FBQTJCLEdBQ3JEO1lBQUVTLFFBQVE7UUFBSTtJQUd0QixFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFFdEMsbUNBQW1DO1FBQ25DLE9BQU8zQixxREFBWUEsQ0FBQ2tCLElBQUksQ0FDcEI7WUFBRU8sU0FBUztZQUFPRSxPQUFPO1FBQXdCLEdBQ2pEO1lBQUVELFFBQVE7UUFBSTtJQUV0QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFjaXBob3RvLy4vYXBwL2FwaS9lbWFpbHMvcm91dGUudHM/YWZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnQC9lbWFpbC9XZWxjb21lJztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuXG4vKiAuZW52LmxvY2FsIGnDp2luZGUgdGFuxLFtbGFkxLFrIGLDtnlsZWNlIEFQSSBhbmFodGFyxLFtxLF6xLEgR2l0aHViJ2EgcHVzaGxhZMSxxJ/EsW3EsXpkYSBoZXJrZXMgZ8O2cmVtaXlvci4gw4fDvG5rw7wgLmVudi5sb2NhbCBwdXNobGFubcSxeW9yLiAqL1xuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZCgncmVfQXo1YXZRU0tfMzRUdXNnTFE0S0M3M0xYNjVKTVlWdUpTJyk7XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnXSxcbiAgICBvcmlnaW46ICcqJywgLy8gQnVyYWRhICcqJyBrdWxsYW5hcmFrIHTDvG0ga8O2a2VubGVyZSBpemluIHZlcmViaWxpcnNpbml6LiDEsGh0aXlhY8SxbsSxemEgZ8O2cmUgw7Z6ZWxsZcWfdGlyaW5cbn0pO1xuXG5mdW5jdGlvbiBydW5Db3JzKHJlcTogUmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvcnMocmVxIGFzIGFueSwge30gYXMgYW55LCAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuXG5cbiAgICB0cnkge1xuICAgICAgICAvLyDEsHN0ZWt0ZW4gZ2VsZW4gSlNPTiB2ZXJpbGVyaW5pIGF5xLFrbGFcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgZmlyc3RuYW1lLCBtZXNzYWdlIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgICAgICAvLyBFLXBvc3RhIGfDtm5kZXJtZSBpxZ9sZW1pXG4gICAgICAgIGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOiAnb25ib2FyZGluZ0ByZXNlbmQuZGV2JyxcbiAgICAgICAgICAgIHRvOiAndHJraGFtYXJhdEBnbWFpbC5jb20nLCAvLyBIZWRlZiBlLXBvc3RhIGFkcmVzaW5pIGRpbmFtaWsgb2xhcmFrIGt1bGxhblxuICAgICAgICAgICAgc3ViamVjdDogJ0hlbGxvIFdvcmxkJyxcbiAgICAgICAgICAgIHJlYWN0OiBXZWxjb21lKHsgZmlyc3RuYW1lLCBtZXNzYWdlIH0pLFxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJhxZ9hcsSxbMSxIG9sZHXEn3VuZGEgMjAwIHlhbsSxdMSxIGTDtm5kw7xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5LicgfSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICAgICApO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCBlcnJvcik7XG5cbiAgICAgICAgLy8gSGF0YSBkdXJ1bXVuZGEgNTAwIHlhbsSxdMSxIGTDtm5kw7xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgZW1haWwuJyB9LFxuICAgICAgICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlJlc2VuZCIsIldlbGNvbWUiLCJOZXh0UmVzcG9uc2UiLCJDb3JzIiwicmVzZW5kIiwiY29ycyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJydW5Db3JzIiwicmVxIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJmaXJzdG5hbWUiLCJtZXNzYWdlIiwianNvbiIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwicmVhY3QiLCJzdWNjZXNzIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/emails/route.ts\n");

/***/ }),

/***/ "(rsc)/./email/Welcome.tsx":
/*!***************************!*\
  !*** ./email/Welcome.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Welcome)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/html/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Welcome({ firstname, message }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"HELLOO \",\n                    firstname,\n                    \" Welcome!.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/codding/WebstormProjects/NaciFoto/naciphoto/email/Welcome.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/codding/WebstormProjects/NaciFoto/naciphoto/email/Welcome.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/codding/WebstormProjects/NaciFoto/naciphoto/email/Welcome.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9lbWFpbC9XZWxjb21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ3hCO0FBUWhCLFNBQVNFLFFBQVEsRUFBQ0MsU0FBUyxFQUFDQyxPQUFPLEVBQWM7SUFDNUQscUJBQ0ksOERBQUNKLHlEQUFJQTs7MEJBQ0QsOERBQUNLOztvQkFBRztvQkFBUUY7b0JBQVU7Ozs7Ozs7MEJBQ3RCLDhEQUFDRzswQkFBR0Y7Ozs7Ozs7Ozs7OztBQUdoQiIsInNvdXJjZXMiOlsid2VicGFjazovL25hY2lwaG90by8uL2VtYWlsL1dlbGNvbWUudHN4PzhkZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBIdG1sIH0gZnJvbSBcIkByZWFjdC1lbWFpbC9jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBXZWxjb21lUHJvcHMgPSB7XG4gICAgZmlyc3RuYW1lIDogc3RyaW5nO1xuICAgIG1lc3NhZ2U6c3RyaW5nO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWUoe2ZpcnN0bmFtZSxtZXNzYWdlfTpXZWxjb21lUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SHRtbD5cbiAgICAgICAgICAgIDxoMT5IRUxMT08ge2ZpcnN0bmFtZX0gV2VsY29tZSEuPC9oMT5cbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgPC9IdG1sPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSHRtbCIsIlJlYWN0IiwiV2VsY29tZSIsImZpcnN0bmFtZSIsIm1lc3NhZ2UiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./email/Welcome.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/resend","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/@react-email","vendor-chunks/vary","vendor-chunks/object-assign","vendor-chunks/deepmerge","vendor-chunks/cors"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femails%2Froute&page=%2Fapi%2Femails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femails%2Froute.ts&appDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcodding%2FWebstormProjects%2FNaciFoto%2Fnaciphoto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();