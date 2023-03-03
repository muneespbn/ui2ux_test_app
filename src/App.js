import './App.css'
import { Grid } from '@mui/material'
import BoxSx from './icon'
import MultiActionAreaCard from './featuredProducts'
import SwipeImage from './swipeImages'
import Footer from './matrials/components/Footer'
import MyPageCheck from './matrials/components/header'
import { ProductValueContext } from './context'
import { useState } from 'react'
import Motors from './Motors'

function App() {
  const [product, setProdutValue] = useState([])

  return (
    <div className='App'>
      <ProductValueContext.Provider value={[product, setProdutValue]}>
        <MyPageCheck />
        <Grid container flexDirection={'column'}>
          <SwipeImage />
          <BoxSx />
          <MultiActionAreaCard />
          <Motors />
          <Footer />
        </Grid>
      </ProductValueContext.Provider>
    </div>
  )
}

export default App
