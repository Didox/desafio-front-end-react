import React from 'react';
import Sidebar from '../componentes/Sidebar';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';

const Home: React.FC = () => {
  return (
    <div id="wrapper">
      <Sidebar menuAtivo='home'/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Home - Continuous Deployment - </h6>
                </div>
                <div className="card-body">
                    <p>
                      No entanto, não podemos esquecer que a contínua expansão de nossa atividade garante a contribuição de um grupo importante na determinação das condições inegavelmente apropriadas.
                    </p>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
