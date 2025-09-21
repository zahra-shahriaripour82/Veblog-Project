
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";



function CardEl({ title, slug, coverPhoto, author }) {
   
    
    
    
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
        <CardHeader
        
        avatar={author?.map((item) => (
  <Avatar key={item.id} src={item.avatar?.url} alt={item.name} sx={{ marginLeft: 2 }} />
))
            }
            title={
           author.map((item)=>(
             <Typography component="p" variant="p" color="text.secondary" key={item.id}>
              {item?.name}
            </Typography>
           ))
          }
        />
        
<CardMedia component="img" height={194} image={coverPhoto?.url} alt={slug}/>
<CardContent>
    <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
</CardContent>
<Divider variant="middle" sx={{ margin: "10px" }} />
<CardActions>
      <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
    <Button   variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3  }}>
        مطالعه مقاله
    </Button>
    </Link>
</CardActions>
    </Card>
  )
}

export default CardEl