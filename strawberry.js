// this file is a strawberry class
var Strawberry = function (type, season) {
    this.type = type;
    this.season = season;
};
Strawberry.prototype.eat = function () {
    return 'Yum';
};
Strawberry.prototype.getSeason = function () {
    return 'This strawberry tastes best in ' + this.season;
};

module.exports = Strawberry;
