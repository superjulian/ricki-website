export const metadata = {
  title: "Press",
};

type Section = {
  title: string;
  details: Details[];
};
type Details = {
  year: string;
  shows: string[];
};

const sections: Section[] = [
  {
    title: "Solo Show",
    details: [
      {
        year: "2024",
        shows: ["A Mobilizing Force. Volume Gallery, Chicago, IL"],
      },
      {
        year: "2022",
        shows: ["Protean Survivalism. Rupert, Vilnius, LT"],
      },
      {
        year: "2020",
        shows: [
          "Brass Tacks. Anglim/Trimble, San Francisco, CA",
          "First Impressions. Roll Up Project, Oakland, CA",
        ],
      },
      {
        year: "2019",
        shows: [
          "The Way Nets Cannot Hold Water. Guerrero Gallery,  San Francisco, CA",
        ],
      },
      {
        year: "2019",
        shows: [
          "The Way Nets Cannot Hold Water. Guerrero Gallery,  San Francisco, CA",
          " Soft/Wet. Recology, San Francisco, CA",
        ],
      },
    ],
  },
];

export default function Page() {
  return (
    <section>
      <div>
        {" "}
        Raised in the San Francisco Bay Area, currently living in Brooklyn, NY.
      </div>
      <a href="mailto:rickidwyer@gmail.com">rickidwyer@gmail.com</a>
      <br /> <br />
      {sections.map((section) => {
        return (
          <div className="cv-section">
            <h2 className="cv-header">{section.title}</h2>
            {section.details.map((detail) => {
              return (
                <div className="cv-year-section">
                  <span className="cv-year">{detail.year}</span>
                  <div className="cv-show-section">
                    {detail.shows.map((show) => (
                      <span className="cv-show">{show}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <></>
    </section>
  );
}
