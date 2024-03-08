import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

import { Avatar } from "./avatar";

export function Message() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar isOnline />
      </ListItemAvatar>
      <ListItemText primary="Hello, world!" secondary="Today at 12:00 PM" />
    </ListItem>
  );
}
