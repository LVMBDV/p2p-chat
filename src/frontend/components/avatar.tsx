import { Badge, Avatar as MaterialAvatar } from "@mui/material";

export interface AvatarProps {
  isOnline?: boolean;
}

export function Avatar({ isOnline }: AvatarProps) {
  return (
    <Badge variant="dot" color={isOnline ? "success" : "error"}>
      <MaterialAvatar />
    </Badge>
  );
}
