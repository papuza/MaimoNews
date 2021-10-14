import React, {useState, useEffect} from 'react'
import Container from '../Container/Container'
import ResponsiveGrid from '../ResponsiveGrid/ResponsiveGrid'
import Loader from '../Loader/Loader'
import {
    useParams
  } from "react-router-dom";
import axios from 'axios';



const Category = () => {

    const {slug} = useParams()

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState([])

    const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5',
        diseno: '6',
        gaming: '7'
      }

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)
            try {
                const noticiasFromAPI = await axios.get(
                    `https://api.canillitapp.com/news/category/${categoriesId[slug]}`
                );

                console.log(noticiasFromAPI)
                setNoticias(noticiasFromAPI.data.slice(0,16))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchNoticias({slug})
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

export default Category
