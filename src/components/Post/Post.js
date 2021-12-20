import React from "react";
import { CardContent, Box, Card, Typography, Avatar } from "@mui/material";

const Post = (props) => {
    console.log(props.info);
    return (<Card variant="outlined" sx={{
        width: "70%",
        margin: "30px auto"
    }}>
        <CardContent>
            <Box sx={{
                display: "flex",
                justifyContent: 'flex-start',
                alignItems: "center"
            }}>
                <Avatar src={props.info.picture} sx={{ marginRight: "10px" }} />
                <Typography sx={{ fontSize: "0.8rem" }}>
                    {props.info.author}
                </Typography>
            </Box>
            <Box sx={{
                border: "1px solid grey",
                margin: "10px 0",
                padding: "10px"
            }}>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    marginLeft: "5px"
                }}>
                    {props.info.tite}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ padding: "10px", marginTop: "3px" }}>
                    {props.info.content}
                </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "right", marginRight: "10px" }}>
                {props.info.month + 1}/{props.info.day}/{props.info.year}
            </Typography>
        </CardContent>
    </Card>)
}

export default Post;