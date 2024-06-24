import Image from "next/image";
import "./home.css"

export default function Home() {
  return (
    <main>
      <div className="body">
        <div className="company-name-cn">
          唐人街东邻里委员会
        </div>
        <div className="container">
          <div className="mission">
            MISSION
          </div>
        </div>
        <div className="goal-1-container">
          <div className="container-7">
            <span className="goal-1-script">
              I. Revitalize the eastern part of Chinatown, which includes the part of the Chinese American community that is east of Bowery and Oliver Street. Since the pandemic, this part of the neighborhood has been hit most severely by the economic downturn and has received minimum government, state, and federal assistance. Our goal is to concentrate on this area of the Chinese American community’s rejuvenation.<br />
            </span>
            <div className="goal-1-quote">
              龍馬精神
            </div>
          </div>
          <Image
            src={"/LongevitySymbol.png"}
            alt="Longevity Symbol"
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="goal-2-container">
            <Image
              src={"/PheonixSymbol.png"}
              alt="Longevity Symbol"
              width={500}
              height={500}
              quality={100}
            />
            <div className="container-6">
              <div className="goal-2-quote">
                  千軍易得，一將難求
                </div>
                <span className="goal-2-script">
                II. The East Broadway Mall is an essential part of this revitalization. Since 1988, the mall has been the seed for the economic development of East Chinatown. The mall used to be such a vibrant place, employing hundreds of people (including large sized restaurants and a few dozen smaller shops). Unfortunately, due to the economic impact and some other circumstances with the city government, the once vibrant mall has deteriorated; it lost many jobs and the city lost so many taxes. We would like to see the mall brought back to the condition before Sandy and the pandemic. The mall is, after all, the engine needed to revive East Chinatown, East Broadway, Market street, Madison street, and Henry street back to normal economic activities.
              </span>
            </div>
        </div>
        <div className="goal-3-container">
          <div className="container-3">
            <span className="goal-3-script">
              III. CENC puts community safety as its priority. The safety will involve police department protection, DA’s Office’s cooperation, and self-support by the residents and the businesses of this area. We will work with the drug rehab centers to make sure that the services they provide do not cause any crimes to the community. We will also request the city not to construct anymore shelters in this neighborhood - now and in the future. And we would like to see two of the hotels become a part of New York City’s tourist recovery program.
            </span>
            <div className="container-2">
              <div className="goal-3-quote">
                人心齊，泰山移
              </div>
            </div>
          </div>
          <Image
            src={"/DragonSymbol.png"}
            alt="Longevity Symbol"
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="goal-4-container">
          <Image
            src={"/YinYangSymbol.png"}
            alt="Longevity Symbol"
            width={400}
            height={400}
            quality={100}
          />
          <div className="container-11">
            <div className="goal-4-quote">
                和平與安寧<br />
            </div>
            <div className="goal-4-script">
              IV. We would like to beautify this neighborhood by planting more trees on the sidewalks and most importantly, redesign the traffic islands on Allen street, below Grand. All of the islands above Grand have been transformed beautifully and we would like the city to continue that work below Grand Street.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
