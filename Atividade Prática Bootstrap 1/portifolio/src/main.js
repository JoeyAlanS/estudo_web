import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './style.css';

document.querySelector('#app').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Meu Portfólio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#projetos">Projetos</a></li>
          <li class="nav-item"><a class="nav-link" href="/sobre.html">Sobre</a></li>
          <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="intro d-flex align-items-center justify-content-center text-white text-center">
    <div>
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Explore meus projetos e habilidades.</p>
    </div>
  </section>

  <div class="container my-5">
    <h2 class="text-center mb-4">Minhas Skills</h2>
    <div id="carouselSkills" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex justify-content-center gap-4 flex-wrap">
            <div class="skill-item bg-primary text-white p-3 rounded">Bootstrap</div>
            <div class="skill-item bg-warning text-dark p-3 rounded">Java</div>
            <div class="skill-item bg-success text-white p-3 rounded">Spring Boot</div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex justify-content-center gap-4 flex-wrap">
            <div class="skill-item bg-info text-dark p-3 rounded">Postman</div>
            <div class="skill-item bg-dark text-white p-3 rounded">JavaFX</div>
            <div class="skill-item bg-secondary text-white p-3 rounded">GitLab</div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex justify-content-center gap-4 flex-wrap">
            <div class="skill-item bg-primary text-white p-3 rounded">PostgreSQL</div>
            <div class="skill-item bg-danger text-white p-3 rounded">Git</div>
            <div class="skill-item bg-secondary text-white p-3 rounded">e mais...</div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselSkills" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselSkills" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>

  <div class="container my-5" id="projetos">
    <h2 class="text-center mb-4">Meus Projetos</h2>
    <div id="carouselProjetos" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card h-100 shadow-sm card-hover">
                <img src="https://placehold.co/600x400" class="card-img-top" alt="Projeto 1">
                <div class="card-body">
                  <h5 class="card-title">Calculadora JS</h5>
                  <p class="card-text">Projeto com JavaScript puro e layout responsivo.</p>
                  <div class="mb-2">
                    <span class="badge bg-primary">JavaScript</span>
                    <span class="badge bg-success">CSS</span>
                  </div>
                  <a href="https://github.com/JoeyAlanS/calculadora-js" class="btn btn-outline-primary w-100" target="_blank">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card h-100 shadow-sm card-hover">
                <img src="https://placehold.co/600x400" class="card-img-top" alt="Projeto 2">
                <div class="card-body">
                  <h5 class="card-title">To-do App React</h5>
                  <p class="card-text">Aplicação feita com React + Bootstrap e animações.</p>
                  <div class="mb-2">
                    <span class="badge bg-warning text-dark">React</span>
                    <span class="badge bg-info text-dark">Bootstrap</span>
                  </div>
                  <a href="https://github.com/JoeyAlanS/todo-react" class="btn btn-outline-primary w-100" target="_blank">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card h-100 shadow-sm card-hover">
                <img src="https://placehold.co/600x400" class="card-img-top" alt="Projeto 3">
                <div class="card-body">
                  <h5 class="card-title">Site Responsivo</h5>
                  <p class="card-text">Landing page responsiva com Bootstrap 5.</p>
                  <div class="mb-2">
                    <span class="badge bg-secondary">HTML</span>
                    <span class="badge bg-success">Responsivo</span>
                  </div>
                  <a href="https://github.com/JoeyAlanS/site-responsivo" class="btn btn-outline-primary w-100" target="_blank">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselProjetos" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselProjetos" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>

  <footer id="contato" class="bg-dark text-white text-center py-4">
    <div class="container">
      <p>&copy; 2024 Joey Alan. Todos os direitos reservados.</p>
      <p>Contato: <a href="mailto:joeyalandev@gmail.com" class="text-white">joeyalandev@gmail.com</a></p>
      <div class="mt-3">
        <a href="https://www.linkedin.com/in/joey-alan/" class="text-white mx-2"><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/JoeyAlanS" class="text-white mx-2"><i class="bi bi-github"></i></a>
      </div>
    </div>
  </footer>
`;
