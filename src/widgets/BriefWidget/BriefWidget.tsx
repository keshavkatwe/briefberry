const BriefWidget = () => {
  const data = [
    {
      title: "Introduction",
      description:
        "Our primary aspiration in this project centers around fostering a digital environment that allows our team's creativity to shine brightly. However, it's not just a gallery of past projects, it’s a powerful and persuasive presentation of our capabilities and services, tailored to appeal to prospects. The ultimate aim is to entice them into opting for our novel subscription service that covers all their creative needs.",
    },
    {
      title: "Goals",
      description:
        "Our primary aspiration in this project centers around fostering a digital environment that allows our team's creativity to shine brightly. However, it's not just a gallery of past projects, it’s a powerful and persuasive presentation of our capabilities and services, tailored to appeal to prospects. The ultimate aim is to entice them into opting for our novel subscription service that covers all their creative needs.",
    },
    {
      title: "Timeline",
      description:
        "While we're already enthusiastic and filled with concepts, we'll require a time period up until the 15th of October, 2024, to ensure our ideas are meticulously sculpted and brought to life.",
    },
    {
      title: "Budget",
      description:
        "We're lucky: we've got a comfortable budget of $8,000 that will allow us to craft this marketing page to its fullest potential. Half of this, $4,000, will be channeled into masterfully crafting the layout. The remaining half, also $4,000, will fuel our creativity as we whip up engaging illustrations to capture our audience's imagination.",
    },
    {
      title: "References",
      description:
        "To get the creative juices flowing, we've collected some inspiration. Our reference from UI8 has shown us the direction we'd like to head in. Similarly, the Dribbble link served as a mood setter.  As for the images, each one tells a unique story on its own. The first image helps us visualize the kind of sophisticated and minimalistic design we're aiming for. The next image is another stunning example of abstract design in a minimalist world. The third image has inspired us with its high-quality AI illustration, pushing us to think of future-driven designs. Taking in the soft, appealing color pallet of the fourth image, we are considering utilizing a similar light blue and light pink scheme.",
    },
    {
      title: "Conclusion",
      description:
        "In brief, this isn't just another project; it's an opportunity to unearth our aesthetic and skills while building a strong connection with potential clients. Given our available resources, timeline, and the inspiration we have stoked, we're excited to see where this takes us. With every pixel placed and illustration crafted, we're going a step further in leaving an indelible mark on the realms of rendering.",
    },
  ];

  return (
    <div>
      <div
        className={
          "bg-background-surface2 drop-shadow-lg w-1/2 m-auto rounded-32 p-12 space-y-6"
        }
      >
        <div>
          <h1 className={"text-h2"}>UI8 Studio 2024</h1>
          <p className={"text-heading text-text-secondary"}>UI/UI Design</p>
        </div>

        {data.map((value) => (
          <div className={"space-y-4"}>
            <h3 className={"text-h5"}>{value.title}</h3>
            <p className={"text-hairline text-text-primary-body"}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BriefWidget;
