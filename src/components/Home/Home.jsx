
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(web-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Task Platform</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-orange-500 text-white">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;