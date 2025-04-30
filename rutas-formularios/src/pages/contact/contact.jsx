function Contact() {
  return (
    <div>
      <h1>Hola desde Contact</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
