import React, { useState, useEffect } from 'react'

const User = () => {

    const [user, setuser] = useState()
    const [show, setshow] = useState(false)

    async function fetchUser() {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let response = await data.json()
        setuser(response)
    }

    useEffect(() => {
        fetchUser()
    }, [])




    return (
        <div>
            <div className="container px-5 pt-12 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Users</h1>
                        <div className="h-1 w-8 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            {user ? user.map((item, index) => {
                return (<div key={index} className='m-4'>
                    <div className="py-6 inline-block min-w-full bg-white shadow-md">
                        <div className="overflow-hidden justify-around flex">
                            <p className='w-40'>{item.company.name}</p>
                            <ul className='w-40'>
                                <li className='font-bold text-sm mb-1'>CONTACT</li>
                                <li>{item.name}</li>
                            </ul>
                            <ul className='w-40'>
                                <li className='font-bold text-sm mb-1'>USERNAME</li>
                                <li>@{item.username}</li>
                            </ul>
                            <ul className='w-40'>
                                <li className='font-bold text-sm mb-1'>CITY</li>
                                <li>{item.address.city}</li>
                            </ul>
                            <button id={index + 1} onClick={(event) => {
                                let { id } = event.target
                                let list = document.getElementsByClassName(id - 1)[0].classList
                                let count = 0
                                for (let i = 0; i < list.length; i++) {
                                    if (list[i] === 'hidden') {
                                        list.remove('hidden')
                                        list.add('block')
                                        count = 1
                                        setshow(true)
                                        break
                                    }

                                } if (count === 0) {
                                    list.remove('block')
                                    list.add('hidden')
                                    setshow(false)
                                }


                            }
                            } className='bg-red-600 px-2 rounded-md text-white'>View Details</button>
                        </div>
                        <div className={`${index} mx-4 my-20 px-4 shadow-md hidden`}>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus sapiente, omnis laborum sint exercitationem. Ullam maxime ipsam ut explicabo debitis eaque pariatur rem soluta iste! Optio rem, iure eius cupiditate nesciunt iusto illo!</p>
                            <div className='flex my-8'>
                                <div className='mr-32'>
                                    <ul className='py-2'>
                                        <li className='font-bold'>Contact Person</li>
                                        <li>{item.name}</li>
                                    </ul>
                                    <ul className='py-2'>
                                        <li className='font-bold'>Email</li>
                                        <li>{item.email}</li>
                                    </ul>
                                    <ul className='py-2'>
                                        <li className='font-bold'>Phone</li>
                                        <li>{item.phone.split(" ")[0]}</li>
                                    </ul>
                                </div>
                                <div className='ml-32'>
                                    <ul className='py-2'>
                                        <li className='font-bold'>Address</li>
                                        <li>{item.address.street + ", " + item.address.suite + ', ' + item.address.city + ', ' + item.address.zipcode}</li>
                                    </ul>
                                    <ul className='py-2'>
                                        <li className='font-bold'>City</li>
                                        <li>{item.address.city}</li>
                                    </ul>
                                    <ul className='py-2'>
                                        <li className='font-bold'>Company</li>
                                        <li>{item.company.name}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }) : <h1>Loading</h1>}

        </div>
    )
}

export default User