module.exports = function(version) {
  return [ '1', '2', '3' ].indexOf(version.split('.')[0]) > -1;
};
