import React, { useState, useEffect } from 'react'
import Container from '../Container/Container'
import ResponsiveGrid from '../ResponsiveGrid/ResponsiveGrid'
import Loader from '../Loader/Loader'
import axios from 'axios'
import dayjs from 'dayjs'


const Home = () => {

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        const today = dayjs(new Date()).format("YYYY[-]MM[-]DD")
        const fetchNoticias = async () => {
            setLoading(true)
            try {
                const noticiasFromAPI = await axios.get(
                    `https://api.canillitapp.com/latest/${today}`
                );

                console.log(noticiasFromAPI)
                setNoticias(noticiasFromAPI.data.slice(0,16))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchNoticias()
    }, [])


    return (
        <>
            {loading && <Loader />}
            <Container>
            {!loading && <ResponsiveGrid noticias={noticias} />}
            </Container>aq2|1
        </>
    )
}

export default Home
