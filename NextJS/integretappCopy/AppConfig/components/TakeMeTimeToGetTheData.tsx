const fetchData = async () => {

    return new Promise<string>((resolve) =>
        setTimeout(() => resolve('Here is the data after 5 seconds!'), 5000)
    );
};

const TakeMeTimeToGetTheData = async () => {
    const data = await fetchData();

    return (
        <div className={`ml-10 border-4 p-4 rounded-lg transition-all duration-500`}>
            <p>{data}</p>
            <h1>ITS TAKE ME A WHILE</h1>
        </div>
    );
};

export default TakeMeTimeToGetTheData;
