import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/mtu/theme";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; 
import App from "./App";
// this allow to all components to use this fonts beacuse
//  it's import at the top of projects
import "./styles/fonts.css";


const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://us-west-2.cdn.hygraph.com/content/cmfcriu7r00zh06wb6ng83mp6/master",
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
