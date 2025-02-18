import Button from "../components/button";

const Home = () => {

    return(
        <div className="flex min-h-screen justify-center items-center ">
            
            <div className="text-center">
                <p className="text-xl mb-4">Hello! my name is</p>
                <h1 className="text-8xl mb-5 font-semibold">Trilce Godoy</h1>
                <h2 className="text-3xl mb-6 font-semibold">Web developer</h2>
                <p className="text-xl mb-10">
                    I build intuitive and efficient web experiences with React, JavaScript, and Python. <br></br>
                    I am passionate about problem-solving, teamwork, and continuous learning.
                </p>

                <Button variant="melon">
                    hello
                </Button>
                
            </div>
        </div>
    )
}

export default Home;