"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../util/logger");
var Listener = /** @class */ (function () {
    function Listener(channel) {
        this.channel = channel;
        this.noAck = false;
    }
    Listener.prototype.listen = function () {
        var _this = this;
        this.subscriptionOption();
        this.channel.consume(this.queueName, function (msg) {
            if (!msg) {
                return;
            }
            try {
                var data = JSON.parse(msg.content.toString());
                _this.onMessage(data, msg);
            }
            catch (error) {
                logger_1.logger.error({ message: JSON.stringify(error), label: "Listener:listen" });
            }
        }, { noAck: !!this.noAck });
    };
    Listener.prototype.subscriptionOption = function () {
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
    };
    return Listener;
}());
exports.Listener = Listener;
