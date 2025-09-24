import { useQuery } from "@apollo/client/react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Commets({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null;
  console.log(data);

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            size={{ xs: 12 }}
            key={comment.id}
           sx={{
    m: 2,
    p: 2,
    border:"1px solid silver" , 
   
    borderRadius: 1,
  }}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography
                component="span"
                variant="body1"
                fontWeight={700}
                mr={1}
              >
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="body1">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Commets;
