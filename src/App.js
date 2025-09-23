import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import BlogsPage from "./components/blog/BlogsPage";
import AuthorPage from "./components/author/AuthorPage";

const query = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { data } = useQuery(query);
  console.log(data);

  return (
<Layout>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogsPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
</Layout>
  )
  
   ;
}

export default App;
