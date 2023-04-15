import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header'
import { Box } from '@mui/system'
import { ImageCard } from '@/components/image-card'
import { ThreeDimentionalModel } from '@/model/three-dimentional-model'
import { Project } from '@/model/project'
import { ThreeDimentionalModelCard } from '@/components/model-card'
import { Button, Typography } from '@mui/material'
import { MuiFileInput } from 'mui-file-input';
import { useEffect, useRef, useState } from 'react'
import { PreviewModal } from '@/components/modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(process.env.NEXT_PUBLIC_HOGE)
  const threeDModel = new ThreeDimentionalModel(new Project("project1", "this is the first"), "name")

  const handleClickUpload = () => {
    // アップロード用のプレビュー画面を表示する

  }

  const [file, setFile] = useState<File | null | undefined>();

  // モーダル表示状態
  const [open, setOpenModal] = useState<boolean>(false);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.item(0);
    setFile(file);
    setOpenModal(Boolean(file));
  }

  const inputRef = useRef(null);

  const handleChange = () => {

  }

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Head>
        <Header
          title={"3D Knowledge"}
        />
      </Head>
      <Button
        variant="contained"
        component="label"
      >
        {file?.name ?? "ファイルを選択"}
        <input
          type="file"
          hidden
          onChange={(file) => { handleChangeFile(file) }}
        />
      </Button>
      <input
        hidden
        ref={inputRef}
        type="file"
        onChange={handleChange}
      />
      <Box
        sx={{
          p: 1,
        }}
      >
        <ThreeDimentionalModelCard
          threeDimentionalModel={threeDModel}
        />
      </Box>

      {/* モーダル */}
      <PreviewModal
        file={file}
        open={open}
        onClose={handleClose}
      ></PreviewModal>
    </>
  )
}
