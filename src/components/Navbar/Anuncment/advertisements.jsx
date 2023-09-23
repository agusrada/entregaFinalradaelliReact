import "./Advertisements.css"


const Advertisements = () => {
    return(
        <div className="backgroundAdvertisements text-white p-1">
            <li className="d-flex flex-md-row flex-sm-column justify-content-between align-items-center my-1">
                <ul className="mx-5 ulAdvertisments">AVELLANEDA - Bs. As</ul>
                <ul className="ulAdvertisments">•</ul>
                <ul className="ulAdvertisments">Venta x Mayor y Menor</ul>
                <ul className="ulAdvertisments">•</ul>
                <ul className="mx-5 ulAdvertisments">Envíos a Todo el País</ul>
            </li>
        </div>
    )
}

export default Advertisements;