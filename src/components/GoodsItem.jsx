function GoodsItem(props) {
    const { id, 
        name, 
        description, 
        price, 
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                    className="btn blue-grey darken-4"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <spn className="right">{price}</spn>
            </div>
        </div>
    );
}

export { GoodsItem };