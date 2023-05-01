import { FaSearch } from 'react-icons/fa';


export const Principal = () => {
    return(
        <div className="principal">
            <h1>Aula Virtual Uniremington</h1>
            <div className="principal_info">
                <div className="principal_contenido">
                    <div className="principal_search">
                        <input type="serch" placeholder="Buscar cursos" />
                        <span className="icon"><FaSearch color='white' /></span>
                    </div>
                    <h1>Anuncios de  la  página</h1>
                    <section className="anuncios_c">
                        <div className="anuncios">
                            <span className='anuncions_user'></span>
                            <div className="anuncios_text">
                            <h3>Cronograma de Capacitaciones 2023-1</h3>
                            <p>de <a href="">Arley Alberto Arango Pineda</a> - miércoles, 15 de marzo de 2023, 13:16</p>
                            </div>
                        </div>
                        <figure>
                            <img src="https://uvirtual.uniremington.edu.co/pluginfile.php/7781/mod_forum/post/463899/Banner-Capacitaciones-2023-Virtual.jpg" alt="" />
                        </figure>
                    </section>
                </div>
               
            </div>
        </div>
    )
}