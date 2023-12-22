import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Addtask = () => {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const response = await axios.post("http://localhost:5000/addtask", data);
        console.log(response);

        if (data.acknowledged == true) {
           
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} added to the Task`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset()
        
    }

    return (
        <div>
            <h2 className="text-5xl text-black font-bold text-center mb-8">Add Tasks</h2>
            <div className="ml-8 mb-20 bg-gray-100 p-20  rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-[700px] " required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Task Title</span>

                        </label>
                        <input {...register("title")} type="text" placeholder="Task Title" className="input input-bordered w-[700px] " required />
                    </div>


                    <div className="form-control w-[700px]">
                        <label className="label">
                            <span className="label-text">Descriptions</span>

                        </label>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Descriptions" required></textarea>
                    </div>

                    <div className="form-control w-[700px]">
                        <label className="label">
                            <span className="label-text">Priority</span>

                        </label>
                        <select {...register("priority")} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Low</option>
                            <option>Low</option>
                            <option>moderate</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="form-control w-[700px]">
                        <label className="label">
                            <span className="label-text">Status</span>

                        </label>
                        <select {...register("status")} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Ongoing</option>
                            <option>Ongoing</option>
                            <option>Completed</option>
                            
                        </select>
                    </div>



                    <div className="form-control w-[850px]">
                        <label className="label">
                            <span className="label-text">Deadlines</span>
                        </label>

                        <input {...register("deadline")} type="datetime-local" placeholder="Professionals" className="input input-bordered w-[415px] " />
                    </div>

                    <button className="btn bg-orange-500 text-white mt-5">Add Tasks</button>
                </form>
            </div>
        </div>
    );
};

export default Addtask;