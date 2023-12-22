import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(web-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Task Platform</h1>
                        <p className="mb-5">We will teach you how to manage your tasks, prioritize properly, and get a ton of important work done. Since I started writing this guide</p>
                        <Link to='/login'>
                            <button className="btn  bg-orange-500 text-white">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>


            <h1 className="mb-10 text-5xl text-center my-10 font-bold text-black">Who Use The Platform</h1>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2022</time>
                        <div className="text-lg text-orange-500 font-bold">University Students</div>
                        Task management websites provide a centralized platform for students to organize their assignments, projects, exams, and other academic tasks.
                        The ability to create to-do lists, set deadlines, and categorize tasks helps students plan their work effectively.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">Web Developers</div>
                        Developers can prioritize tasks based on importance and urgency. This helps ensure that critical features and bug fixes are addressed promptly, contributing to the overall success of the project.Task management tools facilitate collaboration among team members. Developers can assign tasks to specific team members, provide updates, and communicate. 
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2021</time>
                        <div className="text-lg font-bold text-orange-500">Bankers</div>
                        Banks often undertake various projects, whether related to product development, compliance initiatives, or system upgrades. Task management websites help bankers organize and structure these projects into manageable tasks.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2022</time>
                        <div className="text-lg font-black">Doctors</div>
                        Doctors often collaborate with other healthcare professionals, nurses, and support staff. Task management tools facilitate communication and coordination of patient care plans, prescriptions, and follow-up tasks.
                    </div>
                    <hr />
                </li>

            </ul>
        </div>
    );
};

export default Home;