import { ListItemButton, ListItemIcon,Checkbox, ListItemText, ListItem, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/DeleteOutline';

function TodoItem({text,completed}){
  return (
    <ListItem secondaryAction={
      <IconButton edge="end" aria-label="remove">
        <DeleteIcon/>
      </IconButton>
      } 
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox checked={completed ? true : false} />
        </ListItemIcon>
        <ListItemText className={completed ? "completed" :""}>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
export {TodoItem}