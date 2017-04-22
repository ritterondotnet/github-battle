var React = require('react');
var api = require('../utils/api');

const languages = ['All', 'C#', 'Go', 'ReactJs', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Shell', 'C', 'VimL', 'Perl', 'HTML', 'Vim Script', 'PHP', 'Rust', 'TypeScript', 'Scala', 'Elixir'];

const showMessage = function (e) {
  e.preventDefault();
  console.log(e);
  return false;
}

const SelectList = (props) => (
  <select className="custom-select" onChange={showMessage}>
    {
      languages.map((lang, index) => {
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
