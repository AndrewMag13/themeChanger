'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@mui/material'
import { NextPage } from 'next'
import { set } from '@/components/Theme/slice'
import { useEffect } from 'react'

const Header: NextPage = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(set(next))
  }
  return (
    <>
      <div
        className="flex justify-between flex-row px-10 py-4 z-10 h-15 bg-white dark:bg-slate-800 border-b-slate-800 border-b-2
 dark:border-b-white
        "
      >
        <div className="flex font-bold  text-slate-900 dark:text-white  self-center">
          SimplePokemonSite
        </div>
        <Button variant="contained" onClick={handleChange}>
          Inverse Theme
        </Button>
      </div>
    </>
  )
}

export default Header
