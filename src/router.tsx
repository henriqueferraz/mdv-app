import { BrowserRouter, Route, Routes } from 'react-router-dom'
import page from '@/app/page'
import page_01 from '@/app/page_01/page'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={page} />
                <Route path='/step1' Component={page_01} />
            </Routes>
        </BrowserRouter>
    )
}