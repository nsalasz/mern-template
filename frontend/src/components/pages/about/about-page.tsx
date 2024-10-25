const AboutPage = () => {
  return (
    <div className="container mx-auto px-8 py-12 bg-gray-100">
      {/* Sección superior con imagen de perfil y descripción breve */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="https://www.svgrepo.com/show/427113/grid.svg" 
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-500"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Nelson Noe Salas Zavala</h1>
        <p className="text-yellow-500 text-lg font-semibold">Estudiante de ing. de sistemas</p>
      </div>

      {/* Sección "About Me" con biografía y habilidades */}
      <section className="flex justify-center mb-16">
        <div className="w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Acerca de mí</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Bienvenido a mi página! Soy <span className="font-semibold">Nelson Noe Salas Zavala</span>, estudiante de la carrera de ingeniería de computación y sistemas.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Biografía</h3>
          <p className="text-gray-500 mb-6">
          Mi especialidad es el desarrollo de aplicaciones, la creación de prototipos y el diseño de soluciones digitales efectivas.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Habilidades</h3>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside text-gray-500">
            <li>Desarrollo de Software</li>
            <li>Base de Datos</li>
            <li>Inteligencia Artificial</li>
            <li>Cloud Computing</li>
          </ul>
        </div>
      </section>

      {/* Sección "Projects" con los proyectos */}
      <section className="flex justify-center mb-16">
        <div className="w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Projectos</h2>
          <p className="text-gray-600 mb-4">Algunos de mis projectos:</p>
          <ul className="list-none">
            <li className="mb-4">
              <a href="http://nnszwordpress.000.pe/" className="text-yellow-500 hover:underline text-lg font-semibold">Project Name 1</a>
              <p className="text-gray-500">Ecommerce.</p>
            </li>
            <li className="mb-4">
              <a href="https://nsalasz.github.io/google/" className="text-yellow-500 hover:underline text-lg font-semibold">Project Name 2</a>
              <p className="text-gray-500">A portfolio website.</p>
            </li>
            <li className="mb-4">
              <a href="https://example.com/project3" className="text-yellow-500 hover:underline text-lg font-semibold">Project Name 3</a>
              <p className="text-gray-500">An advertising campaign for a fashion brand.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Contacto</h2>
          <p className="text-gray-600">
          Si deseas más información sobre mis servicios o tienes alguna pregunta, no dudes en ponerte en contacto conmigo.
          

          <li>Correo electrónico: nelson_salas@usmp.pe</li>
          <li>Teléfono: 946682346</li>
          <li>Github: https://github.com/nsalasz</li>
          

¡Espero poder colaborar contigo pronto!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
