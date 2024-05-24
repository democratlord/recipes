function Contact() {
    return (
        <>
            <div className="contact_block">
                <h1>Contact Us</h1>
                <div className="block-items">
                    <div className="contact-item">
                        <img src={require("../img/email.png")} alt=""/> <br/>
                        <h5><a href="#">recipe_book@mail.com</a></h5>
                    </div>
                    <div className="contact-item">
                        <img src={require("../img/youtube.png")} alt=""/> <br/>
                        <h5><a href="#">Recipe_Book</a></h5>
                    </div>
                    <div className="contact-item">
                        <img src={require("../img/telegram.png")} alt=""/> <br/>
                        <h5><a href="#">@recipe_book</a></h5>
                    </div>
                    
                </div>
                <h6>Please send us your personal questions and wishes.<br/>Thank you for choosing us!</h6>
            </div>
        </>
    );
}

export { Contact };