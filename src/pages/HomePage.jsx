// INCOME
// EXPENSE

const OPERATIONS_TYPES = {
    INCOME: "income",
    EXPENSE: "expense"
};

const OPERATIONS = [
    {
        id: 1,
        category: "products",
        value: 3000,
        type: "expense",
        date: new Date(),
    },
    {
        id: 2,
        category: "salary",
        value: 50315,
        type: "income",
        date: new Date(),
    },
    {
        id: 3,
        category: "car",
        value: 20000,
        type: "expense",
        date: new Date(),
    }
];

// Форматирование чисел
const formatNumber = (value) => {
    return Intl.NumberFormat('ru-RU').format(parseInt(value));
}

// Функция форматирования для денег
const formatMoney = (value) => {
    return `${formatNumber(value)} руб.`;
}

const HomePage = () => {
    return(
        <section>
            <div className="container">
                <div className="balance">
                    <h2>{formatMoney(50275)}</h2>
                </div>

                <div className="balance-form">
                    <form>
                        <h3>Добавить операцию</h3>

                        <div className="wrapper">
                            <input type="text" name="balance" placeholder="30 000" />
                            <select name="category">
                                <option value="products">Продукты</option>
                            </select>

                            <button className="button">Добавить оперцию</button>
                        </div>
                    </form>
                </div>

                <div className="operations__wrapper">
                    <h2 className="operation_title">
                        Операция
                    </h2>
                    <div className="filter">
                        <button className="button sm">все операции</button>
                        <button className="button sm green">все доходы</button>
                        <button className="button sm red">все расходы</button>
                    </div>

                    <div className="operations">
                        {
                            OPERATIONS.map((operation) => {
                                return(
                                    <div key={operation.id} className="operation">
                                        <div className={`circle ${operation.type === OPERATIONS_TYPES.INCOME ? "income" : "expense"}`}>
                                            {
                                                operation.type === OPERATIONS_TYPES.INCOME ? 
                                                <i className="fa-solid fa-money-bill"></i> :
                                                <i className="fa-solid fa-shop"></i>    
                                            }
                                        
                                        </div>
                                        <p className="category">Категория: {operation.category}</p>
                                        <p className="total">{formatMoney(operation.value)}</p>
                                        <button className="button button--remove">Удалить</button> 
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="pagination">
                        <button className="pagination_button">
                            1
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;