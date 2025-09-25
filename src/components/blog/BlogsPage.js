import { useQuery } from "@apollo/client/react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import sanitizeHtml from "sanitize-html";
import Loader from "../../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../comments/CommentForm";
import Commets from "../comments/Commets";

function BlogsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h1> Opps Error...</h1>;

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 9,
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data?.post?.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid size={{ xs: 12 }} mt={6}>
          <img
            src={data?.post?.coverPhoto?.url}
            alt={data?.post?.slug}
            width={1100}
            height={600}
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid
          size={{ xs: 12 }}
          mt={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {data?.post?.author?.map((item, index) => (
            <Avatar
              key={index}
              src={item?.avatar?.url}
              sx={{ width: 80, height: 80, marginLeft: 2 }}
            />
          ))}
          {data?.post?.author?.map((item, index) => (
            <Box component="div" key={index}>
              <Typography component="p" variant="h5" fontWeight={700}>
                {item?.name}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {item?.field}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Commets slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogsPage;
