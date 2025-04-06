import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="subscribe-container">
            <h1 className="subscribe-heading">Never Miss a Deal!</h1>
            <p className="subscribe-text">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="subscribe-form">
                <input
                    className="subscribe-input"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="subscribe-button">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetter;
