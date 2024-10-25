import React from 'react';
const  formatTextWithLineBreaks = React.memo((text) => {
  return text.split("\n").map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));
});

export default formatTextWithLineBreaks