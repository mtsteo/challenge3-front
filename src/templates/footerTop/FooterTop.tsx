import trophy from "../../assets/icons/Group.svg";
import verified from "../../assets/icons/Verified.svg";
import shipping from "../../assets/icons/shipping.svg";
import support from "../../assets/icons/customer-support.svg";
import FooterTopItem from "../../components/template/footerTop/FooterTopItem";

export default function FooterTop() {
  const items = [
    {
      image: trophy,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      image: verified,
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      image: shipping,
      title: "Free Shipping",
      subtitle: "Order over $150",
    },
    {
      image: support,
      title: "24/7 support",
      subtitle: "Dedicated support",
    },
  ];
  return (
    <div className="bg-footerTop flex items-center justify-between h-48 p-16 mt-20 ">
      
        {items.map((item, idx) => {
          return (
            <FooterTopItem
              key={idx}
              img={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      
    </div>
  );
}
