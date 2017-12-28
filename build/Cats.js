"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var cats = {
    printCats: function printCats() {
        var cats = ["Manoli", "Dexter"];
        console.log("The Cats: " + cats);
    },
    printCat: function printCat() {
        var cat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Dexter";

        console.log("One Cat: " + cat);
    }
};

exports.default = cats;