import MapLink from "./MapLink";

export default function Description() {
    return (
        <div className="shadow rounded d-block w-100 p-4">
            <MapLink />
            <iframe
                width="100%"
                height="300"
                style={{ border: "0" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.1314588625075!2d-8.5495229!3d37.1200788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b28e3d488616d%3A0xe0dc424be207794f!2sR.%20Vista%20Mar%2030%2C%208500-801%20Portim%C3%A3o%2C%20Portugal!5e0!3m2!1sen!2s!4v1648758450155!5m2!1sen!2s"
                allowfullscreen
            ></iframe>
            <h1>Description</h1>
            <p>
                This lovely apartment is located at Club Amarilis condominium just few minutes walking distance from the beach of Praia da Rocha. The apartment is 60m² and includes a living room with a sofa bed and a cable TV, a bedroom with queen size bed, a fully equipped kitchen with a fridge, a microwave and an electric kettle, a bathroom, and a balcony.
            </p>
            <p>
                Large outdoor pool with sun-lounger terrace, an indoor heated pool with sauna and a Turkish bath, a tennis court, available on request, subject to availability and for a surcharge. Car and bicycle rental services are available as well.
                There are local boutiques, bars and restaurants serving seafood and regional cuisine in the close vicinity. Golf courses, hiking trails, and variety of excursions can be found in the region. Water sport outlets are located at the beach.
            </p>
            <p>
                Faro Airport is located 73 km from the apartment.
            </p>
            <p>
                The apartment freely accommodates 3 guests.
                WiFi is available.
                Parking can be arranged for an extra fee. Alternatively, there are free spots at the surrounding streets.
            </p>
        </div>
    )
}