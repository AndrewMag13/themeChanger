'use client'

import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'

const ProviderNext: NextPage = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}

export default ProviderNext
