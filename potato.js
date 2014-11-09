// this file is a potato class
var Potato = function (type, season) {
    this.type = type || 'red russet';
    this.season = season || 'fall';
};
Potato.prototype.eat = function () {
    if (this.type === 'red russet') { return 'Mmmmm starchy'; }
    if (this.type === 'steak fry') { return 'FFs? Pass the BBQ sauce please!'; }
    return 'Hm, that was different, good, but different';
};
Potato.prototype.getSeason = function () {
    return 'This potato should be dug up in ' + this.season;
};

module.exports = Potato;
