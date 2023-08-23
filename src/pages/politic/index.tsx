import DayNews from "../../components/newsFeedSectionContainer/dayNews";
import Item from "../../components/newsFeedsContainer/sideNewsFeed/item";
import politicPhoto from "../../assets/politicPhoto.png";
import Banner from "../../components/banner";

const Politic = () => {
  return (
    <div className="xl:grid xl:grid-cols-12 grid-cols-10 gap-4">
      <div className="xl:col-span-9 col-span-9">
        <div className="mt-4 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <Item
            time="38"
            title="მგონია, რომ უკრაინის პრეზიდენტი ფაქტებში ვერ ერკვევა - სარჯველაძე ზელე..."
            photo={politicPhoto}
            titleFontSize="text-xl mt-2"
            style="text-sm text-[#475467] mt-2"
            text="პარლამენტის ადამიანის უფლებათა დაცვის კომიტეტის თავმჯდომარე მიხეილ სარჯველაძე უკრაინის პრეზიდენტის, ვოლოდიმირ ზელენსკის მიერ ექსპრეზიდენტ მიხეილ სააკაშვილის შესახებ გაკეთებულ განცხადებას გამოეხმაურა და აღნიშნა, რომ ზელენსკიმ კომენტარი"
          />
        </div>
        <Banner />
        <div className="mt-4 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <Item
            time="38"
            title="მგონია, რომ უკრაინის პრეზიდენტი ფაქტებში ვერ ერკვევა - სარჯველაძე ზელე..."
            photo={politicPhoto}
            titleFontSize="text-xl mt-2"
            style="text-sm text-[#475467] mt-2"
            text="პარლამენტის ადამიანის უფლებათა დაცვის კომიტეტის თავმჯდომარე მიხეილ სარჯველაძე უკრაინის პრეზიდენტის, ვოლოდიმირ ზელენსკის მიერ ექსპრეზიდენტ მიხეილ სააკაშვილის შესახებ გაკეთებულ განცხადებას გამოეხმაურა და აღნიშნა, რომ ზელენსკიმ კომენტარი"
          />
        </div>
      </div>
      <div className="xl:col-span-3 col-span-3">
        <DayNews />
      </div>
    </div>
  );
};

export default Politic;

{
  /* <Item
  time="38"
  title="მგონია, რომ უკრაინის პრეზიდენტი ფაქტებში ვერ ერკვევა - სარჯველაძე ზელე..."
  photo={politicPhoto}
  titleFontSize="text-xl mt-2"
  style="text-sm text-[#475467] mt-2"
  text="პარლამენტის ადამიანის უფლებათა დაცვის კომიტეტის თავმჯდომარე მიხეილ სარჯველაძე უკრაინის პრეზიდენტის, ვოლოდიმირ ზელენსკის მიერ ექსპრეზიდენტ მიხეილ სააკაშვილის შესახებ გაკეთებულ განცხადებას გამოეხმაურა და აღნიშნა, რომ ზელენსკიმ კომენტარი"
/> */
}
