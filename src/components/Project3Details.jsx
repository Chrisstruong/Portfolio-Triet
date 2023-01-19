import './details.css'
function Project3Details (props) {
    return(
        <div className='projectDetails'>
            <p>MovieBuff is a web app that allows users to rate and review the most action-packed and sweaty movies from the 80's and 90's</p>
            <p>TECH: React.js | Express | JSX | MongoDB | Mongoose | JavaScript | Token Authentication | HTML | CSS | Boostrap</p>
            <div className="projects-href">
            <a href="https://movie-buff-movie.netlify.app" className='href'>Live Link</a>
            <a href="https://github.com/cwest9400/movie-backend" className='href'>Github Repository (server)</a>
            <a href="https://github.com/JohnnyGoodrich/movie-frontend" className='href'>Github Repository (client)</a>
            </div>
        </div>
    )
}

export default Project3Details