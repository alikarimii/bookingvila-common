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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
const logger_1 = require("../util/logger");
const inversify_1 = require("inversify");
let Listener = class Listener {
    constructor(channel) {
        this.channel = channel;
        this.noAck = false;
    }
    listen() {
        this.subscriptionOption();
        this.channel.consume(this.queueName, (msg) => {
            if (!msg) {
                return;
            }
            try {
                let data = JSON.parse(msg.content.toString());
                this.onMessage(data, msg);
            }
            catch (error) {
                logger_1.logger.error({ message: JSON.stringify(error), label: "Listener:listen" });
            }
        }, { noAck: !!this.noAck });
    }
    subscriptionOption() {
        try {
            // no exchange => rond robin
            this.channel
                .assertQueue(this.queueName, {
                durable: true
            });
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", this.queueName);
            if (this.prefetch)
                this.channel.prefetch(this.prefetch);
        }
        catch (error) {
            logger_1.logger.error({ message: JSON.stringify(error), label: "Listener:subscriptionOption" });
            return;
        }
    }
};
Listener = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], Listener);
exports.Listener = Listener;
