import { useParams } from "react-router-dom"
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client/react";
import { Avatar, Container, Grid, Typography } from "@mui/material";


function AuthorPage() {
  const{slug}=useParams();

  const {data,loading,error}=useQuery(GET_AUTHOR_INFO,{variables:{slug}})
if (loading) return <h1>loading</h1>;
  if (error) return <h1>Error</h1>;
 const {
    author: { name, field, avatar, description, posts },
  } = data;
  console.log(data);
  
  
  return (
   <Container maxWidth="lg">
<Grid container mt={10}>
  <Grid
          size={{xs:12 }}
          sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}
          
       
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid  xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
</Grid>
   </Container>
  )
}

export default AuthorPage