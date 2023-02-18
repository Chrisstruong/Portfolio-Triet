import './details.css'
function Capstone (props) {
    return(
        <div className='projectDetails'>
            <p>TECH: React.js | Express | JSX | MongoDB | Mongoose | JavaScript | JWT | Passport | HTML5 | CSS3 | Flexbox</p>
            <div className="projects-href">
            {/* <a href="https://sei-1031.netlify.app/" target="_blank" className='href'>Live Link</a> */}
            <a href="https://github.com/Chrisstruong/SEI1031_chatapp_server" className='href' target="_blank">Github Repository (server)</a>
            <a href="https://github.com/Chrisstruong/SEI1031_chatapp_client" className='href' target="_blank">Github Repository (client)</a>
            </div>
        </div>
    )
}

export default Capstone