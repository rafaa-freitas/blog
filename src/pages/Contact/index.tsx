import IconFacebook from '/images/icon-facebook.svg';
import IconInstagram from '/images/icon-instagram.svg';
import IconYoutube from '/images/icon-youtube.svg';
import IconTwitter from '/images/icon-twitter.svg';

function Contact() {
  return (
    <section className="container-layout">
      <div className="flex flex-wrap w-full">
        <div className="w-grid-6 max-lg:w-grid-12 m-4 py-4">
          <h3>Entre em contato</h3>
          <p>
            Aqui você vai conseguir mais informações sobre o projeto Blog
            utilizando React.js.
          </p>
          <form>
            <input
              type="text"
              name="name"
              className="mt-4"
              placeholder="Nome"
            />
            <input
              type="email"
              name="email"
              className="mt-4"
              placeholder="E-mail"
            />
            <textarea
              name="content"
              rows={8}
              className="mt-4"
              placeholder="Mensagem"
            ></textarea>
            <button className="btn mt-4">Enviar</button>
          </form>
        </div>
        <div className="w-grid-1 max-lg:w-grid-12 hidden m-4 py-4"></div>
        <div className="w-grid-5 max-lg:w-grid-12 m-4 py-4">
          <h5 className="mt-8">Algumas informações</h5>

          <h6 className="text-primary-light mt-8">Info.</h6>
          <p>Projeto Blog.</p>

          <h6 className="text-primary-light mt-8">Address</h6>
          <p>Rio de Janeiro, RJ.</p>

          <h6 className="text-primary-light mt-8">E-mail</h6>
          <p>rafael.freitasfa@gmail.com</p>

          <h6 className="text-primary-light mt-8">Redes sociais</h6>

          <div className="mt-4">
            <img
              src={IconFacebook}
              className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8"
              alt=""
            />
            <img
              src={IconInstagram}
              className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
              alt=""
            />
            <img
              src={IconYoutube}
              className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
              alt=""
            />
            <img
              src={IconTwitter}
              className="inline max-w-9 transition-all ease-in-out duration-500 hover:translate-y-[-4px] max-lg:max-w-8 ml-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
