import React, { useState, useEffect } from "react";

function Hook(props) {
  const [contador, setCount] = useState(props.initialNumber);
  const [productos, setProductos] = useState([]);

  const handleClick = () => {
    setCount(contador + 1);
  };

  const getBack = () => {
    setCount(contador - 1);
  };

  const fetchApi = () => {
    console.log("llamar");
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [contador]);

  return (
    <div className="bodyhook">
      <div className="flexie">
        {/* El interrogante mira si existe la variable que queremos recuperar, 
        de esta manera evitamos que salte la excepción */}
        <div className="titlehook">{productos[contador]?.title}</div>
        <div>
          <img className="fotohook" src={productos[contador]?.thumbnail}></img>
        </div>
      </div>
      <div className="botoneshook">
        <button onClick={getBack}>BACK</button>
        <button onClick={handleClick}>NEXT PRODUCT</button>
      </div>
    </div>
  );
}
export default Hook;
