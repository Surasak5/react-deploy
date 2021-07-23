import { CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: "flex",
    },
    cardDetails:{
        flex:1,
    },
    cardMedia:{
        width:160,
    },
});

const PostCard = ({post}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActions component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
              <CardContent>
                  <Typography component="h2" variant="h5">
                      {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" style={{color: "skyblue"}}>
                      Continue reading...
                  </Typography>
              </CardContent>
          </div>

          <Hidden xsDown>
                <CardMedia className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}/>
          </Hidden>
        </Card>
      </CardActions>
    </Grid>
  );
};

export default PostCard;
