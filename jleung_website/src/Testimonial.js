import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Testimonial.css"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const PrevBtn = (props) => {
    console.log(props);
    const {className, onClick} = props;
    return (
        <div class={className} onClick={onClick}>
            <MdArrowBackIos style={{ color: "#90a4ae", fontSize:"50px"}}/>
        </div>
    );
};

const NextBtn = (props) => {
    console.log(props);
    const {className, onClick} = props;
    return (
        <div class={className} onClick={onClick}>
            <MdArrowForwardIos style={{ color: "#90a4ae", fontSize:"50px"}}/>
        </div>
    );
};


const FirstCard = () => {
    return (
        <div class="card-content">
            <span>
                <p>"Jones was an Associate Product Manager on my team at 
                    Crypto.com, and it was an absolute pleasure working with 
                    him. He is an extremely driven individual who is willing to 
                    go above and beyond to ensure the task at hand is completed 
                    to the highest standards possible. What impressed me the 
                    most about Jones is his ability to bring collaborators 
                    together and rally them towards achieving a common goal. 
                    If you are looking for someone to take ownership of your 
                    product and drive it forward, I would highly recommend Jones."
                </p>
                <p style ={{fontStyle:"italic", marginTop: 50, marginBottom: 25}}>
                    Senior Product Manager,<span style={{
                        fontWeight: "bold"
                    }}> Crypto.com</span>
                </p>
            </span>
        </div>
    );
}

const SecondCard = () => {
    return (
        <div class="card-content">
            <p>"I had the pleasure of working closely with Jones for almost two years. I enjoyed working with him. He is such a brilliant individual with excellent interpersonal skills, bringing positive energy to the team. 
            <br></br>
            <br></br>
            I was impressed with his exceptional problem solving and attention to detail skills. He is a reliable and talented technologist. His ability to go out of his way to help others has made him stand out. He is a hardworking and dedicated person who often goes above and beyond the scope of his role. Despite not having a long working history in the role, he performed at a high level as an experienced professional and exceeded expectations. 
            <br></br>
            <br></br>
            He will be a valuable asset to any company. It is a pleasure and honour to recommend him."
            </p>
            <p style ={{fontStyle:"italic", marginTop: 50, marginBottom: 25}}>
                Development Manager,<span style={{
                    fontWeight: "bold"
                }}> Bupa</span>
            </p>
        </div>
    );
}

const ThridCard = () => {
    return (
        <div class="card-content">
            <p>"I’ve had the pleasure of working with Jones for more than six months. In that time he has significantly enhanced the delivery team’s testing capabilities, introducing automation practices while also pitching in whenever needed to assist the team’s manual tester. 
            <br></br>
            <br></br>
            Jones has a positive, can-do attitude; he is respectful of his colleagues and other business stakeholders. He provides support whenever called upon. He can be absolutely relied upon to deliver in challenging circumstances. 
            <br></br>
            <br></br>
            I firmly believe Jones has an exceptional future ahead of him, and I will gladly be a referee to vouch for the excellence of his contribution." </p>
            <p style ={{fontStyle:"italic", marginTop: 50, marginBottom: 25}}>
                Digital & Ecommerce Manager,<span style={{
                    fontWeight: "bold"
                }}> Bupa</span>
            </p>
        </div>
    );
}

function Testimonial() {
    return (
        <div class="testimonial" style={{display:"flex", 
        justifyContent:"center", marginTop: 15,
        marginBottom: 25}}>
            <div class="testimonial-card">
                <Slider prevArrow={<PrevBtn/>}
                    nextArrow={<NextBtn/>}
                    dots>
                    <FirstCard/>
                    <SecondCard/>
                    <ThridCard/>
                </Slider>               
            </div>
        </div>
    );
}


export default Testimonial;
    