// app/dental-info/route.js

export async function GET(request) {
    const data = {
      sections: [
        {
          title: "Dental Excellence",
          content:
            "We wish to provide a service that will go above and beyond the usual experience many people have become used to. A service that we as dentists would want for our own care. We want our treatments to be carried out to perfection, to achieve exceptional results and to preserve tooth tissue at every opportunity and extend longevity.",
        },
        {
          title: "Client Commitment",
          content:
            "We also wanted our customers to feel a personal warmth and comfort from the practice as a whole and that they are being given a personal experience they would value. We hope our customers feel at home, cared for, pampered and looked after all at the same time in an environment they find relaxing.",
        },
        {
          title: "Your best life begins with a smile",
          content:
            "At the Our Dental Clinic, you can relax—you’re in good hands. Our commitment to your family is carried out in everything our dentists and staff do, from the friendly way we greet you when you call or come through our door, to the thorough, gentle way we conduct dental examinations. Our team of family dentists and specialists are eager to use our training to help keep you and your loved ones healthy.",
        },
        {
          title: "A perfect smile, guaranteed",
          content:
            "Every smile has a story. Book your appointment now so we can restore your smile.",
        },
      ],
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  