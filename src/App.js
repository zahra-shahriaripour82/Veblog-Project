import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Header from "./components/layout/Header";

const query = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(query);
  console.log(data);

  return <Header />;
}

export default App;
