// app/dental-info/route.js

export async function GET(request) {
    const data = {
      sections: [
        {
          title: "Dental X-Rays",
          image:"/cardimg1.png",
          content: "These X-rays are used with low levels of radiation to capture images of the interior of your teeth and gums. This can help your dentist to identify problems, like cavities, tooth decay, and impacted teeth."
        },
        {
          title: "Dental Implants",
          image:"/cardimg2.png",
          content: "Dental implants at Fourways dental studio provide the gold standard for tooth replacement. They are the ideal solution for replacing one or more missing teeth."
        },
        {
          title: "Cosmetic Dentistry",
          image:"/cardimg3.png",
          content: "Our cosmetic dentistry services include teeth straightening, teeth whitening, composite bonding, composite or ceramic veneers, smile design, trial smile, implants surgery and much more."
        },
        {
          title: "Root Canals",
          image:"/cardimg1.png",
          content: "We offer private root canal treatment so you can find relief from pain fast. If you suspect you need a root canal filling, book your consultation today."
        },
        {
          title: "Teeth Whitening",
          image:"/cardimg2.png",
          content: "Teeth whitening is a cosmetic procedure available at Fourways dental studio. It’s the quickest and most effective way to improve the appearance of your smile."
        },
        {
          title: "Braces",
          image:"/cardimg3.png",
          content: "We provide affordable orthodontics treatment for minor crowding, open bite, space closures and more by usage of traditional braces and Invisaligns."
        }
      ]
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  