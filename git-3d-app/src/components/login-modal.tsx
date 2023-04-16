import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { FC } from "react";

interface LoginModalProps {
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  background: '#222',
  p: 4,
};

export const LoginModal: FC<LoginModalProps> = (props) => {

  const { data: session } = useSession();

  return (
    <Modal
      open={!Boolean(session)}
    >
      <Box sx={style}>
        <Typography>
          ログインしてください
        </Typography>
        <Button
          onClick={() => signIn()}
          variant={'contained'}
        >
          ログイン
        </Button>

      </Box>
    </Modal>
  )
}