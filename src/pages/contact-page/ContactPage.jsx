export default function ContactPage() {
  return (
    <div className="pt-[100px] flex justify-center items-center bg-mainBg min-h-screen cursor-default">
      <div className="flex-grow flex flex-col px-20 gap-4">
        <h2 className="text-4xl font-[900] text-[#333] text-left">{`<Contact MaktabSharif Team/>`}</h2>
        <h3 className="text-2xl font-[800] text-[#333] text-left mb-4">
          The largest programming family in the country
        </h3>
        <p className="w-[490px] text-balance mb-4">
          Today, we are happy and satisfied with the 7-year effort of the school
          that we had for the honor and motivation of these people's success,
          and we step into the future days with a world of bigger dreams.
        </p>
        <div>{/* <Button variant={"secondary"}>View More</Button> */}</div>
      </div>
      <div className="w-[720px]">
        <img src="/hero-contact.webp" alt="hero aboutPage" className="w-full" />
      </div>
    </div>
  );
}
