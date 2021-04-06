import React from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useContext, useEffect, useState,useCallback} from 'react'
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async  () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization:`Bearer ${token}`
            })
            console.log(fetched)
            setLinks(fetched)
        }catch (e){

        }
    }, [token, request])

    const removeLink = async (id) =>{
        try {
             request(`/api/link/${id}`, 'DELETE', null, {
                Authorization: `Bearer ${token}`
            }).then(response => {
                setLinks(links.filter(link => link._id !== id))
             })

        }catch (e){}

    }

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading){
        return  <Loader/>
    }

    return(
        <>
            {!loading && <LinksList links={links} remove={removeLink}/>}
        </>
    )
}