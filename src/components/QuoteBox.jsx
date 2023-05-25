const QuoteBox = ({phrase, handleChangeQuote}) => {
    return (
        <section>
            <button onClick={handleChangeQuote}>Try your luck</button>
            <article>
                <p>{phrase}</p>
            </article>
        </section>
    );
};

export default QuoteBox;