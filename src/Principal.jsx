import './App.css';

function Principal(props)
{
    return(
        <div className="caja1">
            <div className="propa">
                <h4>Ahora con un solo click,puedes pedir tus productos desde PedidosYa!!</h4>
            </div>
            <div className="cabecera">
                <h1>Farmacias Star</h1> 
                <h2>Tenemos todo lo que usted busca!</h2>
                <div className="imagen">
                    <a href="https://wa.me//69876791" >
                    <img src={props.imagen} width="60px" alt="60px" />
                    </a>
                </div> 
                <div className="imagen2">
                    <a href="https://www.pedidosya.com.bo/">
                        <img src={props.imagen2} width="55px" alt="55px" />
                        
                    </a>
                </div> 
                <div className="imagen2">
                    <a href="https://www.google.com/maps/-16.524818,-68.117015">
                        <img src={props.imagen3} width="50px" alt="30px" />
                        
                    </a>
                </div>   
                    
                    
                    
                      
                
                
                
            </div>
            <div className="medio">
                <h2>Ofertas de la semana</h2>
                


                </div>

        </div>
    )

}
export default Principal;
