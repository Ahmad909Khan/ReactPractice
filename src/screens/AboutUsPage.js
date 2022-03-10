import { useState, useEffect } from 'react';

function AboutUsPage() {

    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState([])

    useEffect(() => {

        fetch('https://randomuser.me/api')
            .then((response) => {
                return response.json();
            }).then((data) => {
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
                setPerson(refinedData);
                setLoading(false);
            })
    }, [])

    return (
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto my-2 px-5">
            {!loading ? (<div>

                <div className="text-center">Developed by</div>
                <ul className="my-3 list-unstyled text-center">
                    <li className="my-2">
                        <img
                            className="rounded-circle border border-dark"
                            src={person.img.profileImg}
                            alt={person.name} />
                    </li>
                    <li className="text-center">
                        <b>{person.name}</b>
                    </li>
                    <li>Sex: {person.gender}</li>
                    <li>Age: {person.age} years old</li>
                </ul>
                <ul className="my-2 list-unstyled border-top border-dark p-3">
                    Address:
                    <li className="mx-3">
                        {person.address.street
                            + ', ' + person.address.city
                            + ', ' + person.address.state
                            + ', ' + person.address.country}
                    </li>
                    <li className="mx-3">
                        Postal Address: {person.address.postCode}
                    </li>
                </ul>
                <ul className="my-2 list-unstyled border-top border-bottom border-dark p-3">
                    Contact Us:
                    <li className="mx-3">Phone: {person.contact.phone}</li>
                    <li className="mx-3">Mail Address: <span className="text-primary"> {person.contact.email}</span></li>
                </ul>
            </div>
            ) : (
                <div>Loading...</div>
            )}
        </div >
    )
}
export default AboutUsPage;