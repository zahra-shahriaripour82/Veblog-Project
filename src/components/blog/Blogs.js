import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../../shared/CardEl";

import Loader from "../../shared/Loader";
function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, errors });

  if (loading) return <Loader />;

  if (errors) return <h4> Opps Error...</h4>;

  return (
    <Grid container spacing={2}>
      {data?.posts?.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
