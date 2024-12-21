import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLorem } from './actions';

const Lorem = () => {

    const { loading, lorem, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLorem())
    }, [dispatch]);

    return (
        <>
            <h1>A short Naration of Lorem Ipsum </h1>

            <h3>Below contains a title and body gotten from a random API, Please take your time to review </h3>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {lorem.map((item, index) => (
                    <li key={index}><b>Title:</b> {item.title} <br /> <b>Body: </b> {item.body}</li>
                ))}
            </ul>
        </>
    )
}

export default Lorem
