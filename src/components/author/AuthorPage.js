import { Avatar, Container, Grid, Typography } from "@mui/material";

import CardEl from "../../shared/CardEl";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import Loader from "../../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h1>Opps Error ...</h1>;
  const {
    author: { name, field, avatar, description, post },
  } = data;
  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Grid size={{ xs: 12 }} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>

          <Grid container mt={2} spacing={2}>
            {post?.map((item) => (
              <Grid size={{ xs: 12, sx: 6, md: 4 }} key={item.id}>
                <CardEl
                  title={item.title}
                  slug={item.slug}
                  coverPhoto={item.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
