import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";

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

  return (
<Layout>
   <HomePage/>
</Layout>
  )
  
   ;
}

export default App;
