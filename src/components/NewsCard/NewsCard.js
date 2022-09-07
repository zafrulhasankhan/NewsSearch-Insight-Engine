import React,{useState,useEffect,createRef} from 'react';
import {Card, CardActions,CardActionArea,CardContent,CardMedia,Button,Typography}  from '@material-ui/core';
import useStyles from './style';
import classNames from 'classnames';

const NewsCard =({article :{ description,publishedAt,source,sources,title,url,urlToImage},i,activeArticle})=> {
    const classes = useStyles();
    const [elRefs,setelRefs] = useState([]);
    const scrollRef = (ref)=>window.scroll(0,ref.current.offsetTop + 44);

    useEffect(()=>{
      setelRefs((refs)=>Array(20).fill().map((_,j)=>(refs[j] || createRef())))
    },[])

    useEffect(()=>{
        if(i === activeArticle && elRefs[activeArticle]){ 
            scrollRef(elRefs[activeArticle]);

        }
    
    },[i,activeArticle,elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card,activeArticle === i ? classes.activeCard:null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'no image here'} />
                
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h3">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h3">{sources?sources?.name:source?.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h6">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">learn more </Button>
                <Typography variant="h7" color="textSecondary"><b>{i+1}</b></Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;