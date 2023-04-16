import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Box } from '@mui/system'
import { ThreeDimentionalEntity } from '@/entities/three-dimentional-model'
import { ProjectEntity } from '@/entities/project'
import { ThreeDimentionalEntityCard } from '@/components/model-card'
import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { PreviewModal } from '@/components/modal'
import { LogOutButton } from '@/components/log-out-button'
import { ThreeDimentionalEntityRepository } from '@/repository/three-dimentional-model-repositoy'
import { Id } from '../value-object/id';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const threeDModel = new ThreeDimentionalEntity(new Id('aaaa'), new ProjectEntity(new Id("id"), "project1", "this is the first"), "name")

  const [file, setFile] = useState<File | null | undefined>();

  // モーダル表示状態
  const [open, setOpenModal] = useState<boolean>(false);

  // 3Dモデル一覧
  const [threeDModels, setThreeDModels] = useState<ThreeDimentionalEntity[]>([]);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.item(0);
    setFile(file);
    setOpenModal(Boolean(file));
  }

  useEffect(() => {
    const initData = async () => {
      const threeDimentionalEntities = await ThreeDimentionalEntityRepository.shared.find();
      setThreeDModels(threeDimentionalEntities);
      console.log(`REsult ${JSON.stringify(threeDimentionalEntities)}`)
    }
    initData();
  }, []);

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleClick = async () => {
    // await ThreeDimentionalEntityRepository.shared.save(new ThreeDimentionalEntity(new Id('id'), new ProjectEntity('id', 'name', ''), 'testname'))
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
        onClick={handleClick}
      >
        button
      </Button>
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
      <LogOutButton />
      <Box
        sx={{
          p: 1,
        }}
      >
        {threeDModels.map(threeDModel => {
          return (
            <ThreeDimentionalEntityCard
              threeDimentionalEntity={threeDModel}
            />
          )
        })}
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
