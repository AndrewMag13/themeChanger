'use client'

import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from '@/components/Theme/slice'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
})
