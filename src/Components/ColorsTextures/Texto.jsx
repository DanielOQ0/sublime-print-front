/* import { useRef, useEffect, useState } from 'react'

const Texto = ({ onSubmit }) => {
    
    const [text, setText] = useState("");
    const [color, setColor] = useState("#FFFF00");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Texto: ${text}, Color: ${color}`);
      onSubmit(text);
      setText("");
      setColor("#FFFF00");
    };
  
    return (
      <div style={{ backgroundColor: color }}>
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Escribe tu mensaje aquí..."
          />
          <br />
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  };

export default Texto
   */

import { useRef, useEffect, useState } from 'react'

const Texto = ({ onSubmit }) => {
    
    const [text, setText] = useState("");
    const [color, setColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#FFFFFF");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Texto: ${text}, Color: ${textColor}`);
      onSubmit(text, textColor);
      setText("");
      setColor("#000000");
      setTextColor("#FFFFFF");
    };
  
    return (
      <div style={{ backgroundColor: color }}>
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            style={{ color: textColor }}
          />
          <br />
          <label>
            Fondo:
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </label>
          <br />
          <label>
            Texto:
            <input
              type="color"
              value={textColor}
              onChange={(event) => setTextColor(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
};

export default Texto;
