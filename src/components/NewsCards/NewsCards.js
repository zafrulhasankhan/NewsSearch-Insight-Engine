import React, { useState, useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './Style.js';
import HeaderSearchPage from '../Search/HeaderSearchPage';


const infoCards = [
    { color: '#00838f', title: 'Latest News', inst: 'For any news , Click the "bottom-right" button of pages then try to saying as per "Try Saying" Command.', text: 'Give me the latest news' },
    { color: '#283593', title: 'News by Categories', info: 'General, Health, Science, Sports, Technology,Business, Entertainment', text: 'Give me the latest Sports news' },
    { color: '#195070', title: 'News by Terms', info: 'Covid-19 , Bangladesh , Cricket , wrestling , Mushfiqur Rahim , (Say any terms) ...', text: 'What\'s up with Mushfiqur Rahim' },
    { color: '#1565c0', title: 'News by Sources', info: 'CNN , ABC News , BBC News , reuters , Time , ESPN , Buzzfeed...', text: 'Give me the news from CNN' },
];




const NewsCards = ({ articles, activeArticle, searchTerm, setSearch, loading }) => {

    const classes = useStyles();

    return (
        <div>
            {articles.length ? (


                <div>
                    
                    <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
                    {/* {articles?.length ? ( */}
                    <Grow in>
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {(() => {
                                let articlePush = [];
                                for (let i = 0; i < articles?.length; i++) {
                                    articlePush.push(
                                        <Grid item xs={12} md={6} lg={3} style={{ display: "flex" }}>

                                            <NewsCard article={articles[i]} i={i} activeArticle={activeArticle}></NewsCard>
                                        </Grid>
                                    )
                                }
                                return articlePush;

                            })()}
                        </Grid>
                    </Grow>
                    {/* ) : (
                <h4 style={{ fontFamily: 'cursive', textAlign: 'center', position: 'relative', top: '70px' }}>
                    Loading...
                </h4>
            )} */}


                </div>


            ) : (

                <div className="search-page">

                    <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
                    <h4 style={{ fontFamily: 'cursive', textAlign: 'center', position: 'relative', top: '70px' }}>
                        No searches result found
                    </h4>
                </div>


            )}
        </div>
    )
}

export default NewsCards;