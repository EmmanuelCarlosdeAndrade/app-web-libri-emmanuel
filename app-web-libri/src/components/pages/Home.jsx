import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section className={style.home_container}>
      <h1>Bem vindo ao <span>LIBRI!</span></h1>
      <p>Sua plataforma de gesto de livros!</p>
      <img src="./book_home.jpg" alt="Livros na Home" />
    </section>
  );
};

export default Home;
