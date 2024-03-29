import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { FC } from "react";

interface LogOutButtonProps { }

export const LogOutButton: FC<LogOutButtonProps> = (props) => {

  const handleClick = () => {
    signOut();
  }

  return (
    <Button
      onClick={handleClick}
      variant={'outlined'}
    >
      ログアウト
    </Button>
  )
}