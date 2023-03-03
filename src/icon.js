import * as React from 'react'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Brand1 from './images/source-images/brand-1.png'
import Brand2 from './images/source-images/brand-2.png'
import Brand3 from './images/source-images/brand-3.png'
import Brand4 from './images/source-images/brand-4.png'
import Brand5 from './images/source-images/brand-5.png'
import Brand6 from './images/source-images/brand-6.png'
import Brand7 from './images/source-images/brand-7.png'
import Brand8 from './images/source-images/brand-8.png'
import Brand9 from './images/source-images/brand-9.png'
import Brand10 from './images/source-images/brand-10.png'
import Brand11 from './images/source-images/brand-11.png'
import Brand12 from './images/source-images/brand-12.png'
import Brand13 from './images/source-images/brand-13.png'
import Brand14 from './images/source-images/brand-14.png'
import Brand15 from './images/source-images/brand-15.png'
import Brand16 from './images/source-images/brand-16.png'

export default function BoxSx() {
  const imageList = [{
    src: Brand1,
    name: "AIMPARTS"
  }, {
    src: Brand2,
    name: "WINDENGINE"
  }, {
    src: Brand3,
    name: "TURBOELECTRIC"
  }, {
    src: Brand4,
    name: "STARTONE"
  }, {
    src: Brand5,
    name: "BRANDIX"
  }, {
    src: Brand6,
    name: "AIABS-BRAND"
  }, {
    src: Brand7,
    name: "GREATCIRCLE"
  }, {
    src: Brand8,
    name: "JUSTROMB"
  }, {
    src: Brand9,
    name: "FASTWHEELS"
  }, {
    src: Brand10,
    name: "STROYKA-X"
  }, {
    src: Brand11,
    name: "MISSION-51"
  }, {
    src: Brand12,
    name: "FUELCORP"
  }, {
    src: Brand13,
    name: "REDGATE"
  }, {
    src: Brand14,
    name: "BLOCKS"
  }, {
    src: Brand15,
    name: "BLACKBOX"
  }, {
    src: Brand16,
    name: "SQUAREGARBAGE"
  }]

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        xs={12}
        minHeight={'40vh'}
        maxHeight={'40vh'}
        width={'100%'}
        sx={{ border: "1px solid black", }}
      >
        {imageList.map((data) => {
          return (
            <>
              <Card
                sx={{
                  minWidth: '12%',
                  minHeight: '18vh',
                  maxWidth: '12%',
                  maxHeight: '18vh'
                }}
              >
                <CardContent sx={{ padding: '5px !important' }}>
                  <Grid
                    container
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <img
                      style={{ filter: "grayscale(100%)", height: '85px', width: '95px' }}
                      src={data.src}
                    ></img>
                    <Typography m={1} sx={{ fontSize: '10px' }}>
                      {data.name}
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </>
          )
        })}
      </Box>
    </>
  )
}
