/* Use this old export style until sequelize cli supports es6 syntax */

function defaultExport() {}

defaultExport.ENV = process.env.NODE_ENV || 'development';

module.exports = defaultExport;
