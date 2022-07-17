var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useFacebookLogin } from "../src/useFacebookLogin";
var Example = function (_a) {
    var appId = _a.appId;
    var _b = useFacebookLogin({
        appId: appId,
        onInitError: function (error) { return console.log("initialization error", error); },
    }), busy = _b.busy, logIn = _b.logIn, logOut = _b.logOut, getProfile = _b.getProfile;
    var _c = useState(null), userId = _c[0], setUserId = _c[1];
    function handleLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var response, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, logIn()];
                    case 1:
                        response = _a.sent();
                        if (!((response === null || response === void 0 ? void 0 : response.status) === "connected")) return [3 /*break*/, 3];
                        setUserId(response.authResponse.userID);
                        return [4 /*yield*/, getProfile()];
                    case 2:
                        profile = _a.sent();
                        console.log("profile", profile);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("div", __assign({ style: { display: "flex", flexDirection: "column", gap: "1rem" } }, { children: [_jsxs("div", { children: ["User id: ", userId !== null && userId !== void 0 ? userId : "null"] }), _jsx("div", { children: _jsx("button", __assign({ disabled: busy, onClick: handleLogin }, { children: busy ? "Please wait..." : "Log in with Facebook" })) }), _jsx("div", { children: _jsx("button", __assign({ disabled: busy || !userId, onClick: logOut }, { children: "Log out" })) }), _jsx("div", { children: _jsx("button", __assign({ onClick: function () { return setUserId(null); } }, { children: "Clear user id" })) })] })));
};
export var ExampleWrapper = function (_a) {
    var appId = _a.appId;
    if (!appId) {
        return _jsx("h1", { children: "Provide your App ID" });
    }
    return _jsx(Example, { appId: appId });
};
