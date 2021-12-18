
import style from "./Facts.module.scss";





const Facts = (props) => {

    const texts = props.data.text || [{text: "lorem ipsum"}];
    const permalinks = props.data.permalink || [{permalink: "http://www.google.it"}];
       
    
      



return (
<div className={style.fact}>
    <h3>Benvenuto</h3>
    <p>{texts}</p>
    <a href={permalinks}>Clicca qui</a>
</div>


    )

}


export default Facts;