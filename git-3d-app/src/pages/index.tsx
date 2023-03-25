import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header'
import { Box } from '@mui/system'
import { ImageCard } from '@/components/image-card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <ImageCard
          src={""}
          title={"demo"}
          description={"this is a first model for Japanese"}
          buttonText={"download.."}
        />

      </Box>
    </>
  )
}
