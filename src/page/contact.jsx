function Contact() {
    return (
        <>
            <div className="contact_block">
                <h1>Contact Us</h1>
                <div className="block-items">
                    <div className="contact-item">
                        <img src={require("../img/email.png")} alt=""/> <br/>
                        <h5><a href="#">recipes@mail.com</a></h5>
                    </div>
                    <div className="contact-item">
                        <img src={require("../img/youtube.png")} alt=""/> <br/>
                        <h5><a href="#">Recipes</a></h5>
                    </div>
                    <div className="contact-item">
                        <img src={require("../img/telegram.png")} alt=""/> <br/>
                        <h5><a href="#">@recipes</a></h5>
                    </div>
                    
                </div>
                <h6>Please send us your personal questions and wishes.<br/>Thank you for choosing us!</h6>
            </div>
        </>
    );
}

export { Contact };