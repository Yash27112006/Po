class Mail{
  
    constructor(){
        this.from = createInput('Enter your email Address');
        this.myTextArea = createElement('textarea');
        this.myTextArea.attribute("rows","10");
        this.myTextArea.attribute("cols","101");
        this.to = "yashu53421@gmail.com";
        this.button = createButton("Send Email");
    }
    sendMail(){
       this.from.position(windowWidth/4,windowHeight/2-200);
       this.myTextArea.position(windowWidth/4,windowHeight/2-110);
       this.button.position(windowWidth/4,windowHeight/2+100);
       this.from.style('width','500px');
       this.from.style('height','50px');
       this.button.style('width','150px');
       this.button.style('height','50px');

       this.button.mousePressed(()=>{
        Email.send({
            SecureToken : "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
            To : this.to,
            From : this.from.value(),
            Subject : "Found Someone",
             Body :this.myTextArea.value()
        }).then(
           message => alert('Email is sent successfully')
        ); 
       });
    }
}

