import './details.css'
function Project3Details (props) {
    return(
        <div className='projectDetails'>
            <p>TECH: React.js | Express | EJS | MongoDB | JSX | JavaScript | Token Authentication | HTML5 | CSS3 | Flexbox</p>
            <div className="projects-href">
            <a href="https://movie-buff-movie.netlify.app" className='href'>Live Link</a>
            <a href="https://github.com/cwest9400/movie-backend" className='href'>Github Repository (server)</a>
            <a href="https://github.com/JohnnyGoodrich/movie-frontend" className='href'>Github Repository (client)</a>
            </div>
        </div>
    )
}

export default Project3Details