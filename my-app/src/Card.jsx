import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';

function UserCard(props) {

    const useStyles = makeStyles({
        root: {
            maxWidth: 320,
            textAlign: 'center',
        },
        media: {
            height: 140,
            backgroundColor: '#5662F6',
        },
        position: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            marginLeft: '44px',
        },
        space: {
            display: 'inline-flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    })

    const classes = useStyles();

    return (
    <div className={classes.space}>
    <div className={classes.position}>
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia className={classes.media} image="my-app\public"
                title="Contemplative Reptile" />

            <CardContent>
                <Typography gutterBottom color='primary' variant="h5" component="h2">
                    <h1>{props.name}</h1>
                </Typography>
                <Typography variant="body2" color="primary" component="p">
                "Web trailblazer. Freelance travel expert. Total internet enthusiast. Tv ninja. Bacon advocate."
                </Typography>
            </CardContent>
            </CardActionArea>
            
            <CardActions>
            <Button color='primary'>
                Share
            </Button>

            <Button color='primary'>
                Learn More
            </Button>
            </CardActions>
        </Card>
    </div>
</div>);
}

export default UserCard;