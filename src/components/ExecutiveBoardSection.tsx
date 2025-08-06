import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Executive Board Images
import patronImage from "@/assets/SankharKoirala.jpeg";
import advisor1Image from "@/assets/PrameshKC.jpeg";
import advisor2Image from "@/assets/AmarSinghPun.jpeg";

// Awesome Board Members Images
import presidentImage from "@/assets/SanketKoirala.jpeg";
import vicePresidentImage from "@/assets/GyanAcharya.jpeg";
import generalSecretaryImage from "@/assets/HariNeupane.jpeg";
import treasurerImage from "@/assets/laxmansharma.jpeg";
import member1Image from "@/assets/SaujanyaKoirala.jpeg";
import member2Image from "@/assets/SarojDarnal.jpeg";

export const ExecutiveBoardSection = () => {
  const navigate = useNavigate();

  const handleMemberClick = () => {
    navigate("/about");
    setTimeout(() => {
      const boardSection = document.getElementById("board-members-section");
      if (boardSection) {
        boardSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const executiveBoard = [
    {
      name: "Shanker Prasad Koirala",
      position: "Patron",
      image: patronImage,
    },
    {
      name: "Pramesh KC",
      position: "Advisor",
      image: advisor1Image,
    },
    {
      name: "Amar Singh Pun",
      position: "Advisor",
      image: advisor2Image,
    },
  ];

  const awesomeBoardMembers = [
    {
      name: "Sanket Koirala",
      position: "President",
      image: presidentImage,
    },
    {
      name: "Gyan Prasad Acharya",
      position: "Vice President",
      image: vicePresidentImage,
    },
    {
      name: "Hari Neupane",
      position: "General Secretary",
      image: generalSecretaryImage,
    },
    {
      name: "Laxman Sharma",
      position: "Treasurer",
      image: treasurerImage,
    },
    {
      name: "Saujanya Koirala",
      position: "Member",
      image: member1Image,
    },
    {
      name: "Saroj Darnal",
      position: "Member",
      image: member2Image,
    },
  ];

  return (
    <section className="py-20 bg-foundation-gray">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Executive Board &amp;
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
            Meet Our Awesome <span className="text-primary block">Board Members</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Executive Board Tree Diagram */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-foundation-navy text-center mb-8">Executive Board</h4>

            {/* Tree Structure */}
            <div className="flex flex-col items-center space-y-6">
              {/* Patron */}
              <Card
                className="w-64 text-center border-2 border-primary shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={handleMemberClick}
              >
                <CardHeader className="pb-2">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-2">
                    <img
                      src={executiveBoard[0].image}
                      alt={executiveBoard[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-foundation-navy">
                    {executiveBoard[0].name}
                  </CardTitle>
                  <p className="text-primary font-medium">{executiveBoard[0].position}</p>
                </CardHeader>
              </Card>

            {/* Connection Lines */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-px bg-primary"></div>
                <div className="w-32 h-px bg-primary"></div>
                <div className="flex justify-between w-32">
                  <div className="h-12 w-px bg-primary"></div>
                  <div className="h-12 w-px bg-primary"></div>
                </div>
              </div>

              {/* Advisors */}
              <div className="flex space-x-8">
                {executiveBoard.slice(1).map((member, index) => (
                  <Card
                    key={index}
                    className="w-56 text-center border border-primary/50 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={handleMemberClick}
                  >
                    <CardHeader className="pb-2">
                      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-base font-bold text-foundation-navy">
                        {member.name}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Awesome Board Members */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-foundation-navy text-center mb-8">Awesome Board Members</h4>

            <div className="space-y-4">
              {awesomeBoardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-4 border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group"
                  onClick={handleMemberClick}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-foundation-navy group-hover:text-primary transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-primary font-medium">{member.position}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
