import * as React from "react"
import '../app.scss';

const BooksPage = () => {
    return (
        <main className="main center">
            <h1>Books I've Read and I Recommend</h1>
            <div className="book-list">
                <div className="book">
                    <img className='frontpage' src="https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX381_BO1,204,203,200_.jpg"
                         alt="Clean Architecture"/>
                    <div className="book-title">Clean Architecture</div>
                    <div className="author">Robert C Martin</div>
                    <p>This book gave me the foundations to understand the principles about software architecture and how to build scalable and decoupled software.</p>
                </div>
                <div className="book">
                    <img className='frontpage' src="https://planetadelibrosar0.cdnstatics.com/usuaris/libros/fotos/290/m_libros/portada_12-reglas-para-vivir_jordan-b-peterson_201901222004.jpg"
                         alt="Modo Creativo"/>
                    <div className="book-title">12 reglas para vivir</div>
                    <div className="author">Jordan Peterson</div>
                    <p></p>
                </div>
                <div className="book">
                    <img className='frontpage' src="https://m.media-amazon.com/images/I/51D10RX7+AL._SX260_.jpg"
                         alt="Modo Creativo"/>
                    <div className="book-title">Cómo aprendemos?</div>
                    <div className="author">Héctor Ruiz Martin</div>
                    <p>Una recopilación de estudios que exponen cómo funciona el cerebro humano durante el proceso de aprendizaje y brinda los mejores métodos para optimizar dichos procesos.</p>
                </div>
                <div className="book">
                    <img className='frontpage' src="https://cdn.shopify.com/s/files/1/0557/0153/6957/products/D_971299-MLA41719558586_052020-O_720x.jpg"
                         alt="Modo Creativo"/>
                    <div className="book-title">Modo Creativo</div>
                    <div className="author">Lucas J. J. Malaisi</div>
                    <p>Este libro enseña cómo funcionan las emociones en el cuerpo humano y cómo están conectadas con nuestros pensamientos y nuestra conducta.</p>
                </div>
                <div className="book">
                    <img className='frontpage' src="https://blog.12min.com/wp-content/uploads/2017/05/sdfsdfdsf.jpg"
                         alt="Modo Creativo"/>
                    <div className="book-title">Sprint</div>
                    <div className="author">Jake Knapp</div>
                    <p>Este libro enseña una metodología sobre cómo construir un prototipo de producto para probar con usuarios reales.</p>
                </div>
                <div className="book">
                    <img className='frontpage' src="https://m.media-amazon.com/images/I/51mb5UmzYYL.jpg"
                         alt="Modo Creativo"/>
                    <div className="book-title">Undisturbed Rest</div>
                    <div className="author">Michael Stowe (from Mulesoft)</div>
                    <p>Una guía con las mejores prácticas a la hora de construir API Rest.</p>
                </div>
            </div>
        </main>
    )
}

export default BooksPage