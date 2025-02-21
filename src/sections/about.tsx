import Profile from "../assets/profile.jpg"

const About = () => {
    return (
        <div id="about" className="flex min-h-[50vh] items-center justify-center">


            <div className="about-text">

                <h3 className="text-3xl font-semibold">About me</h3>

                <p className="text-lg text-justify mt-10 max-w-[40rem]">
                I am a passionate Fullstack Developer eager to start my professional journey. With a strong foundation in React, JavaScript, Python, and Flask, I enjoy building intuitive and efficient web applications.
                As a self-driven and committed developer, I am always learning and improving my skills. I value teamwork and collaboration, and I thrive in environments where I can contribute and grow.
                My goal is to create meaningful and impactful digital experiences while continuously expanding my expertise in modern web development.
                </p>

            </div>
            <div className="image-container ms-20 mt-20">
                <img className="rounded-full border border-b-4 border-r-4 w-40 h-40" src={Profile} alt="" />
            </div>
            
        </div>
    )
}

export default About