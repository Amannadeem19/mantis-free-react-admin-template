import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import  styled  from "@emotion/styled";

const AssignmentCard = styled(Card)`
  margin: 10px;
`;

const AssignmentHeader = styled(CardHeader)`
  padding: 16px;
`;

const AssignmentContent = styled(CardContent)`
  padding: 16px;
`;

const DueDateList = styled(List)`
  padding: 0;
`;
// yahan assignment ayenge
function AssignmentCardComponent() {
    const assignment = {
        "instructor":"mr. Basit Ali",
        "title":"NORMALIZATION",
        "subject":"Database",
        "description":"Do normalization uptil 3nf",
        "dueDate":"22feb2024",
        "pointsPossible":"5 points"
    }
  return (
    <div style={{width:'70%'}}>
    <AssignmentCard>
      <AssignmentHeader
        avatar={<Avatar aria-label="instructor">{assignment.instructor.charAt(0)}</Avatar>}
        title={assignment.title}
        subheader={assignment.subject}
      />
      <AssignmentContent>
        <Typography variant="body2">{assignment.description}</Typography>
      </AssignmentContent>
      <DueDateList>
        <ListItem>
          <ListItemText primary="Due Date" secondary={assignment.dueDate} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Points" secondary={assignment.pointsPossible} />
        </ListItem>
      </DueDateList>
    </AssignmentCard>
    </div>
  );
}

export default AssignmentCardComponent;
