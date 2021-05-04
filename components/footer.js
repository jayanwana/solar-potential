export default function Footer() {
  return(
    <footer>
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='space-x-4'>
        <i className="fab fa-facebook fa-2x text-blue"></i>
        <i className="fab fa-instagram fa-2x text-blue"></i>
        <i className="fab fa-twitter fa-2x text-blue"></i>
        </div>
        <div className='py-4'>
        <p>&#169; {new Date().getFullYear()} Coolart Tech</p>
        </div>
      </div>
    </footer>
  )
}
