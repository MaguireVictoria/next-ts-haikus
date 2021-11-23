import styles from "./Haiku.module.css"

const Haiku = () => {
    return (
      <div>
        <div className={styles.ImagenA}>
          <img src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="" />
        </div>
        <div>
          <div className={styles.ImagenP}>
            <img src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
            <h4>
              Titulo
            </h4>
          </div>
          <div className={styles.Icono}>
           <img src=" icon={iconoSearch} " alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Haiku