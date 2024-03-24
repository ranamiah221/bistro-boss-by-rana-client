import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin=(user)=>{
    console.log(user);
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          title: `${user.name} is an admin now !`,
          text: "User can be admin",
          icon: "success"
        });
      }
    })

  }
  const handleDeleteUser=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
        .then(res=>{
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
          }
        })
      }
    });
  }
  return (
    <div>
      <SectionTitle subHeader="How many" header="manage users"></SectionTitle>
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold">All User : {users.length}</h2>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user,idx)=><tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    {
                      user.role === 'admin' ? "Admin" : <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-400 hover:bg-orange-600" >
                      <FaUsers className="text-white"></FaUsers>
                    </button> 
                    }
                    </td>
                    <td>
                    <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-500"></FaTrash>
                  </button>   
                    </td>
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
