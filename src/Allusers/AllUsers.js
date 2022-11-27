import React, { useEffect, useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import { toast } from 'react-toastify';

const AllUsers = () => {


  const [allUsers, setAllusers] = useState([])


  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
      fetch('http://localhost:5000/allUsers')
          .then(res => res.json())
          .then(data => {

            setAllusers(data)
          })
          .catch((err) => toast.error(err.message))

  }, []);


  const handleDelete = (id) => {
   
    fetch(`http://localhost:5000/allUsers/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {

          console.log('data', data)
            if (data.success) {
                toast.success(data.message);

                setRefresh(!refresh);
            } else {
                toast.error(data.error);
            }
        }).catch(err => toast.error(err.message))
};

// const {data: allUsers = []} = useQuery({
//   queryKey:['allUsers'],
//   queryFn: async() =>{
//     const res = await fetch('http://localhost:5000/allUsers');
//     const data = await res.json();
//     return data;
//   }
// })



  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Verified</th>
                <th>Delete</th>
                
              </tr>
            </thead>
            <tbody>

              {
                allUsers.map((user, i) =><tr key={user._id}>
                               
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.option}</td>
                <td><button>Verify Now</button></td>
                <td><button onClick={() => handleDelete(user._id)} className='btn btn-accent'>Delete</button></td>
            
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;