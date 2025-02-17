import Button from "../components/button";

const Home = () => {

    return(
        <div className="flex min-h-screen justify-center items-center ">
            
            <div className="">
                <p className="text-2xl mb-4">Hola! mi nombre es</p>
                <h1 className="text-8xl mb-5">Trilce Godoy</h1>
                <h2 className="text-4xl mb-6">Web developer</h2>
                <p className="text-2xl">
                    I build intuitive and efficient web experiences with React, JavaScript, and Python. <br></br>
                    I am passionate about problem-solving, teamwork, and continuous learning.
                </p>

                <Button className="bg-mint">
                    Proyectos
                </Button>
                
            </div>
        </div>
    )
}

export default Home;