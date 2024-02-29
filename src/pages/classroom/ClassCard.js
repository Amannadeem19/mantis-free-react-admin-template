import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ButtonBase } from '@mui/material';
import ClassDetails from './ClassDetails';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ClassCard({ classname, subject, teacher }) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();
    // const [showClassDetail, setShowClassDetail] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const toFirstLetter = (words) => {
        const firstletters = words
            .split(" ")
            .map(word => word.charAt(0))
            .join("");

        return firstletters;
    }
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const getRandomColorHeader = () => {

        const colors = [
            '#aed581', // Light green
            '#90caf9', // Light blue
            '#e0e0e0', // Grey
            '#fff59d', // Light yellow
            '#ffcc80', // Light orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleClassClick = (teacher, subject) =>{
        // setShowClassDetail(true);
        console.log(teacher + subject);
        navigate('/c', {state:{teacher, subject}});
       

        
    }

    return (
        <>
        <ButtonBase onClick={()=>handleClassClick(teacher, subject)}>
        <Card sx={{ maxWidth: 345, height: '100%', color:'black', fontSize:'20px'  }}>
            <CardHeader
              sx={{
                bgcolor: '#2897E9',
                '& .MuiCardHeader-title': {
                    fontSize: '16px',
                    // height:'100%' // Change the font size to your desired value
                },
            }}
                avatar={
                    <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="recipe">
                        {toFirstLetter(subject)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`${subject} - ${teacher}`}
               
            />
            {/* <CardMedia
                component="img"
                height="194"
                image="https://media.istockphoto.com/id/482773600/vector/school-seamless-pattern.jpg?s=612x612&w=0&k=20&c=F3MngQj1lbXMPwD554VrzO_ceSRPvM5qr4KafNps_9U="
                alt="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="h4">Course Introduction</Typography>
                <Typography variant="h6" color="text.primary">
                    Database courses cover the principles, design, implementation, and management of databases. They are essential for anyone interested in working with data in a professional setting, such as software engineers, data analysts, database administrators, and more.
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing> */}

                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}

                {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore> */}
            {/* </CardActions> */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h4">Important Instructions:</Typography>
                    <Typography paragraph>
                        In this database course, its crucial to attend lectures regularly, complete assignments on time, and practice SQL queries and database design concepts consistently. Seek help when needed, review course material frequently, and collaborate effectively on group projects. Stay organized, participate actively in discussions, and stay updated with industry trends. Apply your knowledge outside the classroom through internships, research projects, or personal projects to reinforce learning and enhance skills.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        </ButtonBase>
        {/* {
            showClassDetail && <ClassDetails/>
        } */}
        </>
    );
}