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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const threeDModel = new ThreeDimentionalModel(new Project("project1", "this is the first"),  "name")
  return (
    <>
      <Head>
        <Header
          title={"3D Knowledge"}
        />
      </Head>
      <Box
        sx={{
          p: 1,
        }}
      >
        <ThreeDimentionalModelCard
          threeDimentionalModel={threeDModel}
        />

      </Box>
    </>
  )
}
