 
 var baseobjectModule = require("../baseobject.js");

/**
 * Wraps account data and methods
 * @class Account
 * @contructor Account
 * @param {Object} [dto] : initialization data of the account instance
 * @throws Error
 */
function Account(dto) {
  baseobjectModule.BaseObject.call(this, dto);
}

Account.prototype = new baseobjectModule.BaseObject({inheritance:true});
Account.prototype.constructor = Account;			