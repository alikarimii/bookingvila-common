"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
const logger_1 = require("../util/logger");
const inversify_1 = require("inversify");
let Publisher = class Publisher {
    constructor(channel) {
        this.channel = channel;
    }
    publish(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // no exchange => rond robin
                yield this.channel.assertQueue(this.queueName, {
                    durable: true
                });
                yield this.channel.sendToQueue(this.queueName, Buffer.from(JSON.stringify(data)), {
                    persistent: true,
                });
            }
            catch (error) {
                logger_1.logger.error({ message: JSON.stringify(error), label: "Publisher:publish" });
            }
        });
    }
    // must install rabbitmq_delayed_message_exchange-3.8.0 plugin in rabbitmq
    publishWithDelay(data, delay) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.channel.assertExchange("my-exchange", "x-delayed-message", {
                    durable: true,
                    arguments: { "x-delayed-type": "direct" },
                });
                yield this.channel.bindQueue(this.queueName, "my-exchange", this.queueName);
                // Publish message with a delay of ? ms
                const headers = { "x-delay": delay };
                this.channel.publish("my-exchange", this.queueName, Buffer.from(JSON.stringify(data)), {
                    headers,
                    persistent: true,
                });
            }
            catch (error) {
                logger_1.logger.error({ message: JSON.stringify(error), label: "Publisher:publishWithDelay" });
            }
        });
    }
};
Publisher = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], Publisher);
exports.Publisher = Publisher;
