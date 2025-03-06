

function Footer() {
    return (
        <div className="bg-blue-500 py-2 flex flex-wrap justify-center items-center text-white text-center divide-x-0 sm:divide-x-4 divide-white">
            <div className="w-full sm:w-1/2 md:w-auto px-4 py-1">
                About Us   
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4 py-1 ">
                Contact us
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4 py-1">
                Privacy Policy
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4 py-1">
                Terms & conditions
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4 py-1 ">
                Blog
            </div>
        </div>
    )
}

export default Footer;