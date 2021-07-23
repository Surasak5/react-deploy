import { Typography } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import { posts } from '../data/data'
import Markdown from "markdown-to-jsx";

const Main = ({title}) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider/>
            {
                posts.map(post => (
                    <Markdown key={post.body}>
                        {post.body}
                    </Markdown>
                ))
            }
        </Grid>
    )
}

export default Main
