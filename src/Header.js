const Header = (props) => {
    return(
        <header id="header">
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {title: " Default titulo "}

export default Header
