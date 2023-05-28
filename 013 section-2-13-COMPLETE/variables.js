// string, number, boolean, null, undefined
var myName = null;
myName = 'test';
// Arrays
var items = [5, 'luis'];
;
var account = {
    name: 'Luis',
    balance: 10
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
