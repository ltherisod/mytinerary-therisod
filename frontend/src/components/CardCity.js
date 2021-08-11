
const cardsData = [
    {src: './assets/Cities/chileatacama.jpg', id: 'chilea', name: 'Atacama', country: 'Chile', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/CapeTown.jpg', id:'southAfricab', name: 'Cape Town', country:'South Africa',description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.' },
    {src: './assets/Cities/DarwinAustralia.jpg', id: 'australiac', name: 'Darwin', country: 'Australia', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/HuayinWeinánChina.jpg', id: 'chinad',name: 'Huayin', country: 'China', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/AucklandNewZeland.jpg', id: 'newzelande', name: 'Auckland', country:'New Zeland', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/BavariaGermany.jpg', id: 'germanyf',name: 'Bavaria', country:'Germany', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/PhilippinesCoron.jpg', id: 'philippinesg',name: 'Coron', country:'Philippines', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/ShintoJapan.jpg', id: 'shintoh', name: 'Shinto', country:'Japan', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/SukhothaiThailand.jpg',id: 'thailandi',name: 'Sukhothain', country:'Thailand', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/TulumMexico.jpg',id: 'mexicoj',name: 'Tulum', country:'Mexico', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/VolcanThrihnukagigur.jpg', id: 'islandk', name: 'Hafnarfjordur', country:'Island', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: './assets/Cities/ChaltenArgentinajpg.jpg',id: 'argentinal',name: 'El Chalten', country:'Argentina', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'}]

const CardCity = () => {
    return(
        <div className="container-fluid citiesdiv">
            <div className="row">
                 {cardsData.map((cardData, index) =>
                    <div key= {index} className= "col-12 col-md-6 my-3 cardBody">
                            <div key= {cardData.id} className ="cardimg" style={{backgroundImage:`url('${cardData.src}')`}}>
                                <div className=" citydescription">
                                    <h4>{cardData.name}</h4>
                                    <p>{cardData.description}</p> 
                                </div>
                            </div> 
                    </div>
                 )}
             </div>                 
        </div>
    )
}

export default CardCity