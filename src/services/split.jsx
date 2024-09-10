const formatTextWithLineBreaks = (text) => {
  return text.split("\n").map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));
};

export default formatTextWithLineBreaks