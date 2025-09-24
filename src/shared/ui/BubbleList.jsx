function BubbleList({ items, variant = "home" }) {
  return variant === "detailsPage" ? (
    <ul className="flex flex-wrap gap-6 gap-y-8 text-2xl max-w-full ">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="py-3 md:py-2 px-10 md:px-5 border text-[1.8rem] rounded-full leading-11 transition hover:bg-black hover:text-white hover:scale-105"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-wrap gap-4 text-2xl max-w-full md:max-w-4xl">
      {items.map((item, idx) => (
        <li
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 50}
          className="py-2 px-5 border rounded-full transition hover:bg-black hover:text-white hover:scale-105"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default BubbleList;
