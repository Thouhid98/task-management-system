import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Tasklist = () => {
    const [tasks, setTasks] = useState([])
    console.log(tasks);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/manage-tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    

    const handleDeleteItem = item =>{
        axios.delete(`http://localhost:5000/delete-task/${item._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Cancel Registration Successfull!",
                        text: ' Cancel Registration',
                        icon: "success",
                        timer: 2500
                    });
                }
            })
    }



    return (
        <div>
            <div>
                <div className=''>

                    <h2 className="text-2xl font-bold text-black">All Tasks: {tasks.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table my-4">
                            {/* head */}
                            <thead>
                                <tr className="text-xl text-gray font-semibold">
                                    <th>
                                        #
                                    </th>
                                    
                                    <th>Title</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    tasks?.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.deadline}
                                        </td>

                                        <td>
                                            {item.status}
                                        </td>




                                        <th>
                                            <button onClick={() => handleDeleteItem(item)} className="btn bg-red-500 text-white btn-sm">Delete </button>
                                        </th>

                                        {/* <Link to={`/dashboard/updatetasks/${item._id}`}>
                                        <th> 
                                                <button className="btn btn-primary my-5 btn-sm">Update</button>
                                            
                                        </th>
                                        </Link> */}

                                    </tr>)
                                }

                                {/* row 2 */}


                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasklist;