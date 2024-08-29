const ErrorMessage = ({fooditems}) => {
    return <>
        {fooditems.length === 0 && <h3>No items...</h3>}
    </>
}

export default ErrorMessage; 
