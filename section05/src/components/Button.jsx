const Button = ({text, color, children}) => {
// const Button = (props) => {
    // console.log(props);

    return (
        <button style={{ color: color}}>
            {text} - {color.toUpperCase()}
            {/* {children} */}
        </button>
    );
}

Button.defaultProps = {
    color: "black",
}


export default Button;