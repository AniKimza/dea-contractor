import React from "react";

const Comments = () => {
    const reviews = [
      {
        comment: `My husband and I loved working with Besi and Melissa.
          Right from the beginning of the project, Melissa did a beautiful design and helped guide me to pick the perfect materials.
          Both Besi and Melissa responded quickly to questions/problems and resolved them.
          Thank you for the beautiful home.`,
        name: "Wendy S",
      },
      {
        comment: `The whole crew was so easy to work with and very professional.
          The job got done on time and within budget. I am so happy with the end result of my kitchen.
          The designer did a great job capturing my vision.
          I will definitely be using them again on my next project.`,
        name: "Deb",
      },
      {
        comment: `Great group of professionals. Besi is an honest, hardworking man.
          He assessed my property, notified me a few of my ideas weren't adding much value for the price and suggested some lower costing alternatives at a fair price.
          They showed up prepared for the job on the scheduled work day, provided a great service and really paid attention to the details.`,
        name: "Josh M",
      },
      {
        comment: `I was referred to Dea Contractor by a neighbor and I couldn't have been happier with the results.
          He was so easy to work with and I enjoyed having them in my home. By the end they felt like family.
          My bathroom looks beautiful and I love using it now.`,
        name: "John & Megan",
      },
      {
        comment: `I had hired another company to complete my bathroom remodel but their subs did such a terrible job that Dea Contractor had to be brought in to fix the whole job.
          I really wished I had just hired him in the first place. He completed the work with impeccable quality and faster than the previous guy.
          He really saved the day.`,
        name: "James",
      },
      {
        comment: `Dea Contractor made the whole painting process painless and easy.
          He has a designer whom he works with that assisted me in my paint selections.
          Our whole house looks great! Thanks everyone!`,
        name: "Renee & Mary",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center text-center gap-16 py-16 lg:px-10 px-5">
        <h1 className="text-5xl text-costumYellow font-bold mb-4">
          What our clients say about us
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-20 lg:px-20 px-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 p-5 rounded-md bg-gradient-to-t from-yellow-500 to-costumYellow text-costumDark"
            >
              <h1 className="font-semibold xl:text-base text-sm">{review.comment}</h1>
              <h1 className="font-bold text-2xl">{review.name}</h1>
            </div>
          ))}
        </div>
        <h1 className="text-xl font-semibold">
          Check out more reviews and star ratings on our{" "}
          <a
            href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/dea-contractor-pfvwus-pf~223051029?"
            className="text-costumYellow"
          >
            Houzz
          </a>{" "}
          account
        </h1>
      </div>
    );
  };
  
  export default Comments;
  
