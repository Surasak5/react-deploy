import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles=makeStyles({
    title:{
        fontSize:60,
        fontFamily:"OCR A",
        textAlign: "center"
    },
    text:{
        textAlign:"center",
    },
    cover:{
        backgroundImage:'url(https://picsum.photos/1500/600/?image=4)',
        backgroundPosition:"center",
        padding: "20px 20px 20px 20px",
    },
    btn:{

    }
})

const FeaturedPost = () => {

    const classes = useStyles()
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
          <Typography className={classes.title} gutterBottom>Onedaysoft</Typography>
          <Typography className={classes.text} variant='h5'>
          Get System Development According To Customer Requirements.
              </Typography>
      </CardContent>

    </Card>
  );
};

export default FeaturedPost;
