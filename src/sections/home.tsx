import Button from "../components/button";


const Home = () => {

    return(
        <div className="flex min-h-screen justify-center items-center">
    
            
            <div className="text-center">
                {/* <p className="text-xl mb-10">Hello... I'm</p> */}
                <h1 className="text-6xl mb-8 font-press-start-2p text-mint text-3d">
                TRILCE
                GODOY
                </h1>
                <h2 className="text-3xl mb-20">Web developer</h2>
                <p className="text-xl mb-10">
                    I build intuitive and efficient web experiences with React, JavaScript, and Python. <br></br>
                    I am passionate about problem-solving, teamwork, and continuous learning.
                </p>

                <Button variant="melon">
                    Projects
                </Button>
                
            </div>
        </div>
    )
}

export default Home;