import { Component } from "react";
import "./App.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, ["error"]);
    console.error(errorInfo, ["errorInfo"]);
    this.setState({ hasError: true });
    // Aqui pode ser colocada uma função para disparar um e-mail avisando do erro
    // com os dados do usuário, a pagina que deu erro e etc.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="App">
          <h1>Página de erro</h1>
          <p>Olhar o console -&gt;</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
