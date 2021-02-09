import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

import useStyles from "./styles";

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://images.pexels.com/photos/977734/pexels-photo-977734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        title='post title'
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>creat</Typography>
        <Typography variant='body2'>13.12.2020</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size='small'></Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>
          tags tags
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        post title
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
          quaerat.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary'>
          Like
        </Button>
        <Button size='small' color='primary'>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
