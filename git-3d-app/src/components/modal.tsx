import { uploadModel } from '@/pages/api/upload';
import { Upload } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { FC } from "react"

interface PreviewModalProps {
  open: boolean; // モーダル開閉状態
  file: File | null | undefined; // ファイル
  onClose: () => void; // 閉じる
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

export const PreviewModal: FC<PreviewModalProps> = (props) => {

  const { open, file, onClose } = props;

  const handleClick = () => {
    uploadModel(file);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={style} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button
          variant={'outlined'}
          onClick={handleClick}
        >
          アップロード
        </Button>
      </Box>
    </Modal>
  );
}