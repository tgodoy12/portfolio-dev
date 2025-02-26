import Button from "../components/button";


const Home = () => {

    return(
        <div className="flex min-h-screen justify-center items-center bg-grid">
    
            
            <div className="text-center">
                <p className="text-xl mb-10 font-press-start-2p">Hello... I'm</p>
                <h1 className="text-6xl mb-8 font-press-start-2p text-mint
                [text-shadow:3px_3px_0_#c6f7ed,5px_5px_0_#b0e0d6]">
                TRILCE GODOY
                </h1>
                <h2 className="text-xl mb-20 font-press-start-2p">Web developer</h2>
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