import React from 'react'
import "./ItemCount.css"

class App extends React.Component{
    constructor(){
    super();
    this.state= {
        counter: 1,
        disponibilidadStock: 20,
    }
      //Binding de la funcion
      //this.SumarContador = this.SumarContador.bind(this);
      //this.RestarContador = this.RestarContador.bind(this);
    }

SumarContador = () => {
    if (this.state.counter < this.state.disponibilidadStock) {
        this.setState({counter:this.state.counter + 1})
    } else {
        alert("Stock agotado");
    }
}

RestarContador = () => {
    if (this.state.counter > 1) {
        this.setState({counter:this.state.counter - 1})
    } else {
        alert("La cantidad minima para comprar es de 1 unidad")
    }
}


    /*SumarContador = () => {
    this.setState({counter:this.state.counter + 1})
    }
    RestarContador = () => {
    this.setState({counter:this.state.counter - 1})
    }*/

    render(){
    return(
        <div>
        <h1>Contador con boton!</h1>
        <div className='CounterSection'>
            <p>Stock Disponible: {this.state.disponibilidadStock}</p> 
            <p>Cantidad: {this.state.counter}</p>
        </div>
        <div className='Buttons'>
            <button onClick={this.SumarContador}>Sumar</button>
            <button onClick={this.RestarContador}>Restar</button><br></br>
            <button>Agregar al carrito</button>
        </div>
        </div>
    )
    }
}

export default App;




