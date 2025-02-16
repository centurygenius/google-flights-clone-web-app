

function Footer() {
    return (
        <div className="container bg-blue-500 h-10 items-center flex gap-13  divide-x-4 divide-solid divide-white justify-center">
            <div className="w-40">
                About Us   
            </div>
            <div className="w-40 ">
                Contact us
            </div>
            <div className="w-40 md:mr-1 md:py-1">
                Privacy Policy
            </div>
            <div className="w-40 md:w-60 md:mr-1">
                Terms & conditions
            </div>
            <div className="w-40 ">
                Blog
            </div>
        </div>
    )
}

export default Footer;