var React = require('react');
var api = require('../utils/api');
var helpers = require('../../../dist/app/utils/helpers');

const showMessage = function (e) {
  e.preventDefault();
  console.log(e);
  return false;
}

const SelectList = (props) => (
  <select className="custom-select" onChange={showMessage}>
    {
      helpers.Languages.map((lang, index) => {
        return (
          <option
            value={lang}
            key={index}>
            {lang}
          </option>
        );
      })
    }
  </select>
);

module.exports = SelectList;
