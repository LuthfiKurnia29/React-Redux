
const Header = () => {
  return (
    <div className='py-8 bg-black'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <a href="">
                    <h3>Logo</h3>
                </a>
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white items-center" type="submit">
                  Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header