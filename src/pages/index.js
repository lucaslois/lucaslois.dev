import * as React from "react"
import '../app.scss';

// markup
const IndexPage = () => {
    return (
        <main className='main'>
            <div className='personal-info'>
                <img className='photo' src="https://avatars.githubusercontent.com/u/14177309?v=4" alt=""/>
                <title>Lucas Lois</title>
                <h1 className='title'>Lucas <span className='highlight'>"Lucky"</span> Lois</h1>
                <h2 className='subtitle'>Software Engineer</h2>
                <h3 className='job'>Technical Leader at <a target='_blank' href="https://braintly.com">Braintly</a></h3>
            </div>
            <div className="buttons">
                <a target='_blank' href='https://github.com/lucaslois' className='button github'>GitHub</a>
                <a target='_blank' href='https://instagram.com/lucaslois95' className='button instagram'>Instagram</a>
                <a target='_blank' href='https://twitter.com/lucaslois95' className='button twitter'>Twitter</a>
                <a target='_blank' href='https://www.linkedin.com/in/lucaslois/' className='button linkedin'>Linked
                    In</a>
                {/*<a target='_blank' href='/books' className='button books'>Recommended Books</a>*/}
            </div>
        </main>
    )
}

export default IndexPage
