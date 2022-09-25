import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="mailInputContainer">
        <input type={"text"} placeholder="Your email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
