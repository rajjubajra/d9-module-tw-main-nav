import React from 'react';

const ImageLinkForm = ({onInputChange}) => {
  return(
    <div>
      <p className="f3">This app detect face in the picture. Try it pasting image link</p>
      <div className="center pa4 shadow-2 br3 w-50">
          <input className="w-70 fa4 pa2 center" type="text" onChange={onInputChange} />
          <button className="w-30 grow pa2 fa3 center">Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
