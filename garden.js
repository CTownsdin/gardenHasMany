// This garden class has many potatos and strawberries.
var strawberry = require('./strawberry');
var potato = require('./potato');

var Garden = function (size, aspect) {
    this.size = size || 'small';
    this.aspect = aspect || 'southern';
    this.strawberryPatch = [];
    this.potatoRow = [];
};
Garden.prototype.eatStrawberry = function () {
    if (this.strawberryPatch) {
        var sb = this.strawberryPatch.pop();
        console.log(sb.eat());
    }
};
Garden.prototype.addStrawberry = function (type, season) {
    var sb = new strawberry(type, season);
    this.strawberryPatch.push(sb);
};
Garden.prototype.addPotato = function (type, season) {
    var po = new potato(type, season);
    this.potatoRow.push(po);
};

var aGarden = new Garden('medium');
aGarden.addStrawberry();
aGarden.addStrawberry('freezer', 'fall');
aGarden.eatStrawberry();
aGarden.eatStrawberry();

