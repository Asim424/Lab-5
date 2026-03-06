// Inside the component, use JavaScript’s Date
// to get the current date, then render a simple <footer> that displays it alongside the first
// names of the members of your group
function Footer(){
    var date = new Date()
    var currentYear = date.getFullYear()
    return (
        <footer>
            <p>Current Year: {currentYear}</p>
            <p>Group Members: Alice, Bob, Charlie</p>
        </footer>
    );
}

export default Footer;