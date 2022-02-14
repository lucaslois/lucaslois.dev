import * as React from "react"
import '../app.scss';

const BooksPage = () => {
    return (
        <main className="main">
            <h1>Books I Recommend</h1>
            <div className="book-list">
                <div className="book">
                    <img className='frontpage' src="https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX381_BO1,204,203,200_.jpg"
                         alt="Clean Architecture"/>
                    <div className="book-title">Clean Architecture</div>
                    <div className="author">Robert C Martin</div>
                    <p>Este libro me dio las bases para entender sobre principios de arquitectura y cómo construir software escalable y desacoplado de la infraestructura. Gracias a él comencé mi primer proyecto en DDD.</p>
                </div>
            </div>
        </main>
    )
}

export default BooksPage