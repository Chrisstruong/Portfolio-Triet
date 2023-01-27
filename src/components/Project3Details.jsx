import './details.css'
function Project3Details (props) {
    return(
        <div className='projectDetails'>
            <p>TECH: React.js | Express | JSX | MongoDB | Mongoose | JavaScript | Token Authentication | HTML | CSS | Flexbox</p>
            <ul>
                <li>Utilized a MERN stack to build a full stack application. With full create, read, update, delete (CRUD) operations hitting all RESTful API calls</li>
                <li>Took advantage of React components for the front-end of the application creating an application that obtains the users’ reviews and ratings and then stores them to the backend so that the application can calculate the average rating for movies</li>
                <li>Occupied authentication functionality through JWT and bcrypt.js</li>
                <li>Used Mongoose to define schemas for MongoDB collections</li>
            </ul>
            <div className="projects-href">
            <a href="https://movie-buff-movie.netlify.app" className='href'>Live Link</a>
            <a href="https://github.com/cwest9400/movie-backend" className='href'>Github Repository (server)</a>
            <a href="https://github.com/JohnnyGoodrich/movie-frontend" className='href'>Github Repository (client)</a>
            </div>
        </div>
    )
}

export default Project3Details