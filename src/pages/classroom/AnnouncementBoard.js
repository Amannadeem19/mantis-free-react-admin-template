import * as React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";



const AnnouncementCard = styled(Card)`
  margin: 10px;
  font-size: 22px;
  
`;

const AnnouncementHeader = styled(CardHeader)`
  padding: 16px;
  font-size: 25px;
`;

const AnnouncementContent = styled(CardContent)`
  padding: 16px;
  font-size: 25px;
`;

const CommentList = styled(List)`
  padding: 0;
`;

function AnnouncementBoard() {
  const [announcements, setAnnouncements] = React.useState([
    {
      "id": "1",
      "author": "Basit Ali",
      "title": "Basit Ali",
      "subtitle": "posted at: 29 feb 2024",
      "content": "Please make sure that you have read the paper carefully"
    },
    {
      "id": "2",
      "author": "Basit Ali",
      "title": "Basit Ali",
      "subtitle": "posted at: 29 feb 2024",
      "content": "Please make sure that you have read the paper carefully"
    },
    {
      "id": "3",
      "author": "Basit Ali",
      "title": "Basit Ali",
      "subtitle": "posted at: 29 feb 2024",
      "content": "Please make sure that you have read the paper carefully"
    }
  ]);
  const [comments, setComments] = React.useState([
    {
      "id": "1",
      "name": "aman nadeem",
      "at": "posted at 2 feb 2024",
      "text": "thank you sir"
    },
    {
      "id": "2",
      "name": "aman nadeem",
      "at": "posted at 2 feb 2024",
      "text": "thank you sir"
    },
    {
      "id": "3",
      "name": "aman nadeem",
      "at": "posted at 2 feb 2024",
      "text": "thank you sir"
    },

  ]);
  const [newComment, setNewComment] = React.useState("");
  const [showComment, setShowComment] = React.useState(false);

  // Replace with your API call to fetch announcements
  React.useEffect(() => {
    const fetchAnnouncements = async () => {
      const response = await fetch("your-api-endpoint");
      const data = await response.json();
      setAnnouncements(data);
    };
    fetchAnnouncements();
  }, []);
  const handleShowComments = ()=>{
    setShowComment(true);
  }

  // Replace with your API call to fetch comments
  const fetchComments = (announcementId) => {
    return async () => {
      const response = await fetch(`your-api-endpoint/${announcementId}/comments`);
      const data = await response.json();
      setComments(data);
    };
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = (announcementId) => {
    // Replace with your logic to add comment to the database or API
    console.log("Adding comment:", newComment);
    setNewComment("");
  };

  return (
    <div style={{width:'70%'}}>
      {announcements.map((announcement) => (
        <AnnouncementCard  sx={{fontSize:'40px'}} key={announcement.id}>
          <AnnouncementHeader
           
            avatar={
              <Avatar aria-label="announcement author"
              sx={{backgroundColor:'#0284c7'}}
              >
                {announcement.author.charAt(0)}
              </Avatar>
            }
            title={announcement.title}
            subheader={announcement.subtitle}
          />
          <AnnouncementContent>
            
            <Typography variant="body2"sx={{fontSize:'15px'}} >{announcement.content}</Typography>
          </AnnouncementContent>
          <Divider/>
          {/* {
            showComment &&  */}
            <CommentList>
            {comments.length === 0 && (
              <ListItem>
                <ListItemText sx={{fontSize:'15px'}} primary="No comments yet" />
              </ListItem>
            )}
            <Typography variant="h5" sx={{marginLeft:'15px',marginTop:'10px'}}>All comments</Typography>
            {comments.map((comment) => (
              <>
              <Divider/>
              <ListItem key={comment.id}>
                <AnnouncementHeader
               
                  avatar={
                    <Avatar aria-label="announcement author"
                    sx={{backgroundColor:'#0284c7'}}
                    >
                      {comment.name.charAt(0)}
                    </Avatar>
                  }
                  title={comment.name}
                  subheader={comment.at}
                />
                <ListItemText sx={{ color: 'black',fontSize:'15px', marginTop:'70px', marginLeft:'-130px' }} primary={comment.text} />
              </ListItem>
              </>
            ))}
          </CommentList>
          {/* } */}
         
          <TextField
            id="new-comment"
            label="Add a comment"
            value={newComment}
            onChange={handleNewCommentChange}
            multiline
            sx={{width:'80%', borderRadius:'30px', marginLeft:'10px', marginBottom:'20px'}}
          />
          <Button variant="contained" style={{backgroundColor:"#0284c7", marginLeft:'-30px', marginTop:'5px'}} >
            Add 
          </Button>
          {/* <Button variant="outlined" >
            Load Comments
          </Button> */}
        </AnnouncementCard>
      ))}
    </div>
  );
}

export default AnnouncementBoard;
