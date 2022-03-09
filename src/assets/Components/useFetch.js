import { useState, useEffect } from 'react';
const useFetch = url => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        let newData = data.results[0];
        const refinedData = {
            id: newData.id.value,
            name: newData.name.title
                + ' ' + newData.name.first
                + ' ' + newData.name.last,
            gender: newData.gender,
            age: newData.dob.age,
            address: {
                street: newData.location.street.number
                    + ' ' + newData.location.street.name,
                city: newData.location.city,
                state: newData.location.state,
                country: newData.location.country,
                postCode: newData.location.postcode,
            },
            contact: {
                phone: newData.phone,
                email: newData.email
            },
            img: {
                profileImg: newData.picture.large,
                thumbImg: newData.picture.thumb
            }
        }
        setLoading(false);
        setPerson(refinedData);
    }, []);

    console.log(person)
    return {person, loading}
}

export default useFetch