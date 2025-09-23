import { ApolloClient, HttpLink, InMemoryCache, } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/mtu/theme";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; 
import App from "./App";
// this allow to all components to use this fonts beacuse
//  it's import at the top of projects
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";


const client = new ApolloClient({
  link: new HttpLink({
    uri:process.env.REACT_APP_GRAPHCMS_URI,
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
  </BrowserRouter>
);
