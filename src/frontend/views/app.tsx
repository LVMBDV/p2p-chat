import { Container, List } from "@mui/material";

import { Message } from "../components/message";
import { MessageInput } from "../components/message-input";

export function App() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Message />
      </List>
      <MessageInput></MessageInput>
    </Container>
  );
}
