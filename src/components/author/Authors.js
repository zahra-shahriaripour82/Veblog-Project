import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

import { Avatar, Divider, Grid, Typography } from "@mui/material";
import Loader from "../../shared/Loader";
import { Link } from "react-router-dom";
import React from "react";

function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (error) return <h1> Opps Error...</h1>;

  console.log(data);
  const { authors } = data;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors?.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid size={{ xs: 12 }} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar
                src={author?.avatar?.url}
                alt={author?.slug}
                sx={{ marginLeft: 2 }}
              />

              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
