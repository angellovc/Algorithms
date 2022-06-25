"use strict";
/*
    FindUnion simple implementation

*/
Object.defineProperty(exports, "__esModule", { value: true });
var FindUnion = /** @class */ (function () {
    function FindUnion(nodesNumber) {
        this._nodes = [];
        for (var i = 0; i < nodesNumber; i++)
            this.nodes.push(i);
    }
    Object.defineProperty(FindUnion.prototype, "nodes", {
        get: function () { return this._nodes; },
        enumerable: false,
        configurable: true
    });
    ;
    FindUnion.prototype.union = function (p, q) {
        var pValue = this.nodes[p], qValue = this.nodes[q];
        if (pValue === qValue)
            return;
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === pValue)
                this.nodes[i] = qValue;
        }
    };
    FindUnion.prototype.connected = function (p, q) {
        return this.nodes[p] === this.nodes[q];
    };
    return FindUnion;
}());
var fn = new FindUnion(10);
console.log(fn.nodes);
fn.union(1, 2);
console.log(fn.nodes);
fn.union(1, 3);
console.log(fn.nodes);
console.log(fn.connected(1, 3));
console.log(fn.connected(1, 2));
console.log(fn.connected(1, 6));
exports.default = FindUnion;
