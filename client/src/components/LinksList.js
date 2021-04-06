import React from 'react'
import {Link} from 'react-router-dom'


export const LinksList = ({links, remove}) => {

    if (!links.length){
        return  <p className={"center"}>Ссылока пока нет</p>
    }

    return(
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Оригинальная</th>
                <th>Сокращенная</th>
                <th>Открыть</th>
            </tr>
            </thead>
            <tbody>
            {links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <div style={{display:"flex", justifyContent:"space-around"}}>
                                <Link to={`/detail/${link._id}`} >Открыть</Link>
                                <button className={'btn-floating'} onClick={() => remove(link._id)}>Удалить</button>
                            </div>
                        </td>
                    </tr>
                )
            })}
            </tbody>

        </table>
    )
}