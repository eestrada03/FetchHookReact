import React from "react";
import Producto from "./Producto";

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.peticionPost = this.peticionPost.bind(this);
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data.products,
        });
        console.log(data.products);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  peticionPost() {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Un gato borracho",
        thumbnail:
          "https://w0.peakpx.com/wallpaper/157/658/HD-wallpaper-drunk-cat-lying-drunk-cigarettes-beer-cat-bottles-street.jpg",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data2: data,
        });
      });
  }

  render() {
    return (
      <div className="flex">
        {this.state.data.map((value) => {
          return <Producto datos={value} />;
        })}
        <button
          className="botoncillo"
          type="submit"
          onClick={this.peticionPost}
        >
          MIAU
        </button>
        {this.state.data2 && <Producto datos={this.state.data2} />}
      </div>
    );
  }
}

export default Fetch;
