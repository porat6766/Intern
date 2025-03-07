"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_1 = exports.Nutification = exports.User = exports.WhatsAppService = exports.SMSService = exports.EmailService = exports.INotificationService = void 0;
var INotificationService = /** @class */ (function () {
    function INotificationService() {
    }
    INotificationService.prototype.send = function (to, message, name) {
        throw new Error('Method not implemented');
    };
    return INotificationService;
}());
exports.INotificationService = INotificationService;
var EmailService = /** @class */ (function (_super) {
    __extends(EmailService, _super);
    function EmailService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCE7 EMAIL-".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return EmailService;
}(INotificationService));
exports.EmailService = EmailService;
var SMSService = /** @class */ (function (_super) {
    __extends(SMSService, _super);
    function SMSService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCE9  SMS -".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return SMSService;
}(INotificationService));
exports.SMSService = SMSService;
var WhatsAppService = /** @class */ (function (_super) {
    __extends(WhatsAppService, _super);
    function WhatsAppService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhatsAppService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCAC WhatsApp -".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return WhatsAppService;
}(INotificationService));
exports.WhatsAppService = WhatsAppService;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var Nutification = /** @class */ (function (_super) {
    __extends(Nutification, _super);
    function Nutification(typeService, name) {
        var _this = _super.call(this, name) || this;
        _this.typeService = typeService;
        _this.typeService = typeService;
        return _this;
    }
    Nutification.prototype.send = function (to, message) {
        this.typeService.send(to, message, this.name);
    };
    return Nutification;
}(User));
exports.Nutification = Nutification;
exports.user_1 = new Nutification(new EmailService(), "Porat");
exports.user_1.send("haim", "whatsapppppp");
